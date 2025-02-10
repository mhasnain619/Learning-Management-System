import React, { useState } from "react";
import { Grid, TextField, Button, Checkbox, FormControlLabel, Typography, Box, InputAdornment, IconButton } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import "./Signup.css";
import loginImage from '../../assets/signupBgRemove.png'
import Logo from '../../assets/logoRemoveBg.png'
import waveImg from '../../assets/wave.png'
import { useNavigate } from "react-router-dom";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { auth, db } from "../../FirebaseConfiq";
const SignupPage = () => {
    const [isChecked, setIsChecked] = useState(false)
    const [showPassword, setShowPassword] = useState(false);
    const [credentials, setCredentials] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const getCredentials = () => {
        if (!credentials.email.includes("@")) {
            console.log("Invalid email format");
            return;
        }

        if (credentials.password.length < 6) {
            console.log("Password should be at least 6 characters");
            return;
        }

        if (credentials.password !== credentials.confirmPassword) {
            console.log("Passwords do not match");
            return;
        }
        createUserWithEmailAndPassword(auth, credentials.email, credentials.password, credentials.confirmPassword)
            .then((userCredential) => {
                const user = userCredential.user
                console.log("User UID:", user.uid);
                localStorage.setItem('uid', user.uid)
                updateProfile(user, { displayName: credentials.name }).then(() => {
                    console.log(userCredential)
                }).catch((error) => {
                    console.log("Error updating profile:", error.message);
                })
                // Save user data to Firestore
                const userObj = {
                    name: credentials.name,
                    email: credentials.email,
                    uid: user.uid, // Store UID for reference
                };

                setDoc(doc(db, 'users', user.uid), userObj)
                    .then(() => console.log("User data saved to Firestore"))
                    .catch((error) => console.log("Error saving user to Firestore:", error.message));
                setOpen(true);
                setTimeout(() => {
                    navigate('/login')
                }, 2000);

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)

            });
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') return;
        setOpen(false);
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Grid item xs={12} md={6}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    backgroundImage: `url(${waveImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    height: '100vh',
                    width: '100%',
                }} className="leftPanel">
                <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" variant="filled" sx={{ width: '100%' }}>
                        Signup Successful!
                    </Alert>
                </Snackbar>

                <Box className='welComeTo'>
                    <Typography sx={{ color: 'white', fontSize: '25px', fontWeight: 'bold' }} gutterBottom>
                        WELCOME TO Jawan Pakistan
                    </Typography>
                    <Typography sx={{ color: 'white', fontSize: '25px', fontWeight: 'bold' }} gutterBottom>
                        Learning Management System
                    </Typography>
                    <Typography sx={{ color: '#FDFDFD', fontSize: '20px', }} gutterBottom>
                        With a user-friendly interface and accessible resources, Jawan Pakistan LMS is committed to building a skilled and knowledgeable workforce for a brighter future.
                    </Typography>
                </Box>
                <Box sx={{ height: '250px', width: '350px' }}>
                    <img height='100%' width='100%' src={loginImage} alt="Learning System" className="image" />
                </Box>
            </Grid>
            <Grid item xs={12} md={6} className="rightPanel">
                <Box>
                    <Typography variant="h5" align="start" gutterBottom>
                        Create Your Account
                    </Typography>
                    <TextField
                        type="text"
                        fullWidth
                        onChange={(e) => setCredentials({ ...credentials, name: e.target.value })}
                        label="Full Name"
                        variant="outlined"
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                        label="Email"
                        variant="outlined"
                        margin="normal"
                        type="email"
                    />
                    <TextField
                        fullWidth
                        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                        label="Password"
                        type="password"
                        variant="outlined"
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        label="Confirm Password"
                        onChange={(e) => setCredentials({ ...credentials, confirmPassword: e.target.value })}
                        type={showPassword ? "text" : "password"}
                        variant="outlined"
                        margin="normal"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <FormControlLabel control={<Checkbox checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />} label="Remember me" />
                    <Button disabled={!isChecked} onClick={getCredentials} fullWidth className="loginButton" size="large" variant="contained">
                        Signup
                    </Button>
                </Box>
                <Typography variant="body2" align="center" className="orText">
                    Or
                </Typography>
                <Typography variant="body2" align="center" color="primary" className="clickable" onClick={() => navigate('/login')}>
                    Login
                </Typography>
            </Grid>
        </Grid>
    );
};

export default SignupPage;

import React, { useState } from "react";
import { Grid, TextField, Button, Checkbox, FormControlLabel, Typography, Box, InputAdornment, IconButton, Alert } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import "./Login.css";
import loginImage from '../../assets/signupBgRemove.png'
import Logo from '../../assets/logoRemoveBg.png'
import waveImg from '../../assets/wave.png'
import { getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "../../FirebaseConfiq";
import { useNavigate } from "react-router-dom";
import Snackbar from '@mui/material/Snackbar';
import { GoogleAuthProvider } from "firebase/auth";
const LoginPage = () => {
    const [rememberMe, setRememberMe] = useState(false)
    const [showPassword, setShowPassword] = useState(false);
    const [userLoginData, setUserLoginData] = useState({
        email: "",
        password: "",
    })
    const [error, setError] = useState("");
    const [open, setOpen] = useState(false);

    const navigate = useNavigate()
    const userLogedIn = () => {
        signInWithEmailAndPassword(auth, userLoginData.email, userLoginData.password)
            .then((userCredential) => {
                setOpen(true);
                navigate('/');
                console.log('User Loged in successfully.');
                navigate('/')

            })
            .catch((error) => {
                setError(error.message);
            });

    }
    const loginWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;

                // Store UID in localStorage
                localStorage.setItem("uid", user.uid);

                console.log("Google Login Success:", user);
                navigate('/dashboard'); // Redirect after login
            })
            .catch((error) => {
                setError(error.message);
            });
    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') return;
        setOpen(false);
        setError("");
    };
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault(); // Prevent default behavior
    };

    return (
        <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
            <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" variant="filled" sx={{ width: '100%' }}>
                    Login Successful!
                </Alert>
            </Snackbar>
            {/* Error Snackbar */}
            <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={!!error} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" variant="filled">
                    {error}
                </Alert>
            </Snackbar>
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
                    <Typography sx={{ color: '#FDFDFD', fontSize: '20px', }} gutterBottom>
                        Access your learning journey with ease! Sign up to create your account and explore interactive courses. Already registered? Log in to continue your progress and enhance your skills with Jawan Pakistan LMS.
                    </Typography>
                </Box>
                <Box sx={{ height: '250px', width: '350px' }}>
                    <img height='100%' width='100%' src={loginImage} alt="Learning System" className="image" />
                </Box>
            </Grid>
            <Grid item xs={12} md={6} className="rightPanel">
                <Box>
                    <Typography variant="h5" gutterBottom>
                        LOGIN
                    </Typography>
                    <TextField onChange={(e) => setUserLoginData({ ...userLoginData, email: e.target.value })} fullWidth label="Email" variant="outlined" margin="normal" />

                    <TextField
                        onChange={(e) => setUserLoginData({ ...userLoginData, password: e.target.value })}
                        fullWidth
                        label="Password"
                        type={showPassword ? "text" : "password"} // Toggle between text and password type
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
                    <FormControlLabel control={<Checkbox onChange={(e) => setRememberMe(e.target.checked)} />} label="Remember me" />

                    <Button disabled={!rememberMe} onClick={userLogedIn} fullWidth className="loginButton" size="large" variant="contained">
                        Login
                    </Button>
                </Box>
                <Typography variant="body2" align="center" className="orText">
                    Or
                </Typography>
                <Typography onClick={() => navigate('/signup')} variant="body2" align="center" color="primary" className="clickable">
                    Sign up
                </Typography>
                <Typography onClick={loginWithGoogle} variant="body2" align="center" color="primary" className="clickable">
                    sign in with google
                </Typography>
            </Grid>
        </Grid>
    );
};

export default LoginPage;

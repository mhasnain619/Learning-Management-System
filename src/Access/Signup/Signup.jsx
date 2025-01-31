import React, { useState } from "react";
import { Grid, TextField, Button, Checkbox, FormControlLabel, Typography, Box, InputAdornment, IconButton } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import "./Signup.css";
import loginImage from '../../assets/loginImage.png'
import Logo from '../../assets/logo.png'
import { useNavigate } from "react-router-dom";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const SignupPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const getCredentials = () => {
        localStorage.setItem('userCredentials', JSON.stringify(credentials)); // Fix: Store as string
        setOpen(true);
        setTimeout(() => {
            navigate('/login')
        }, 1000)
        console.log(credentials);
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
            <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} className="leftPanel">
                <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" variant="filled" sx={{ width: '100%' }}>
                        Signup Successful!
                    </Alert>
                </Snackbar>
                <Box sx={{ display: 'inline-block', marginBottom: '15px', height: '50px', width: '300px' }}>
                    <img height='100%' width='100%' src={Logo} alt="Logo" />
                </Box>
                <Typography variant="h4" gutterBottom>
                    WELCOME TO LEARNING MANAGEMENT SYSTEM
                </Typography>
                <Box sx={{ height: '300px', width: '450px' }}>
                    <img height='100%' width='100%' src={loginImage} alt="Learning System" className="image" />
                </Box>
            </Grid>
            <Grid item xs={12} md={6} className="rightPanel">
                <Box>
                    <Typography variant="h5" align="start" gutterBottom>
                        Signup
                    </Typography>
                    <TextField
                        fullWidth
                        onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                        label="Email"
                        variant="outlined"
                        margin="normal"
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
                    <FormControlLabel control={<Checkbox />} label="Remember me" />
                    <Button onClick={getCredentials} fullWidth className="loginButton" size="large" variant="contained">
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

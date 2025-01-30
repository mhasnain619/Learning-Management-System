import React, { useState } from "react";
import { Grid, TextField, Button, Checkbox, FormControlLabel, Typography, Box, InputAdornment, IconButton } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import "./Login.css";
import loginImage from '../../../assets/loginImage.png'
import Logo from '../../../assets/logo.png'

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault(); // Prevent default behavior
    };

    return (
        <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} className="leftPanel">
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
                        LOGIN
                    </Typography>
                    <TextField fullWidth label="Email" variant="outlined" margin="normal" />

                    <TextField
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
                    <FormControlLabel control={<Checkbox />} label="Remember me" />

                    <Button fullWidth className="loginButton" size="large" variant="contained">
                        Login
                    </Button>
                </Box>
                <Typography variant="body2" align="center" className="orText">
                    Or
                </Typography>
                <Typography variant="body2" align="center" color="primary" className="clickable">
                    Sign up
                </Typography>
            </Grid>
        </Grid>
    );
};

export default LoginPage;

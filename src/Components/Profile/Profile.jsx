import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Card, CardContent, Typography, Avatar, Button, Grid, Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { FaLocationDot } from "react-icons/fa6";

import {
    Business as BusinessIcon,
    Email as EmailIcon,
    Phone as PhoneIcon,
    LocationOn as LocationOnIcon,
    Language as LanguageIcon,
} from '@mui/icons-material';

import userImg from '../../assets/userimg.png';
import './profile.css';

const UserProfile = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => unsubscribe(); // Cleanup listener
    }, [auth]);

    return (
        <Box sx={{ py: 8 }}>
            {user ? (
                <Card className="user-card">
                    <Grid container spacing={3}>
                        {/* User Avatar and Basic Info */}
                        <Grid item xs={12} md={3} display="flex" justifyContent="center" alignItems="center">
                            <Avatar
                                alt={user.displayName || "User"}
                                src={user.photoURL || userImg}
                                className="user-avatar"
                            />
                        </Grid>
                        <Grid item xs={12} md={9}>
                            <Typography className='userName'>
                                {user.displayName || "No Name Available"}
                            </Typography>
                            <Typography className='userNameSngCompany'>
                                {user.email}
                            </Typography>
                            <Grid container spacing={2} marginTop={2}>
                                <Grid item xs={12} sm="auto">
                                    <Button variant="contained" color="primary" size="large">
                                        View Profile
                                    </Button>
                                </Grid>
                                <Grid item xs={12} sm="auto">
                                    <Button variant="contained" color="secondary" size="large">
                                        Log Out
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    {/* Additional User Details */}
                    <CardContent className="card-content">
                        <Grid container spacing={1}>
                            {/* Company Placeholder (Firebase doesn't store it by default) */}
                            <Grid item xs={12} md={4}>
                                <Box style={{ textAlign: 'start' }}>
                                    <p className='nameContAddre'>Company Details :</p>
                                    <span className='iconAndText'>
                                        <BusinessIcon className="section-icon" fontSize="small" />
                                        <p>{user.displayName || "No Company"}</p>
                                    </span>
                                    <p>Professional at something...</p>
                                </Box>
                            </Grid>

                            {/* Contact Information */}
                            <Grid item xs={12} md={4}>
                                <Box style={{ textAlign: 'start' }}>
                                    <p className='nameContAddre'>Contact Information :</p>
                                    <span className='iconAndText'>
                                        <EmailIcon className="section-icon" fontSize="small" />
                                        <p>{user.email}</p>
                                    </span>
                                    <span className='iconAndText'>
                                        <PhoneIcon className="section-icon" fontSize="small" />
                                        <p>{user.phoneNumber || "No Phone"}</p>
                                    </span>
                                    <span className='iconAndText'>
                                        <LanguageIcon className="section-icon" fontSize="small" />
                                        <p>{user.uid || "No Website"}</p>
                                    </span>
                                </Box>
                            </Grid>

                            {/* Address Placeholder */}
                            <Grid item xs={12} md={4}>
                                <Box style={{ textAlign: 'start' }}>
                                    <p className='nameContAddre'>Address :</p>
                                    <span className='Address'>
                                        <FaLocationDot className='locationIcon' />
                                        <p>{"No Address Available"}</p>
                                    </span>
                                </Box>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            ) : (
                <CircularProgress />
            )}
        </Box>
    );
};

export default UserProfile;

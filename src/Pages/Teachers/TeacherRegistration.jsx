import React, { useState } from "react";
import Input from "../../Components/Input/Input";
import { Box, Button, Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import './TeacherRegistration.css'
const TeacherRegistrationForm = () => {
    let [userObj, setUserObj] = useState({
        userFirstName: '',
        userLastName: '',
        userEmail: '',
        gender: ''
    });

    let [userArray, setUserArray] = useState([]);
    const navigate = useNavigate()

    const handleSubmit = () => {
        setUserArray([...userArray, userObj]);
        console.log(userArray);
        setUserObj({ userFirstName: '', userLastName: '', userEmail: '', gender: '' });
        localStorage.setItem('teachersData', JSON.stringify(userArray))
        navigate('/teacher-list')
    };

    return (
        <Container sx={{ py: 8 }} maxWidth="sm">
            <Box className='formBox'>
                <Typography className="teacherRegistrationName" variant="h4" gutterBottom>
                    Teacher Registration Form
                </Typography>
                <Input
                    type='text'
                    label="Teacher First Name"
                    placeholder='Enter your first name'
                    value={userObj.userFirstName}
                    onChangeEvent={(e) => setUserObj({ ...userObj, userFirstName: e.target.value })}
                />
                <Input
                    type='text'
                    label="Teacher Last Name"
                    placeholder='Enter your last name'
                    value={userObj.userLastName}
                    onChangeEvent={(e) => setUserObj({ ...userObj, userLastName: e.target.value })}
                />
                <Input
                    type='text'
                    label="Teacher Email"
                    placeholder='Enter your email'
                    value={userObj.userEmail}
                    onChangeEvent={(e) => setUserObj({ ...userObj, userEmail: e.target.value })}
                />
                <Input
                    type='number'
                    label="Teacher Number"
                    placeholder='Enter your number'
                    value={userObj.userEmail}
                    onChangeEvent={(e) => setUserObj({ ...userObj, userEmail: e.target.value })}
                />
                <FormControl component="fieldset" margin="normal" required>
                    <FormLabel>Gender</FormLabel>
                    <RadioGroup
                        row
                        name="gender"
                        value={userObj.gender || ''}
                        onChange={(e) => setUserObj({ ...userObj, gender: e.target.value })}
                    >
                        <FormControlLabel value="Male" control={<Radio />} label="Male" />
                        <FormControlLabel value="Female" control={<Radio />} label="Female" />
                        <FormControlLabel value="Other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FormControl>
                <Button onClick={handleSubmit} size="large" variant="contained" color="primary" fullWidth>
                    Register
                </Button>
            </Box>
            {/* <CustomizedTables data={userArray} /> */}
        </Container>
    );
};

export default TeacherRegistrationForm;

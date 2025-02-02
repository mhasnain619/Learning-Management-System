import React, { useState } from "react";
import Input from "../../Components/Input/Input";
import { Box, Button, Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import './StudentRegistration.css'
const SchoolTeacherRegistration = () => {
    let [userObj, setUserObj] = useState({
        userFirstName: '',
        userLastName: '',
        userEmail: '',
        userClass: '',
        gender: ''
    });

    let [userArray, setUserArray] = useState([]);
    const navigate = useNavigate()

    const handleSubmit = () => {
        setUserArray([...userArray, userObj]);
        console.log(userArray);
        setUserObj({ userFirstName: '', userLastName: '', userEmail: '', userClass: '', gender: '' });
        localStorage.setItem('studentData', JSON.stringify(userArray))
        navigate('/student-list')
    };

    return (
        <Container sx={{ py: 8 }} maxWidth="sm">
            <Box className='formBox'>
                <Typography className="studentRegistrationName" variant="h4" gutterBottom>
                    School Teacher Registration
                </Typography>
                <Input
                    type='text'
                    label="First Name"
                    placeholder='Enter your first name'
                    value={userObj.userFirstName}
                    onChangeEvent={(e) => setUserObj({ ...userObj, userFirstName: e.target.value })}
                />
                <Input
                    type='text'
                    label="Last Name"
                    placeholder='Enter your last name'
                    value={userObj.userLastName}
                    onChangeEvent={(e) => setUserObj({ ...userObj, userLastName: e.target.value })}
                />
                <Input
                    type='text'
                    label="Email"
                    placeholder='Enter your email'
                    value={userObj.userEmail}
                    onChangeEvent={(e) => setUserObj({ ...userObj, userEmail: e.target.value })}
                />
                <Input
                    type='text'
                    label="School Name"
                    placeholder='Enter your school name'
                    value={userObj.userEmail}
                    onChangeEvent={(e) => setUserObj({ ...userObj, userEmail: e.target.value })}
                />
                <Input
                    type='number'
                    label="Class"
                    placeholder='Enter your class'
                    value={userObj.userClass}
                    onChangeEvent={(e) => setUserObj({ ...userObj, userClass: e.target.value })}
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

export default SchoolTeacherRegistration;

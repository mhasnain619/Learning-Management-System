import React, { useState } from "react";
import Input from "../../Components/Input/Input";
import { Box, Button, Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import './TeacherRegistration.css'
const TeacherRegistrationForm = () => {
    let [teacherObj, setTeacherObj] = useState({
        teacherFirstName: '',
        teacherLastName: '',
        teacherEmail: '',
        teacherNumber: '',
        gender: ''
    });

    const navigate = useNavigate()

    const handleSubmit = () => {
        console.log('Teacher obj : ', teacherObj);
        setTeacherObj({ teacherFirstName: '', teacherLastName: '', teacherNumber: '', teacherEmail: '', gender: '' });
        navigate('/teacher/teacher-list')
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
                    value={teacherObj.teacherFirstName}
                    onChangeEvent={(e) => setTeacherObj({ ...teacherObj, teacherFirstName: e.target.value })}
                />
                <Input
                    type='text'
                    label="Teacher Last Name"
                    placeholder='Enter your last name'
                    value={teacherObj.teacherLastName}
                    onChangeEvent={(e) => setTeacherObj({ ...teacherObj, teacherLastName: e.target.value })}
                />
                <Input
                    type='email'
                    label="Teacher Email"
                    placeholder='Enter your email'
                    value={teacherObj.teacherEmail}
                    onChangeEvent={(e) => setTeacherObj({ ...teacherObj, teacherEmail: e.target.value })}
                />
                <Input
                    type='number'
                    label="Teacher Number"
                    placeholder='Enter your number'
                    value={teacherObj.teacherNumber}
                    onChangeEvent={(e) => setTeacherObj({ ...teacherObj, teacherNumber: e.target.value })}
                />
                <FormControl component="fieldset" margin="normal" required>
                    <FormLabel>Gender</FormLabel>
                    <RadioGroup
                        row
                        name="gender"
                        value={teacherObj.gender || ''}
                        onChange={(e) => setTeacherObj({ ...teacherObj, gender: e.target.value })}
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

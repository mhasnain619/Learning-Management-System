import React, { useState } from "react";
import Input from "../../Components/Input/Input";
import { Box, Button, Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import './StudentRegistration.css'
const SchoolTeacherRegistration = () => {
    let [schoolTeacherObj, setSchoolTeacherObj] = useState({
        schoolTeacherFirstName: '',
        schoolTeacherLastname: '',
        schoolTeacherEmail: '',
        teacherSchoolName: '',
        teacherClass: '',
        gender: ''
    });

    const navigate = useNavigate()

    const handleSubmit = () => {
        console.log('Teacher object is ', schoolTeacherObj);
        setSchoolTeacherObj({ schoolTeacherFirstName: '', schoolTeacherLastname: '', schoolTeacherEmail: '', teacherSchoolName: '', teacherClass: '', gender: '' });
        navigate('/teacher/teacher-list')
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
                    value={schoolTeacherObj.schoolTeacherFirstName}
                    onChangeEvent={(e) => setSchoolTeacherObj({ ...schoolTeacherObj, schoolTeacherFirstName: e.target.value })}
                />
                <Input
                    type='text'
                    label="Last Name"
                    placeholder='Enter your last name'
                    value={schoolTeacherObj.schoolTeacherLastname}
                    onChangeEvent={(e) => setSchoolTeacherObj({ ...schoolTeacherObj, schoolTeacherLastname: e.target.value })}
                />
                <Input
                    type='text'
                    label="Email"
                    placeholder='Enter your email'
                    value={schoolTeacherObj.schoolTeacherEmail}
                    onChangeEvent={(e) => setSchoolTeacherObj({ ...schoolTeacherObj, schoolTeacherEmail: e.target.value })}
                />
                <Input
                    type='text'
                    label="School Name"
                    placeholder='Enter your school name'
                    value={schoolTeacherObj.teacherSchoolName}
                    onChangeEvent={(e) => setSchoolTeacherObj({ ...schoolTeacherObj, teacherSchoolName: e.target.value })}
                />
                <Input
                    type='number'
                    label="Class"
                    placeholder='Enter your class'
                    value={schoolTeacherObj.teacherClass}
                    onChangeEvent={(e) => setSchoolTeacherObj({ ...schoolTeacherObj, teacherClass: e.target.value })}
                />
                <FormControl component="fieldset" margin="normal" required>
                    <FormLabel>Gender</FormLabel>
                    <RadioGroup
                        row
                        name="gender"
                        value={schoolTeacherObj.gender || ''}
                        onChange={(e) => setSchoolTeacherObj({ ...schoolTeacherObj, gender: e.target.value })}
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

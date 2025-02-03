import React, { useState } from "react";
import Input from "../../Components/Input/Input";
import { Box, Button, Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import './StudentRegistration.css'
const SchoolStudentRegistration = () => {
    let [schoolStudentObj, setSchoolStudentObj] = useState({
        SchoolStuFirstName: '',
        schoolStuLastName: '',
        schoolStuEmail: '',
        schoolStuClass: '',
        schoolStuSchoolName: '',
        gender: ''
    });

    const navigate = useNavigate()

    const handleSubmit = () => {
        console.log('school student object is ', schoolStudentObj);
        setSchoolStudentObj({ SchoolStuFirstName: '', schoolStuLastName: '', schoolStuEmail: '', schoolStuClass: '', schoolStuSchoolName: '', gender: '' });
        navigate('/student/student-list')
    };

    return (
        <Container sx={{ py: 8 }} maxWidth="sm">
            <Box className='formBox'>
                <Typography className="studentRegistrationName" variant="h4" gutterBottom>
                    Student Registration Form
                </Typography>
                <Input
                    type='text'
                    label="First Name"
                    placeholder='Enter your first name'
                    value={schoolStudentObj.SchoolStuFirstName}
                    onChangeEvent={(e) => setSchoolStudentObj({ ...schoolStudentObj, SchoolStuFirstName: e.target.value })}
                />
                <Input
                    type='text'
                    label="Last Name"
                    placeholder='Enter your last name'
                    value={schoolStudentObj.schoolStuLastName}
                    onChangeEvent={(e) => setSchoolStudentObj({ ...schoolStudentObj, schoolStuLastName: e.target.value })}
                />
                <Input
                    type='text'
                    label="Email"
                    placeholder='Enter your email'
                    value={schoolStudentObj.schoolStuEmail}
                    onChangeEvent={(e) => setSchoolStudentObj({ ...schoolStudentObj, schoolStuEmail: e.target.value })}
                />
                <Input
                    type='text'
                    label="School Name"
                    placeholder='Enter your school name'
                    value={schoolStudentObj.schoolStuSchoolName}
                    onChangeEvent={(e) => setSchoolStudentObj({ ...schoolStudentObj, schoolStuSchoolName: e.target.value })}
                />
                <Input
                    type='number'
                    label="Class"
                    placeholder='Enter your class'
                    value={schoolStudentObj.schoolStuClass}
                    onChangeEvent={(e) => setSchoolStudentObj({ ...schoolStudentObj, schoolStuClass: e.target.value })}
                />
                <FormControl component="fieldset" margin="normal" required>
                    <FormLabel>Gender</FormLabel>
                    <RadioGroup
                        row
                        name="gender"
                        value={schoolStudentObj.gender || ''}
                        onChange={(e) => setSchoolStudentObj({ ...schoolStudentObj, gender: e.target.value })}
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
        </Container>
    );
};

export default SchoolStudentRegistration;

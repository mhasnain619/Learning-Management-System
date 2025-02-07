import React, { useState } from "react";
import Input from "../../Components/Input/Input";
import { Box, Button, Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import './AdmissionForm.css'
const AdmissionForm = () => {
    let [admissionObj, setAdmissionObj] = useState({
        admissionFirstName: '',
        admissionLastName: '',
        admissionEmail: '',
        admissionPhoneNumber: '',
        admissionDate: '',
        admissionQualification: '',
        gender: ''
    });

    const navigate = useNavigate()

    const handleSubmit = () => {
        console.log('asmossion obj is ', admissionObj);
        setAdmissionObj({ admissionFirstName: '', admissionLastName: '', admissionEmail: '', admissionPhoneNumber: '', admissionDate: '', admissionQualification: '', gender: '' });
        navigate('/student/student-list')
    };

    return (
        <Container sx={{ py: 8 }} maxWidth="sm">
            <Box className='formBox'>
                <Typography sx={{ fontWeight: 'bold' }} variant="h4" gutterBottom>
                    Admission Form
                </Typography>
                <Input
                    type='text'
                    label="Name"
                    placeholder='Enter your full name'
                    value={admissionObj.admissionFirstName}
                    onChangeEvent={(e) => setAdmissionObj({ ...admissionObj, admissionFirstName: e.target.value })}
                />
                <Input
                    type='text'
                    label="Email"
                    placeholder='Enter your email'
                    value={admissionObj.admissionEmail}
                    onChangeEvent={(e) => setAdmissionObj({ ...admissionObj, admissionEmail: e.target.value })}
                />
                <Input
                    type='number'
                    label="Phone Number"
                    placeholder='Enter your Phone Number'
                    value={admissionObj.admissionPhoneNumber}
                    onChangeEvent={(e) => setAdmissionObj({ ...admissionObj, admissionPhoneNumber: e.target.value })}
                />
                <Input
                    type='date'
                    // label="Date of Birth"
                    // placeholder='Enter your date of birth'
                    value={admissionObj.admissionDate}
                    onChangeEvent={(e) => setAdmissionObj({ ...admissionObj, admissionDate: e.target.value })}
                />
                <Input
                    type='text'
                    label="Qualification"
                    placeholder='Enter your last qualification'
                    value={admissionObj.admissionQualification}
                    onChangeEvent={(e) => setAdmissionObj({ ...admissionObj, admissionQualification: e.target.value })}
                />
                <FormControl component="fieldset" margin="normal" required>
                    <FormLabel>Gender</FormLabel>
                    <RadioGroup
                        row
                        name="gender"
                        value={admissionObj.gender || ''}
                        onChange={(e) => setAdmissionObj({ ...admissionObj, gender: e.target.value })}
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

export default AdmissionForm;

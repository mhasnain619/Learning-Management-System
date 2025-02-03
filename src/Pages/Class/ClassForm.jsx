import React, { useState } from "react";
import Input from "../../Components/Input/Input";
import { Box, Button, Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import './ClassForm.css'
const ClassForm = () => {
    let [classObj, setClassObj] = useState({
        classUserFirstName: '',
        classUserLastName: '',
        classUserEmail: '',
        classUserPhone: '',
        classUserDate: '',
        classUserQualification: '',
        gender: ''
    });

    const navigate = useNavigate()

    const handleSubmit = () => {
        console.log('class object is ', classObj);
        setClassObj({ classUserFirstName: '', classUserLastName: '', classUserEmail: '', classUserPhone: '', classUserDate: '', classUserQualification: '', gender: '' });
        navigate('/class/class-list')
    };

    return (
        <Container sx={{ py: 8 }} maxWidth="sm">
            <Box className='formBox'>
                <Typography sx={{ fontWeight: 'bold' }} variant="h4" gutterBottom>
                    Class Registration Form
                </Typography>
                <Input
                    type='text'
                    label="First Name"
                    placeholder='Enter your first name'
                    value={classObj.classUserFirstName}
                    onChangeEvent={(e) => setClassObj({ ...classObj, classUserFirstName: e.target.value })}
                />
                <Input
                    type='text'
                    label="Last Name"
                    placeholder='Enter your last name'
                    value={classObj.classUserLastName}
                    onChangeEvent={(e) => setClassObj({ ...classObj, classUserLastName: e.target.value })}
                />
                <Input
                    type='text'
                    label="Email"
                    placeholder='Enter your email'
                    value={classObj.classUserEmail}
                    onChangeEvent={(e) => setClassObj({ ...classObj, classUserEmail: e.target.value })}
                />
                <Input
                    type='number'
                    label="Phone Number"
                    placeholder='Enter your Phone Number'
                    value={classObj.classUserPhone}
                    onChangeEvent={(e) => setClassObj({ ...classObj, classUserPhone: e.target.value })}
                />
                <Input
                    type='date'
                    value={classObj.classUserDate}
                    onChangeEvent={(e) => setClassObj({ ...classObj, classUserDate: e.target.value })}
                />
                <Input
                    type='text'
                    label="Qualification"
                    placeholder='Enter your qualification'
                    value={classObj.classUserQualification}
                    onChangeEvent={(e) => setClassObj({ ...classObj, classUserQualification: e.target.value })}
                />
                <FormControl component="fieldset" margin="normal" required>
                    <FormLabel>Gender</FormLabel>
                    <RadioGroup
                        row
                        name="gender"
                        value={classObj.gender || ''}
                        onChange={(e) => setClassObj({ ...classObj, gender: e.target.value })}
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

export default ClassForm;

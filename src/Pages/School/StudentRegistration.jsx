import React, { useState } from "react";
import Input from "../../Components/Input/Input";
import { Box, Button, Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import './StudentRegistration.css'
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../FirebaseConfiq';
const SchoolStudentRegistration = () => {
    let [schoolStudentObj, setSchoolStudentObj] = useState({
        userFirstName: '',
        userLastName: '',
        userEmail: '',
        userClass: '',
        schoolStuSchoolName: '',
        gender: ''
    });

    const navigate = useNavigate()

    const handleSubmit = async () => {
        try {
            console.log("Firestore instance: ", db); // Debugging Firestore instance
            const docRef = await addDoc(collection(db, "students"), schoolStudentObj);
            console.log("Document written with ID: ", docRef.id);
            setSchoolStudentObj({ userFirstName: '', userLastName: '', userEmail: '', userClass: '', schoolStuSchoolName: '', gender: '' });
            navigate('/student/student-list');
        } catch (error) {
            console.error("Error adding document: ", error);
        }
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
                    value={schoolStudentObj.userFirstName}
                    onChangeEvent={(e) => setSchoolStudentObj({ ...schoolStudentObj, userFirstName: e.target.value })}
                />
                <Input
                    type='text'
                    label="Last Name"
                    placeholder='Enter your last name'
                    value={schoolStudentObj.userLastName}
                    onChangeEvent={(e) => setSchoolStudentObj({ ...schoolStudentObj, userLastName: e.target.value })}
                />
                <Input
                    type='text'
                    label="Email"
                    placeholder='Enter your email'
                    value={schoolStudentObj.userEmail}
                    onChangeEvent={(e) => setSchoolStudentObj({ ...schoolStudentObj, userEmail: e.target.value })}
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
                    value={schoolStudentObj.userClass}
                    onChangeEvent={(e) => setSchoolStudentObj({ ...schoolStudentObj, userClass: e.target.value })}
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

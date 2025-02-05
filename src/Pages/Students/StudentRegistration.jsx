import React, { useState } from "react";
import Input from "../../Components/Input/Input";
import { Box, Button, Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import './StudentRegistration.css';
import CircularProgress from '@mui/material/CircularProgress';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../FirebaseConfiq';

const StudentRegistrationForm = () => {
    let [openLoader, setOpenLoader] = useState(false)
    let [studentObj, setStudentObj] = useState({
        userFirstName: '',
        userLastName: '',
        userEmail: '',
        userClass: '',
        gender: ''
    });

    const navigate = useNavigate();

    const handleSubmit = async () => {
        setOpenLoader(true)
        if (studentObj.userFirstName == '' || studentObj.userLastName == '' || studentObj.userEmail == '' || studentObj.userClass == '' || studentObj.gender == '') {
            setOpenLoader(false)
            alert('Please fill all the fields')
            return;
        }
        try {
            console.log("Firestore instance: ", db); // Debugging Firestore instance
            const docRef = await addDoc(collection(db, "students"), studentObj);
            console.log("Document written with ID: ", docRef.id);
            setStudentObj({ userFirstName: '', userLastName: '', userEmail: '', userClass: '', gender: '' });
            navigate('/student/student-list');
        } catch (error) {
            console.error("Error adding document: ", error);
        }
        setOpenLoader(false)
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
                    value={studentObj.userFirstName}
                    onChangeEvent={(e) => setStudentObj({ ...studentObj, userFirstName: e.target.value })}
                />
                <Input
                    type='text'
                    label="Last Name"
                    placeholder='Enter your last name'
                    value={studentObj.userLastName}
                    onChangeEvent={(e) => setStudentObj({ ...studentObj, userLastName: e.target.value })}
                />
                <Input
                    type='text'
                    label="Email"
                    placeholder='Enter your email'
                    value={studentObj.userEmail}
                    onChangeEvent={(e) => setStudentObj({ ...studentObj, userEmail: e.target.value })}
                />
                <Input
                    type='number'
                    label="Class"
                    placeholder='Enter your class'
                    value={studentObj.userClass}
                    onChangeEvent={(e) => setStudentObj({ ...studentObj, userClass: e.target.value })}
                />
                <FormControl component="fieldset" margin="normal" required>
                    <FormLabel>Gender</FormLabel>
                    <RadioGroup
                        row
                        name="gender"
                        value={studentObj.gender || ''}
                        onChange={(e) => setStudentObj({ ...studentObj, gender: e.target.value })}
                    >
                        <FormControlLabel value="Male" control={<Radio />} label="Male" />
                        <FormControlLabel value="Female" control={<Radio />} label="Female" />
                        <FormControlLabel value="Other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FormControl>
                <Button onClick={handleSubmit} size="large" variant="contained" color="primary" fullWidth>
                    {openLoader ? <CircularProgress size={24} sx={{ color: 'white' }} /> : "Register"}
                </Button>

            </Box>
        </Container>
    );
};

export default StudentRegistrationForm;

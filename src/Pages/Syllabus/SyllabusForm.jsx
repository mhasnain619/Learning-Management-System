import React, { useState } from "react";
import Input from "../../Components/Input/Input";
import { Box, Button, Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import './SyllabusForm.css'
const SyllabusForm = () => {
    let [userObj, setUserObj] = useState({
        subjectName: '',
        userClass: '',
        gender: ''
    });

    let [userArray, setUserArray] = useState([]);
    const navigate = useNavigate()

    const handleSubmit = () => {
        setUserArray([...userArray, userObj]);
        console.log(userArray);
        setUserObj({ subjectName: '', userClass: '', gender: '' });
        localStorage.setItem('studentData', JSON.stringify(userArray))
        navigate('/student-list')
    };

    return (
        <Container sx={{ py: 8 }} maxWidth="sm">
            <Box className='formBox'>
                <Typography className="addSyllabusName" sx={{ fontWeight: 'bold' }} variant="h4" gutterBottom>
                    Add Syllabus
                </Typography>
                <Input
                    type='text'
                    label="Subject Name"
                    placeholder='Enter your subject name'
                    value={userObj.subjectName}
                    onChangeEvent={(e) => setUserObj({ ...userObj, subjectName: e.target.value })}
                />

                <Input
                    type='number'
                    label="Class"
                    placeholder='Enter your class'
                    value={userObj.userClass}
                    onChangeEvent={(e) => setUserObj({ ...userObj, userClass: e.target.value })}
                />
                <Input
                    type='file'
                    value={userObj.userClass}
                    onChangeEvent={(e) => setUserObj({ ...userObj, userClass: e.target.value })}
                />

                <Button onClick={handleSubmit} size="large" variant="contained" color="primary" fullWidth>
                    Add
                </Button>
            </Box>
            {/* <CustomizedTables data={userArray} /> */}
        </Container>
    );
};

export default SyllabusForm;

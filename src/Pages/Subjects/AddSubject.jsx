import React, { useState } from "react";
import Input from "../../Components/Input/Input";
import { Box, Button, Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import './AddSubject.css'
const SubjectRegistrationForm = () => {
    let [userObj, setUserObj] = useState({
        subjectName: '',
        subjectClass: '',
        selectGroup: ''
    });

    let [userArray, setUserArray] = useState([]);
    const navigate = useNavigate()

    const handleSubmit = () => {
        setUserArray([...userArray, userObj]);
        console.log(userArray);
        setUserObj({ subjectName: '', userLastName: '', userEmail: '', subjectClass: '', selectGroup: '' });
        localStorage.setItem('subjectData', JSON.stringify(userArray))
        navigate('/student-list')
    };

    return (
        <Container sx={{ py: 8 }} maxWidth="sm">
            <Box className='formBox'>
                <Typography sx={{ fontWeight: 'bold' }} variant="h4" gutterBottom>
                    Add Subject
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
                    value={userObj.subjectClass}
                    onChangeEvent={(e) => setUserObj({ ...userObj, subjectClass: e.target.value })}
                />
                <FormControl component="fieldset" margin="normal" required>
                    <FormLabel>Select Group</FormLabel>
                    <RadioGroup
                        row
                        name="selectGroup"
                        value={userObj.selectGroup || ''}
                        onChange={(e) => setUserObj({ ...userObj, selectGroup: e.target.value })}
                    >
                        <FormControlLabel value="General-Science" control={<Radio />} label="General-Science" />
                        <FormControlLabel value="Pre-Engineering" control={<Radio />} label="Pre-Engineering" />
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

export default SubjectRegistrationForm;

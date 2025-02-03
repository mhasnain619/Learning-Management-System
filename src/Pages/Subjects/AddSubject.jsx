import React, { useState } from "react";
import Input from "../../Components/Input/Input";
import { Box, Button, Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import './AddSubject.css'
const SubjectRegistrationForm = () => {
    let [subjectObj, setSubjectObj] = useState({
        subjectName: '',
        subjectClass: '',
        selectGroup: ''
    });

    const navigate = useNavigate()

    const handleSubmit = () => {
        console.log('subject obj is: ', subjectObj);
        setSubjectObj({ subjectName: '', subjectClass: '', selectGroup: '' });
        navigate('/subject/subject-list')
    };

    return (
        <Container sx={{ py: 8 }} maxWidth="sm">
            <Box className='formBox'>
                <Typography className="addSubName" sx={{ fontWeight: 'bold' }} variant="h4" gutterBottom>
                    Add Subject
                </Typography>
                <Input
                    type='text'
                    label="Subject Name"
                    placeholder='Enter your subject name'
                    value={subjectObj.subjectName}
                    onChangeEvent={(e) => setSubjectObj({ ...subjectObj, subjectName: e.target.value })}
                />

                <Input
                    type='number'
                    label="Class"
                    placeholder='Enter your class'
                    value={subjectObj.subjectClass}
                    onChangeEvent={(e) => setSubjectObj({ ...subjectObj, subjectClass: e.target.value })}
                />
                <FormControl component="fieldset" margin="normal" required>
                    <FormLabel>Select Group</FormLabel>
                    <RadioGroup
                        row
                        name="selectGroup"
                        value={subjectObj.selectGroup || ''}
                        onChange={(e) => setSubjectObj({ ...subjectObj, selectGroup: e.target.value })}
                    >
                        <FormControlLabel value="General-Science" control={<Radio />} label="General-Science" />
                        <FormControlLabel value="Pre-Engineering" control={<Radio />} label="Pre-Engineering" />
                        <FormControlLabel value="Other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FormControl>
                <Button onClick={handleSubmit} size="large" variant="contained" color="primary" fullWidth>
                    Add
                </Button>
            </Box>
        </Container>
    );
};

export default SubjectRegistrationForm;

import React, { useState } from "react";
import Input from "../../Components/Input/Input";
import { Box, Button, Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import './SyllabusForm.css'
const SyllabusForm = () => {
    let [syllabusObj, setSyllabusObj] = useState({
        syllabusName: '',
        syllabusClass: '',
        syllabusFile: ''
    });

    const navigate = useNavigate()

    const handleSubmit = () => {
        console.log('syllabus obj is', syllabusObj);
        setSyllabusObj({ syllabusName: '', syllabusClass: '', syllabusFile: '' });
        navigate('/syllabus/syllabus-list')
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
                    value={syllabusObj.syllabusName}
                    onChangeEvent={(e) => setSyllabusObj({ ...syllabusObj, syllabusName: e.target.value })}
                />

                <Input
                    type='number'
                    label="Class"
                    placeholder='Enter your class'
                    value={syllabusObj.syllabusClass}
                    onChangeEvent={(e) => setSyllabusObj({ ...syllabusObj, syllabusClass: e.target.value })}
                />
                <Input
                    type='file'
                    value={syllabusObj.syllabusFile}
                    onChangeEvent={(e) => setSyllabusObj({ ...syllabusObj, syllabusFile: e.target.value })}
                />

                <Button onClick={handleSubmit} size="large" variant="contained" color="primary" fullWidth>
                    Add
                </Button>
            </Box>
        </Container>
    );
};

export default SyllabusForm;

import React, { useEffect, useState } from "react";
import Input from "../../Components/Input/Input";
import { Box, Button, Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import './AddSubject.css'
import axios from "axios";

const UpdateSubject = () => {

    let [subjectUpdateObj, setSubjectUpdateObj] = useState({
        updateSubjectame: '',
        updateSubjecClass: '',
        updateGroup: ''
    });

    //  getting user object with id
    const { id } = useParams()
    console.log(id);
    useEffect(() => {
        axios.get(`http://localhost:3000/Clients/${id}`)
            .then((res) => {
                setObj(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);
    const navigate = useNavigate()

    // updating class object
    const updateNewSubject = () => {
        axios.put(`http://localhost:3000/Clients/${id}`, subjectUpdateObj)
            .then((res) => {
                alert('User Updated Successfully.')
                navigate('/subject/subject-list')
                // console.log("User updated:", res.data);
            })
            .catch((err) => {
                console.log("Update failed:", err);
            });
    };

    // const handleSubmit = () => {
    //     console.log('class object is ', subjectUpdateObj);
    //     setSubjectUpdateObj({ classUpdateFirstName: '', classUpdateLastName: '', classUpdateEmail: '', classUpdatePhone: '', classUpdateDate: '', classUpdateQualification: '', gender: '' });
    //     navigate('/class/class-list')
    // };

    return (
        <Container sx={{ py: 8 }} maxWidth="sm">
            <Box className='formBox'>
                <Typography sx={{ fontWeight: 'bold' }} variant="h4" gutterBottom>
                    Update Subject
                </Typography>
                <Input
                    type='text'
                    label="Subject Name"
                    placeholder='Enter your first name'
                    value={subjectUpdateObj.updateSubjectame}
                    onChangeEvent={(e) => setSubjectUpdateObj({ ...subjectUpdateObj, updateSubjectame: e.target.value })}
                />
                <Input
                    type='number'
                    label="Class"
                    placeholder='Enter your class'
                    value={subjectUpdateObj.updateSubjecClass}
                    onChangeEvent={(e) => setSubjectUpdateObj({ ...subjectUpdateObj, updateSubjecClass: e.target.value })}
                />
                <FormControl component="fieldset" margin="normal" required>
                    <FormLabel>Gender</FormLabel>
                    <RadioGroup
                        row
                        name="gender"
                        value={subjectUpdateObj.updateGroup || ''}
                        onChange={(e) => setSubjectUpdateObj({ ...subjectUpdateObj, updateGroup: e.target.value })}
                    >
                        <FormControlLabel value="General-Science" control={<Radio />} label="General-Science" />
                        <FormControlLabel value="Pre-Engineering" control={<Radio />} label="Pre-Engineering" />
                        <FormControlLabel value="Other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FormControl>
                <Button onClick={updateNewSubject} size="large" variant="contained" color="primary" fullWidth>
                    Update
                </Button>
            </Box>
        </Container>
    );
};

export default UpdateSubject;

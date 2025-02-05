import React, { useEffect, useState } from "react";
import Input from "../../Components/Input/Input";
import { Box, Button, Container, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import './SyllabusForm.css'
import axios from "axios";

const UpdateSyllabus = () => {

    let [UpdateSyllabusObj, setUpdateSyllabusObj] = useState({
        updateSyllabusName: '',
        updateSyllabusClass: '',
        updateFile: ''
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
    const updateNewSyllabus = () => {
        axios.put(`http://localhost:3000/Clients/${id}`, UpdateSyllabusObj)
            .then((res) => {
                alert('User Updated Successfully.')
                navigate('/syllabus/syllabus-list')
                // console.log("User updated:", res.data);
            })
            .catch((err) => {
                console.log("Update failed:", err);
            });
    };

    // const handleSubmit = () => {
    //     console.log('class object is ', UpdateSyllabusObj);
    //     setUpdateSyllabusObj({ classUpdateFirstName: '', classUpdateLastName: '', classUpdateEmail: '', classUpdatePhone: '', classUpdateDate: '', classUpdateQualification: '', gender: '' });
    //     navigate('/class/class-list')
    // };

    return (
        <Container sx={{ py: 8 }} maxWidth="sm">
            <Box className='formBox'>
                <Typography sx={{ fontWeight: 'bold' }} variant="h4" gutterBottom>
                    Update Syllabus
                </Typography>
                <Input
                    type='text'
                    label="Subject Name"
                    placeholder='Enter your first name'
                    value={UpdateSyllabusObj.updateSyllabusName}
                    onChangeEvent={(e) => setUpdateSyllabusObj({ ...UpdateSyllabusObj, updateSyllabusName: e.target.value })}
                />
                <Input
                    type='number'
                    label="Class"
                    placeholder='Enter your class'
                    value={UpdateSyllabusObj.updateSyllabusClass}
                    onChangeEvent={(e) => setUpdateSyllabusObj({ ...UpdateSyllabusObj, updateSyllabusClass: e.target.value })}
                />
                <Input
                    type='file'
                    value={UpdateSyllabusObj.updateFile}
                    onChangeEvent={(e) => setUpdateSyllabusObj({ ...UpdateSyllabusObj, updateFile: e.target.value })}
                />

                <Button onClick={updateNewSyllabus} size="large" variant="contained" color="primary" fullWidth>
                    Update
                </Button>
            </Box>
        </Container>
    );
};

export default UpdateSyllabus;

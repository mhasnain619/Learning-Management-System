import React, { useEffect, useState } from "react";
import Input from "../../Components/Input/Input";
import { Box, Button, Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import './ClassForm.css'
import axios from "axios";

const UpdateClass = () => {

    let [classUpdateObj, setClassUpdateObj] = useState({
        classUpdateFirstName: '',
        classUpdateLastName: '',
        classUpdateEmail: '',
        classUpdatePhone: '',
        classUpdateDate: '',
        classUpdateQualification: '',
        gender: ''
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
    const updateClass = () => {
        axios.put(`http://localhost:3000/Clients/${id}`, classUpdateObj)
            .then((res) => {
                alert('User Updated Successfully.')
                navigate('/')
                // console.log("User updated:", res.data);
            })
            .catch((err) => {
                console.log("Update failed:", err);
            });
    };

    // const handleSubmit = () => {
    //     console.log('class object is ', classUpdateObj);
    //     setClassUpdateObj({ classUpdateFirstName: '', classUpdateLastName: '', classUpdateEmail: '', classUpdatePhone: '', classUpdateDate: '', classUpdateQualification: '', gender: '' });
    //     navigate('/class/class-list')
    // };

    return (
        <Container sx={{ py: 8 }} maxWidth="sm">
            <Box className='formBox'>
                <Typography sx={{ fontWeight: 'bold' }} variant="h4" gutterBottom>
                    Update Class Registration Form
                </Typography>
                <Input
                    type='text'
                    label="First Name"
                    placeholder='Enter your first name'
                    value={classUpdateObj.classUpdateFirstName}
                    onChangeEvent={(e) => setClassUpdateObj({ ...classUpdateObj, classUpdateFirstName: e.target.value })}
                />
                <Input
                    type='text'
                    label="Last Name"
                    placeholder='Enter your last name'
                    value={classUpdateObj.classUpdateLastName}
                    onChangeEvent={(e) => setClassUpdateObj({ ...classUpdateObj, classUpdateLastName: e.target.value })}
                />
                <Input
                    type='text'
                    label="Email"
                    placeholder='Enter your email'
                    value={classUpdateObj.classUpdateEmail}
                    onChangeEvent={(e) => setClassUpdateObj({ ...classUpdateObj, classUpdateEmail: e.target.value })}
                />
                <Input
                    type='number'
                    label="Phone Number"
                    placeholder='Enter your Phone Number'
                    value={classUpdateObj.classUpdatePhone}
                    onChangeEvent={(e) => setClassUpdateObj({ ...classUpdateObj, classUpdatePhone: e.target.value })}
                />
                <Input
                    type='date'
                    value={classUpdateObj.classUpdateDate}
                    onChangeEvent={(e) => setClassUpdateObj({ ...classUpdateObj, classUpdateDate: e.target.value })}
                />
                <Input
                    type='text'
                    label="Qualification"
                    placeholder='Enter your qualification'
                    value={classUpdateObj.classUpdateQualification}
                    onChangeEvent={(e) => setClassUpdateObj({ ...classUpdateObj, classUpdateQualification: e.target.value })}
                />
                <FormControl component="fieldset" margin="normal" required>
                    <FormLabel>Gender</FormLabel>
                    <RadioGroup
                        row
                        name="gender"
                        value={classUpdateObj.gender || ''}
                        onChange={(e) => setClassUpdateObj({ ...classUpdateObj, gender: e.target.value })}
                    >
                        <FormControlLabel value="Male" control={<Radio />} label="Male" />
                        <FormControlLabel value="Female" control={<Radio />} label="Female" />
                        <FormControlLabel value="Other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FormControl>
                <Button onClick={updateClass} size="large" variant="contained" color="primary" fullWidth>
                    Update
                </Button>
            </Box>
        </Container>
    );
};

export default UpdateClass;

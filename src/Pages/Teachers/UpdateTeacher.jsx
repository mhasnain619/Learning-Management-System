import React, { useEffect, useState } from "react";
import Input from "../../Components/Input/Input";
import { Box, Button, Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import '../../Pages/Class/ClassForm.css'
import axios from "axios";

const Updateteacher = () => {

    let [teacherUpdateObj, setTeacherUpdateObj] = useState({
        teacherUpdateFirstName: '',
        teacherUpdateLastName: '',
        teacherUpdateSchoolName: '',
        teacherUpdateClass: '',
        teacherUpdatePhone: '',
        gender: '',
        teacherUpdateEmail: '',
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
    const updateteacher = () => {
        axios.put(`http://localhost:3000/Clients/${id}`, teacherUpdateObj)
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
    //     console.log('class object is ', teacherUpdateObj);
    //     setTeacherUpdateObj({ teacherUpdateFirstName: '', teacherUpdateLastName: '', teacherUpdateEmail: '', teacherUpdatePhone: '', gender: '' });
    //     navigate('/class/class-list')
    // };

    return (
        <Container sx={{ py: 8 }} maxWidth="sm">
            <Box className='formBox'>
                <Typography sx={{ fontWeight: 'bold' }} variant="h4" gutterBottom>
                    Update teacher Registration Form
                </Typography>
                <Input
                    type='text'
                    label="First Name"
                    placeholder='Enter your first name'
                    value={teacherUpdateObj.teacherUpdateFirstName}
                    onChangeEvent={(e) => setTeacherUpdateObj({ ...teacherUpdateObj, teacherUpdateFirstName: e.target.value })}
                />
                <Input
                    type='text'
                    label="Last Name"
                    placeholder='Enter your last name'
                    value={teacherUpdateObj.teacherUpdateLastName}
                    onChangeEvent={(e) => setTeacherUpdateObj({ ...teacherUpdateObj, teacherUpdateLastName: e.target.value })}
                />
                <Input
                    type='text'
                    label="School Name"
                    placeholder='Enter your last name'
                    value={teacherUpdateObj.SchoolUpdateLastName}
                    onChangeEvent={(e) => setTeacherUpdateObj({ ...teacherUpdateObj, SchoolUpdateLastName: e.target.value })}
                />
                <Input
                    type='number'
                    label="Class"
                    placeholder='Enter your Class'
                    value={teacherUpdateObj.SchoolUpdateClass}
                    onChangeEvent={(e) => setTeacherUpdateObj({ ...teacherUpdateObj, SchoolUpdateClass: e.target.value })}
                />
                <Input
                    type='text'
                    label="Email"
                    placeholder='Enter your email'
                    value={teacherUpdateObj.teacherUpdateEmail}
                    onChangeEvent={(e) => setTeacherUpdateObj({ ...teacherUpdateObj, teacherUpdateEmail: e.target.value })}
                />
                <Input
                    type='number'
                    label="Phone Number"
                    placeholder='Enter your Phone Number'
                    value={teacherUpdateObj.teacherUpdatePhone}
                    onChangeEvent={(e) => setTeacherUpdateObj({ ...teacherUpdateObj, teacherUpdatePhone: e.target.value })}
                />
                <FormControl component="fieldset" margin="normal" required>
                    <FormLabel>Gender</FormLabel>
                    <RadioGroup
                        row
                        name="gender"
                        value={teacherUpdateObj.gender || ''}
                        onChange={(e) => setTeacherUpdateObj({ ...teacherUpdateObj, gender: e.target.value })}
                    >
                        <FormControlLabel value="Male" control={<Radio />} label="Male" />
                        <FormControlLabel value="Female" control={<Radio />} label="Female" />
                        <FormControlLabel value="Other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FormControl>
                <Button onClick={updateteacher} size="large" variant="contained" color="primary" fullWidth>
                    Update
                </Button>
            </Box>
        </Container>
    );
};

export default Updateteacher;

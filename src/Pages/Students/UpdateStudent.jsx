import React, { useEffect, useState } from "react";
import Input from "../../Components/Input/Input";
import { Box, Button, Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import '../../Pages/Class/ClassForm.css'
import axios from "axios";

const UpdateStudent = () => {

    let [studentUpdateObj, setStudentUpdateObj] = useState({
        studentUpdateFirstName: '',
        studentUpdateLastName: '',
        studentUpdateSchoolName: '',
        studentUpdateClass: '',
        studentUpdatePhone: '',
        gender: '',
        studentUpdateEmail: '',
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
    const updateStudent = () => {
        axios.put(`http://localhost:3000/Clients/${id}`, studentUpdateObj)
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
    //     console.log('class object is ', studentUpdateObj);
    //     setStudentUpdateObj({ studentUpdateFirstName: '', studentUpdateLastName: '', studentUpdateEmail: '', studentUpdatePhone: '', gender: '' });
    //     navigate('/class/class-list')
    // };

    return (
        <Container sx={{ py: 8 }} maxWidth="sm">
            <Box className='formBox'>
                <Typography sx={{ fontWeight: 'bold' }} variant="h4" gutterBottom>
                    Update Student Registration Form
                </Typography>
                <Input
                    type='text'
                    label="First Name"
                    placeholder='Enter your first name'
                    value={studentUpdateObj.studentUpdateFirstName}
                    onChangeEvent={(e) => setStudentUpdateObj({ ...studentUpdateObj, studentUpdateFirstName: e.target.value })}
                />
                <Input
                    type='text'
                    label="Last Name"
                    placeholder='Enter your last name'
                    value={studentUpdateObj.studentUpdateLastName}
                    onChangeEvent={(e) => setStudentUpdateObj({ ...studentUpdateObj, studentUpdateLastName: e.target.value })}
                />
                <Input
                    type='text'
                    label="School Name"
                    placeholder='Enter your last name'
                    value={studentUpdateObj.SchoolUpdateLastName}
                    onChangeEvent={(e) => setStudentUpdateObj({ ...studentUpdateObj, SchoolUpdateLastName: e.target.value })}
                />
                <Input
                    type='number'
                    label="Class"
                    placeholder='Enter your Class'
                    value={studentUpdateObj.SchoolUpdateClass}
                    onChangeEvent={(e) => setStudentUpdateObj({ ...studentUpdateObj, SchoolUpdateClass: e.target.value })}
                />
                <Input
                    type='text'
                    label="Email"
                    placeholder='Enter your email'
                    value={studentUpdateObj.studentUpdateEmail}
                    onChangeEvent={(e) => setStudentUpdateObj({ ...studentUpdateObj, studentUpdateEmail: e.target.value })}
                />
                <Input
                    type='number'
                    label="Phone Number"
                    placeholder='Enter your Phone Number'
                    value={studentUpdateObj.studentUpdatePhone}
                    onChangeEvent={(e) => setStudentUpdateObj({ ...studentUpdateObj, studentUpdatePhone: e.target.value })}
                />
                <FormControl component="fieldset" margin="normal" required>
                    <FormLabel>Gender</FormLabel>
                    <RadioGroup
                        row
                        name="gender"
                        value={studentUpdateObj.gender || ''}
                        onChange={(e) => setStudentUpdateObj({ ...studentUpdateObj, gender: e.target.value })}
                    >
                        <FormControlLabel value="Male" control={<Radio />} label="Male" />
                        <FormControlLabel value="Female" control={<Radio />} label="Female" />
                        <FormControlLabel value="Other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FormControl>
                <Button onClick={updateStudent} size="large" variant="contained" color="primary" fullWidth>
                    Update
                </Button>
            </Box>
        </Container>
    );
};

export default UpdateStudent;

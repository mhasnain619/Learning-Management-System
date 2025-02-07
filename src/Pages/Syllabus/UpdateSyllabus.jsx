import React, { useEffect, useState } from "react";
import Input from "../../Components/Input/Input";
import { Box, Button, Container, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import './SyllabusForm.css'
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../FirebaseConfiq";


const UpdateSyllabus = () => {
    let [UpdateSyllabusObj, setUpdateSyllabusObj] = useState({
        syllabusName: '',
        syllabusClass: '',
        syllabusFile: ''
    });

    //  getting user object with id
    const { id } = useParams()
    React.useEffect(() => {
        const fetchSyllabus = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "syllabus"));
                const syllabusData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                const filteredData = syllabusData.find((e) => e.id === id);
                if (filteredData) {
                    setUpdateSyllabusObj(filteredData);
                }
                console.log(filteredData);

            } catch (error) {
                console.error("Error fetching teachers:", error);
                setLoading(false);
            }
        };
        fetchSyllabus();
    }, []);


    const updateNewSyllabus = () => {
        console.log('class object is ', UpdateSyllabusObj);
        setUpdateSyllabusObj({ syllabusFile: '', syllabusClass: '', syllabusName: '' });
        navigate('/syllabus/syllabus-list')
    };

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
                    value={UpdateSyllabusObj.syllabusName}
                    onChangeEvent={(e) => setUpdateSyllabusObj({ ...UpdateSyllabusObj, syllabusName: e.target.value })}
                />
                <Input
                    type='text'
                    label="Class"
                    placeholder='Enter your class'
                    value={UpdateSyllabusObj.syllabusClass}
                    onChangeEvent={(e) => setUpdateSyllabusObj({ ...UpdateSyllabusObj, syllabusClass: e.target.value })}
                />
                <Input
                    type="file"
                    onChangeEvent={(e) => setUpdateSyllabusObj({
                        ...updateSyllabusObj,
                        syllabusFile: e.target.files[0]
                    })}
                />

                <Button onClick={updateNewSyllabus} size="large" variant="contained" color="primary" fullWidth>
                    Update
                </Button>
            </Box>
        </Container>
    );
};

export default UpdateSyllabus;

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, CircularProgress, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../FirebaseConfiq';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export default function SyllabusList() {
    let [openLoader, setOpenLoader] = React.useState(false)
    const [syllabus, setSyllabus] = React.useState([])
    React.useEffect(() => {
        const fetchSyllabus = async () => {
            setOpenLoader(true)
            try {
                const querySnapshot = await getDocs(collection(db, "syllabus"));
                const subjectData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setSyllabus(subjectData)
            } catch (error) {
                console.error("Error fetching students:", error);
            }
            setOpenLoader(false)
        }
        fetchSyllabus()
    }, [])
    const navigate = useNavigate()

    const goToAddSyllabus = () => {
        navigate('/syllabus/add-syllabus')
    }
    const GotoUpdateSyllabus = (id) => {
        navigate(`/syllabus/syllabus-list/${id}`)
    }
    return (
        <Box sx={{ display: 'inline-block', width: '100%', marginTop: '50px !important' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <Typography variant='h4' sx={{ fontSize: '23px', fontWeight: '600', color: '#474749' }}>
                    Syllabus List
                </Typography>
                <Button onClick={goToAddSyllabus} size='medium' variant='contained'>
                    Add New Syllabus
                </Button>
            </Box>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Id</StyledTableCell>
                            <StyledTableCell>Subject Name</StyledTableCell>
                            <StyledTableCell>Class</StyledTableCell>
                            <StyledTableCell>File</StyledTableCell>
                            <StyledTableCell>Controls</StyledTableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {openLoader ? (
                            <TableRow>
                                <TableCell colSpan={8} align="center">
                                    <CircularProgress />
                                </TableCell>
                            </TableRow>
                        ) : syllabus.length > 0 ? (
                            syllabus.map((e, i) => (
                                <StyledTableRow key={i}>
                                    <StyledTableCell component="th" scope="row">
                                        {e.id}
                                    </StyledTableCell>
                                    <StyledTableCell component="th" scope="row">
                                        {e.syllabusName}
                                    </StyledTableCell>
                                    <StyledTableCell align="start">{e.syllabusClass}</StyledTableCell>
                                    <StyledTableCell align="start">{e.syllabusFile}</StyledTableCell>
                                    <Box className='controls'>
                                        <Button sx={{ mx: 1 }} variant='contained'>Delete</Button>
                                        <Button onClick={() => GotoUpdateSyllabus(e.id)} sx={{ mx: 1 }} variant='contained'>Update</Button>
                                    </Box>
                                </StyledTableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={8} align="center">
                                    No Data Available
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
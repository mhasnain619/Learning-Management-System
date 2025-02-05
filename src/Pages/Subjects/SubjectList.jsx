import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AddSubject.css'

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
const rows = [
    { id: 1, subjectName: 'English', class: '12', group: 'male', },
    { id: 2, subjectName: 'English', class: '12', group: 'male', },
    { id: 3, subjectName: 'English', class: '12', group: 'male', },
    { id: 4, subjectName: 'English', class: '12', group: 'male', },
    { id: 5, subjectName: 'English', class: '12', group: 'male', },
    { id: 6, subjectName: 'English', class: '12', group: 'male', },
    { id: 7, subjectName: 'English', class: '12', group: 'male', },
    { id: 8, subjectName: 'English', class: '12', group: 'male', },
    { id: 9, subjectName: 'English', class: '12', group: 'male', },
];
export default function SubjectList() {
    const navigate = useNavigate()

    const goToAddSubject = () => {
        navigate('/subject/add-subject')
    }
    const GotoUpdateSubject = (id) => {
        navigate(`/subject/subject-list/${id}`)
    }
    return (
        <Box sx={{ display: 'inline-block', width: '100%', marginTop: '50px !important' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <Typography variant='h4' sx={{ fontSize: '23px', fontWeight: '600', color: '#474749' }}>
                    Subject List
                </Typography>
                <Button onClick={goToAddSubject} size='medium' variant='contained'>
                    Add New Subject
                </Button>
            </Box>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Id</StyledTableCell>
                            <StyledTableCell>Subject Name</StyledTableCell>
                            <StyledTableCell>Class</StyledTableCell>
                            <StyledTableCell>Group</StyledTableCell>
                            <StyledTableCell>Controls</StyledTableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((e, i) => (
                            <StyledTableRow key={i}>
                                <StyledTableCell component="th" scope="row">
                                    {e.id}
                                </StyledTableCell>
                                <StyledTableCell component="th" scope="row">
                                    {e.subjectName}
                                </StyledTableCell>
                                <StyledTableCell>{e.subjectName}</StyledTableCell>
                                <StyledTableCell>{e.group}</StyledTableCell>
                                <Box className='controls'>
                                    <Button sx={{ mx: 1 }} variant='contained'>Delete</Button>
                                    <Button onClick={() => GotoUpdateSubject(e.id)} sx={{ mx: 1 }} variant='contained'>Update</Button>
                                </Box>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
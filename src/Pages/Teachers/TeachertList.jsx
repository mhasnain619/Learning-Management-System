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
    { id: 1, lastName: 'Snow', firstName: 'Jon', gender: 'male', age: 35, email: 'qwqr@gmail.com' },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', gender: 'male', age: 42, email: 'qwqr@gmail.com' },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', gender: 'male', age: 45, email: 'qwqr@gmail.com' },
    { id: 4, lastName: 'Stark', firstName: 'Arya', gender: 'male', age: 16, email: 'qwqr@gmail.com' },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', gender: 'male', age: null, email: 'qwqr@gmail.com' },
    { id: 6, lastName: 'Melisandre', firstName: null, gender: 'male', age: 150, email: 'qwqr@gmail.com' },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', gender: 'male', age: 44, email: 'qwqr@gmail.com' },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', gender: 'male', age: 36, email: 'qwqr@gmail.com' },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', gender: 'male', age: 65, email: 'qwqr@gmail.com' },
];
export default function TeacherList() {
    const navigate = useNavigate()

    const goToAddTeacher = () => {
        navigate('/teacher/teacher-registration')
    }
    return (
        <Box sx={{ display: 'inline-block', width: '100%', marginTop: '50px !important' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <Typography variant='h4' sx={{ fontSize: '23px', fontWeight: '600', color: '#474749' }}>
                    Teacher List
                </Typography>
                <Button onClick={goToAddTeacher} size='medium' variant='contained'>
                    Add New Teacher
                </Button>
            </Box>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Id</StyledTableCell>
                            <StyledTableCell>First Name</StyledTableCell>
                            <StyledTableCell align="start">Last Name</StyledTableCell>
                            <StyledTableCell align="start">School Name</StyledTableCell>
                            <StyledTableCell align="start">Class</StyledTableCell>
                            <StyledTableCell align="start">Phone</StyledTableCell>
                            <StyledTableCell align="start">Gender</StyledTableCell>
                            <StyledTableCell align="start">E-mail</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((e, i) => (
                            <StyledTableRow key={i}>
                                <StyledTableCell component="th" scope="row">
                                    {e.id}
                                </StyledTableCell>
                                <StyledTableCell component="th" scope="row">
                                    {e.firstName}
                                </StyledTableCell>
                                <StyledTableCell align="start">{e.lastName}</StyledTableCell>
                                <StyledTableCell align="start">{e.schoolname}</StyledTableCell>
                                <StyledTableCell align="start">{e.class}</StyledTableCell>
                                <StyledTableCell align="start">{e.age}</StyledTableCell>
                                <StyledTableCell align="start">{e.gender}</StyledTableCell>
                                <StyledTableCell align="start">{e.email}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
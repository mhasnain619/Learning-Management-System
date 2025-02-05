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
    { id: 1, qualification: 'intermediate', class: '12', phone: '0312-232442535', lastName: 'Snow', firstName: 'Jon', gender: 'male', age: 35, email: 'qwqr@gmail.com' },
    { id: 2, qualification: 'intermediate', class: '12', phone: '0312-232442535', lastName: 'Lannister', firstName: 'Cersei', gender: 'male', age: 42, email: 'qwqr@gmail.com' },
    { id: 3, qualification: 'intermediate', class: '12', phone: '0312-232442535', lastName: 'Lannister', firstName: 'Jaime', gender: 'male', age: 45, email: 'qwqr@gmail.com' },
    { id: 4, qualification: 'intermediate', class: '12', phone: '0312-232442535', lastName: 'Stark', firstName: 'Arya', gender: 'male', age: 16, email: 'qwqr@gmail.com' },
    { id: 5, qualification: 'intermediate', class: '12', phone: '0312-232442535', lastName: 'Targaryen', firstName: 'Daenerys', gender: 'male', age: null, email: 'qwqr@gmail.com' },
    { id: 6, qualification: 'intermediate', class: '12', phone: '0312-232442535', lastName: 'Melisandre', firstName: null, gender: 'male', age: 150, email: 'qwqr@gmail.com' },
    { id: 7, qualification: 'intermediate', class: '12', phone: '0312-232442535', lastName: 'Clifford', firstName: 'Ferrara', gender: 'male', age: 44, email: 'qwqr@gmail.com' },
    { id: 8, qualification: 'intermediate', class: '12', phone: '0312-232442535', lastName: 'Frances', firstName: 'Rossini', gender: 'male', age: 36, email: 'qwqr@gmail.com' },
    { id: 9, qualification: 'intermediate', class: '12', phone: '0312-232442535', lastName: 'Roxie', firstName: 'Harvey', gender: 'male', age: 65, email: 'qwqr@gmail.com' },
];
export default function ClassList() {
    const navigate = useNavigate()

    const goToAddClassList = () => {
        navigate('/class/class-form')
    }
    const GotoUpdateClass = (id) => {
        navigate(`/class/class-list/${id}`)
    }
    return (
        <Box sx={{ display: 'inline-block', width: '100%', marginTop: '50px !important' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <Typography variant='h4' sx={{ fontSize: '23px', fontWeight: '600', color: '#474749' }}>
                    Class List
                </Typography>
                <Button onClick={goToAddClassList} size='medium' variant='contained'>
                    Add New Class
                </Button>
            </Box>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Id</StyledTableCell>
                            <StyledTableCell>First Name</StyledTableCell>
                            <StyledTableCell>Last Name</StyledTableCell>
                            <StyledTableCell>Qualification</StyledTableCell>
                            <StyledTableCell>Class</StyledTableCell>
                            <StyledTableCell>Phone</StyledTableCell>
                            <StyledTableCell>Gender</StyledTableCell>
                            <StyledTableCell>E-mail</StyledTableCell>
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
                                    {e.firstName}
                                </StyledTableCell>
                                <StyledTableCell>{e.lastName}</StyledTableCell>
                                <StyledTableCell>{e.qualification}</StyledTableCell>
                                <StyledTableCell>{e.class}</StyledTableCell>
                                <StyledTableCell>{e.phone}</StyledTableCell>
                                <StyledTableCell>{e.gender}</StyledTableCell>
                                <StyledTableCell>{e.email}</StyledTableCell>
                                <Box className='controls'>
                                    <Button sx={{ mx: 1 }} variant='contained'>Delete</Button>
                                    <Button onClick={() => GotoUpdateClass(e.id)} sx={{ mx: 1 }} variant='contained'>Update</Button>
                                </Box>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
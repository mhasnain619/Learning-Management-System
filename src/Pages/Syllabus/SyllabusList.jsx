import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const studentDatas = JSON.parse(localStorage.getItem('studentData'))

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
        field: 'firstName', headerName: 'First name', width: 130, renderCell: (params) =>
            <Typography
                sx={{
                    // textAlign: 'center',
                    // display: "flex",
                    // justifyContent: "center",
                    // alignItems: "center",
                    color: "#0171BC"
                }}>
                {params.value}
            </Typography>
    },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
        field: 'email',
        headerName: 'Email',
        width: 90,
    },
    {
        field: 'class',
        headerName: 'Class',
        type: 'number',
        width: 90,
    },
];
const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function SyllabusList() {
    const navigate = useNavigate()

    const goToAddSyllabus = () => {
        navigate('/add-syllabus')
    }
    return (
        <Box sx={{ display: 'inline-block', width: '100%', marginTop: '50px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant='h4' sx={{ fontSize: '23px', fontWeight: '600', color: '#474749' }}>
                    Syllabus List
                </Typography>
                <Button onClick={goToAddSyllabus} size='medium' variant='contained'>
                    Add New Syllabus
                </Button>
            </Box>
            <Paper sx={{ marginTop: '15px', height: 600, width: '100%' }}>

                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{ pagination: { paginationModel } }}
                    pageSizeOptions={[10, 20]}
                    checkboxSelection
                    sx={{ border: 0 }}
                />
            </Paper>
        </Box>
    );
}
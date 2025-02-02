import React, { useState } from "react";
import {
    Container,
    TextField,
    Button,
    MenuItem,
    Typography,
    Card,
    CardContent,
} from "@mui/material";
import { Payment } from "@mui/icons-material";

const students = [
    { name: "Ali Khan", className: "Class 1" },
    { name: "Ayesha Ahmed", className: "Class 2" },
    { name: "Ahmed Raza", className: "Class 3" },
    { name: "Fatima Noor", className: "Class 4" },
    { name: "Bilal Hussain", className: "Class 5" },
    { name: "Sara Malik", className: "Class 6" },
    { name: "Hamza Tariq", className: "Class 7" },
    { name: "Zainab Iqbal", className: "Class 8" },
    { name: "Usman Javed", className: "Class 9" },
    { name: "Hina Sheikh", className: "Class 10" },
];

const FeeSubmission = () => {
    const [formData, setFormData] = useState({
        studentName: "",
        className: "",
        amount: "",
        paymentMethod: "",
    });

    const paymentMethods = ["Cash", "Bank Transfer", "Credit Card"];

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Fee Submitted for ${formData.studentName} - PKR ${formData.amount}`);
        setFormData({ studentName: "", className: "", amount: "", paymentMethod: "" });
    };

    return (
        <Container sx={{ mt: 10 }}>
            <Card sx={{ maxWidth: 500, mx: "auto", p: 3, boxShadow: 3, borderRadius: 3 }}>
                <CardContent>
                    <Typography variant="h5" sx={{ mb: 3, textAlign: "center", color: "#1976d2" }}>
                        Fee Submission
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            select
                            label="Select Student"
                            fullWidth
                            name="studentName"
                            value={formData.studentName}
                            onChange={handleChange}
                            sx={{
                                mb: 2,
                                "& .MuiInputBase-root": {}, // Remove internal padding
                                "& .MuiSelect-select": { minHeight: "45px", }, // Reduce height
                            }}
                            required
                        >
                            {students.map((student, index) => (
                                <MenuItem key={index} value={student.name}>
                                    {student.name} ({student.className})
                                </MenuItem>
                            ))}
                        </TextField>

                        <TextField
                            label="Class Name"
                            fullWidth
                            name="className"
                            value={formData.className}
                            onChange={handleChange}
                            sx={{ mb: 2 }}
                            required
                        />

                        <TextField
                            label="Amount (PKR)"
                            fullWidth
                            type="number"
                            name="amount"
                            value={formData.amount}
                            onChange={handleChange}
                            sx={{ mb: 2 }}
                            required
                        />

                        <TextField
                            select
                            label="Payment Method"
                            fullWidth
                            name="paymentMethod"
                            value={formData.paymentMethod}
                            onChange={handleChange}
                            sx={{ mb: 3 }}
                            required
                        >
                            {paymentMethods.map((method, index) => (
                                <MenuItem key={index} value={method}>
                                    {method}
                                </MenuItem>
                            ))}
                        </TextField>

                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            size="large"
                            startIcon={<Payment />}
                        >
                            Submit Payment
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </Container>
    );
};

export default FeeSubmission;

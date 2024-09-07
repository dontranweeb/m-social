import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Grid, Box, TextField, Button, Stack, Typography, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';


function SignUp() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      console.log('Submitting data:', data);

      const response = await axios.post(
        "http://localhost:3001/v1/SignUp",
        {
          firstName: data.FirstName,
          lastName: data.LastName,
          email: data.Email,
          userName: data.Username,
          password: data.Password,
          birthDate: data.BirthDate,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      console.log('User created successfully:', response.data);
      setSuccessMessage('User created successfully!');
      setErrorMessage('');
      reset();
      navigate("/");
    } catch (error) {
      console.error('Error creating user:', error);

      if (error.response) {
        console.error('Response data:', error.response.data);
        const errorMessages = error.response.data.errors
          ? error.response.data.errors.map(err => err.msg).join(', ')
          : 'Error creating user. Please try again.';
        setErrorMessage(errorMessages);
      } else {
        setErrorMessage('Error creating user. Please try again.');
      }

      setSuccessMessage('');
    }
  };

  return (
    <Grid container>
      <Grid item xs={7}>
        <Box
          component="img"
          sx={{ width: "100%", height: "100%" }}
          src="https://images.unsplash.com/photo-1479779978657-f97923f70d04?q=80&w=2631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Background"
        />
      </Grid>
      <Grid item xs={5}>
        <Stack
          spacing={2}
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{ minHeight: "100vh" }}
          component="form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Typography variant="h4" component="h1">Sign Up</Typography>
          
          {successMessage && <Alert severity="success">{successMessage}</Alert>}
          {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
          
          <TextField
            sx={{ my: 2, width: "75%" }}
            id="firstName"
            label="First Name"
            variant="outlined"
            {...register("FirstName", { required: "First name is required" })}
            error={!!errors.FirstName}
            helperText={errors.FirstName?.message}
          />
          
          <TextField
            sx={{ my: 2, width: "75%" }}
            id="lastName"
            label="Last Name"
            variant="outlined"
            {...register("LastName", { required: "Last name is required" })}
            error={!!errors.LastName}
            helperText={errors.LastName?.message}
          />
          
          <TextField
            sx={{ my: 2, width: "75%" }}
            id="email"
            label="Email"
            variant="outlined"
            {...register("Email", { required: "Email is required" })}
            error={!!errors.Email}
            helperText={errors.Email?.message}
          />
          
          <TextField
            sx={{ my: 2, width: "75%" }}
            id="username"
            label="Username"
            variant="outlined"
            {...register("Username", { required: "Username is required" })}
            error={!!errors.Username}
            helperText={errors.Username?.message}
          />
          
          <TextField
            sx={{ my: 2, width: "75%" }}
            id="birthDate"
            label="Birth Date"
            variant="outlined"
            type="date"
            InputLabelProps={{ shrink: true }}
            {...register("BirthDate", { required: "Birth date is required" })}
            error={!!errors.BirthDate}
            helperText={errors.BirthDate?.message}
          />
          
          <TextField
            sx={{ my: 2, width: "75%" }}
            id="password"
            label="Password"
            variant="outlined"
            type="password"
            {...register("Password", { required: "Password is required" })}
            error={!!errors.Password}
            helperText={errors.Password?.message}
          />
          
          <Button
            type="submit"
            variant="contained"
            sx={{ my: 2, width: "75%" }}
          >
            Register
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default SignUp;
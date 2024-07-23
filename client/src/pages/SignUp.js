import React from "react";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import axios from "axios";

function SignUp() {
  const { register, handleSubmit, watch, reset } = useForm();
  const onSubmit = async (data) => {
    // On user submit reset form values
    console.log(data.Username, data.Password);
    reset();
    // const loginResponse = await axios.post(
    //   // Put whatever the server site route is
    //   "http://localhost:3000/SignUp",
    //   data,
    //   {
    //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //     withCredentials: true,
    //   }
    // );
  };
  watch([
    "firstName",
    "lastName",
    "birthDate",
    "Email",
    "Username",
    "Password",
  ]);
  return (
    <Grid container>
      <Grid item xs={7}>
        <Box
          component="img"
          sx={{ width: "100%", height: " 100%" }}
          src={
            "https://images.unsplash.com/photo-1479779978657-f97923f70d04?q=80&w=2631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
      </Grid>
      <Grid item xs={5}>
        <Stack
          container
          spacing={2}
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{ minHeight: "100vh" }}
          alignContent={"center"}
          component="form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1>Sign Up</h1>
          <TextField
            sx={{ my: "2", width: "75%" }}
            id="firstName"
            label="First Name"
            variant="outlined"
            {...register("FirstName", { required: true })}
          />
          <TextField
            sx={{ my: "2", width: "75%" }}
            id="lastName"
            label="Last Name"
            variant="outlined"
            {...register("LastName", { required: true })}
          />
          <TextField
            sx={{ my: "2", width: "75%" }}
            id="birthDate"
            label="Birth Date"
            variant="outlined"
            {...register("birthDate", { required: true })}
          />
          <TextField
            sx={{ my: "2", width: "75%" }}
            id="Email"
            label="Email"
            variant="outlined"
            {...register("Email", { required: true })}
          />
          <TextField
            sx={{ my: "2", width: "75%" }}
            id="Username"
            label="Username"
            variant="outlined"
            {...register("Username", { required: true })}
          />
          <TextField
            sx={{ my: "2", width: "75%" }}
            id="Password"
            label="Password"
            variant="outlined"
            type="password"
            {...register("Password", { required: true })}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ my: "2", width: "75%" }}
          >
            Register
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default SignUp;

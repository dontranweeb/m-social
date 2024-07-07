import React from "react";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

function SignUp() {
  const { register, handleSubmit, watch, reset } = useForm();
  const onSubmit = async (data) => {
    // On user submit reset form values
    console.log(data.Username, data.Password);
    reset();
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
        {...register("Password", { required: true })}
      />
      <Button type="submit" variant="contained" sx={{ my: "2", width: "75%" }}>
        Register
      </Button>
    </Stack>
  );
}

export default SignUp;

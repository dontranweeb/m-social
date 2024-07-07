import React from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

function HomePage() {
  const { register, handleSubmit, watch, reset } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    // On user submit reset form values
    console.log(data.Username, data.Password);
    reset();
  };
  watch(["Username", "Password"]);
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
      <h1>HomePage</h1>
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
        Login
      </Button>
      <Button type="button" variant="contained" sx={{ my: "2", width: "75%" }}>
        <Link>
          <NavLink to={"/SignUp"}> Sign up</NavLink>
        </Link>
      </Button>
    </Stack>
  );
}

export default HomePage;

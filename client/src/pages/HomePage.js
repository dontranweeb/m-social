import React from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import axios from "axios";

function HomePage() {
  const { register, handleSubmit, watch, reset } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    // On user submit reset form values
    console.log(data.Username, data.Password);
    reset();
    // const loginResponse = await axios.post(
    //   // Put whatever the server site route is
    //   "http://localhost:3000/login",
    //   data,
    //   {
    //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //     withCredentials: true,
    //   }
    // );
  };
  watch(["Username", "Password"]);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid item xs={7}>
          <Box
            component="img"
            sx={{ width: "100%", height: " 100%" }}
            src={
              "https://plus.unsplash.com/premium_photo-1670288167326-8646749e927b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
            sx={{ minHeight: "100vh", width: "50%" }}
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
              type="password"
              variant="outlined"
              {...register("Password", { required: true })}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ my: "2", width: "75%", borderRadius: 8 }}
            >
              Login
            </Button>
            <Button
              type="button"
              variant="contained"
              sx={{ my: "2", width: "75%", borderRadius: 8 }}
            >
              <Link>
                <NavLink
                  style={{ textDecoration: "none", color: "white" }}
                  to={"/SignUp"}
                >
                  {" "}
                  Sign up
                </NavLink>
              </Link>
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default HomePage;

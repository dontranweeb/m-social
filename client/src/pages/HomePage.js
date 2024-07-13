import React from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";

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
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid item xs={7}></Grid>
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
                  Sign upd
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

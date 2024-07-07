import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Container from "@mui/material/Container";
import HomePage from "./pages/HomePage";
import "./App.css";
import SignUp from "./pages/SignUp";

function App() {
  const theme = {
    spacing: 8,
  };
  return (
    <Container maxWidth="sm" sx={{ pt: 8, height: "100%" }}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;

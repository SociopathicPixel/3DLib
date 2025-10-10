import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";
import AppRoutes from "./AppRoutes"; 
import "./styles/theme.scss";

function App() {
  const [isLight, setIsLight] = useState(false);

  const theme = createTheme({
    palette: {
      mode: isLight ? "light" : "dark",
      primary: { main: "#000000" },
      secondary: { main: "#ffffff" },
    },
    typography: {
      fontFamily: "Inter, sans-serif",
      button: { textTransform: "none" },
    },
  });

  const toggleTheme = () => setIsLight((prev) => !prev);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Button onClick={toggleTheme} variant="contained" sx={{ m: 2 }}>
          Toggle Theme
        </Button>
        <AppRoutes />
      </Router>
    </ThemeProvider>
  );
}

export default App;

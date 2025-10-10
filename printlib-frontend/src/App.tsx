import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";
import { lightTheme, darkTheme } from "./theme";
import AppRoutes from "./AppRoutes"; 
import Header from "./components/Header";

function App() {
  const [isLight, setIsLight] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === 'light';
  });

  const toggleTheme = () => {
    setIsLight((prev) => {
      const next = !prev;
      localStorage.setItem("theme", next ? 'light' : 'dark');
      return next;
    });
  };

  const theme = isLight ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <Button onClick={toggleTheme} variant="contained" sx={{ m: 2 }}>
          Toggle Theme
        </Button>
        <AppRoutes />
      </Router>
    </ThemeProvider>
  );
}

export default App;

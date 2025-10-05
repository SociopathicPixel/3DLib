import React from "react";
import { Container, Typography, Box } from "@mui/material";


const LandingPage: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 8, textAlign: "center" }}>
      <Typography variant="h3" gutterBottom>
        Welcome to 3D PrintLib
      </Typography>
      <Typography variant="body1">
        Explore printable objects, manage your library, and start creating!
      </Typography>
      {/* Add MUI buttons or feature highlights here */}
    </Container>
  );
};

export default LandingPage;

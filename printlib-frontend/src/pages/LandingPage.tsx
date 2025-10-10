import React from "react";
import { Container, Typography } from "@mui/material";


const LandingPage: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 8, textAlign: "center" }}>
      <Typography variant="h3" color="primary">
        Welcome to 3D PrintLib
      </Typography>

      <Typography variant="body1" text-color="secondary">
        Explore printable objects, manage your library, and start creating!
      </Typography>
    </Container>
  );
};

export default LandingPage;

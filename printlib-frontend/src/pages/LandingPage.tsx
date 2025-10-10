import React from "react";
import { Box } from "@mui/material";
import HeroPage from "../components/layout/Hero";

const LandingPage: React.FC = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1 }}>
      <HeroPage />
    </Box>
  );
};

export default LandingPage;

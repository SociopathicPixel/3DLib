import React from "react";
import { Box, Typography, Link } from "@mui/material";
import styles from "../../../styles/Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "background.paper",
        py: 1,
        px: 4,
        mt: "auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        fontSize: "xx-small",
      }}
    >
      <Typography variant="body2">
        3D PrintLib © {new Date().getFullYear()} . All rights reserved.
      </Typography>

      <Box sx={{ display: "flex", gap: 2 }}>
        <Link href="/documentation" color="inherit" underline="hover">
          Documentation
        </Link>
        <Link href="/privacy" color="inherit" underline="hover">
          Privacy
        </Link>
        <Link href="/terms" color="inherit" underline="hover">
          Terms
        </Link>
        <Link href="/contact" color="inherit" underline="hover">
          Contact
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;

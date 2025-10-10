import React from "react";
import { Box, Button, Divider } from "@mui/material";
import * as Icons from "@mui/icons-material";

interface TileButtonProps {
  label: string;
  icon: keyof typeof Icons;
  path?: string;
  onClick?: () => void;
  variant?: "text" | "outlined" | "contained";
}

const TileButton: React.FC<TileButtonProps> = ({
  label,
  icon : icon,
  path,
  onClick,
  variant = "contained",
}) => {
  const IconComponent = Icons[icon];

  return (
    <Button
      variant={variant}
      fullWidth
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
        textTransform: "none",
      }}
      onClick={onClick}
      component={path ? "a" : "button"}
      href={path}
    >
    <Box
        sx={{
            flexGrow: 1,
            textAlign: "center",
            fontWeight: 400,
            fontFamily: '"Press Start 2P", cursive',
        }}
    >
        {label}
    </Box>
      <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
      <IconComponent />
    </Button>
  );
};

export default TileButton;
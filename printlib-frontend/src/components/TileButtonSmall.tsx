import React from "react";
import { Button } from "@mui/material";
import * as Icons from "@mui/icons-material";

interface TileButtonProps {
  icon: keyof typeof Icons;
  path?: string;
  onClick?: () => void;
  variant?: "text" | "outlined" | "contained";
}

const TileButton: React.FC<TileButtonProps> = ({
  icon: icon,
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
      <IconComponent />
    </Button>
  );
};

export default TileButton;

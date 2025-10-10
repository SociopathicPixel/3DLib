import React from "react";
import { Button, Box, Divider } from "@mui/material";
import { SvgIconComponent } from "@mui/icons-material";

interface NavButtonProps {
  label: string;
  icon: SvgIconComponent;
  to?: string;
  onClick?: () => void;
  variant?: "text" | "outlined" | "contained";
  color?: "inherit" | "primary" | "secondary";
}

const NavButton: React.FC<NavButtonProps> = ({
  label,
  icon: Icon,
  to,
  onClick,
  variant = "contained",
  color = "primary",
}) => {
  const content = (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <Box>{label}</Box>
      <Divider
        orientation="vertical"
        flexItem
        sx={{ bgcolor: "white", mx: 1 }}
      />
      <Icon />
    </Box>
  );

  return (
    <Button
      variant={variant}
      color={color}
      onClick={onClick}
      component={to ? "a" : "button"}
      href={to}
      sx={{
        textTransform: "none",
        padding: "6px 12px",
        display: "flex",
        alignItems: "center",
        gap: 1,
      }}
    >
      {content}
    </Button>
  );
};

export default NavButton;

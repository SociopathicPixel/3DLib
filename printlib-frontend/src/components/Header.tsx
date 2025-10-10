import React from "react";
import { AppBar, Toolbar, Box } from "@mui/material";
import { useLocation, Link } from "react-router-dom";
import NavButton from "./NavButton";
import {
  Collections,
  Explore,
  ViewInAr,
  ImportantDevices,
} from "@mui/icons-material";



const Header: React.FC = () => {
    const location = useLocation();
    if(location.pathname === "/login" || location.pathname === "/register") return null;
    return (
      <AppBar position="static" color="primary">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box component={Link} to="/landing" sx={{ display: "flex", alignItems: "center" }} >
              <Box component="img" sx={{ height: 40, mr: 2 }} alt="3D PrintLib Logo" src="/logo192.png"/> </Box>
            <NavButton label="Explore" icon={Explore} to="/explore" />
            <NavButton label="Collection" icon={Collections} to="/collection" />
            <NavButton label="Add Model" icon={ViewInAr} to="/add_model" />
            <NavButton label="Add Filament" icon={Explore} to="/add_filament" />
            <NavButton label="My devices" icon={ImportantDevices} to="/my_devices" />
          </Box>
        </Toolbar>
      </AppBar>
    );
};

export default Header;

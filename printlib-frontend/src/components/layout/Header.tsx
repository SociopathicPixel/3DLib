import React, {useState} from "react";
import { AppBar, Toolbar, Box, useMediaQuery, useTheme, List, IconButton, Drawer } from "@mui/material";
import { useLocation, Link } from "react-router-dom";
import NavButton from "../NavButton";
import { Explore, Collections, ViewInAr, NewLabel, ImportantDevices, Tune, ManageAccounts, Menu as MenuIcon } from "@mui/icons-material";

const Header: React.FC = () => {
    const theme = useTheme();
    const location = useLocation();
    const mobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [drawerOpen, setDrawerOpen] = useState(false);
    if(location.pathname === "/login" || location.pathname === "/register") return null;
    const navItemsLeft = [
        { label: "Explore", icon: Explore, to: "/explore" },
        { label: "Collection", icon: Collections, to: "/collection" },
        { label: "Add Model", icon: ViewInAr, to: "/add_model" },
        { label: "Add Filament", icon: NewLabel, to: "/add_filament" },
        { label: "My devices", icon: ImportantDevices, to: "/my_devices" },
    ];
    const navItemsRight = [
        { label: "Settings", icon: Tune, to: "/settings" },
        { label: "My Profile", icon: ManageAccounts, to: "/profile" },
    ];
    const navItems = [...navItemsLeft, ...navItemsRight];

    
    return (
      <AppBar position="static" color="primary">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* DESKTOP VERSION */}
          {!mobile && (
            <>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box
                  component={Link}
                  to="/index"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Box
                    component="img"
                    sx={{ height: 40, mr: 2 }}
                    alt="3D PrintLib Logo"
                    src="/assets/app_logo.png"
                  />{" "}
                </Box>
                {navItemsLeft.map((item) => (
                  <NavButton
                    label={item.label}
                    icon={item.icon}
                    to={item.to}
                    key={item.label}
                  />
                ))}
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                {navItemsRight.map((item) => (
                  <NavButton
                    label={item.label}
                    icon={item.icon}
                    to={item.to}
                    key={item.label}
                  />
                ))}
              </Box>
            </>
          )}
          {/* MOBILE VERSION */}
          {mobile && (
            <>
              <Box
                component={Link}
                to="/index"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Box
                  component="img"
                  sx={{ height: 40, mr: 2 }}
                  alt="3D PrintLib Logo"
                  src="/assets/app_logo.png"
                />{" "}
              </Box>
              <IconButton color="inherit" onClick={() => setDrawerOpen(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
              >
                <List>
                  {navItems.map((item) => (
                    <NavButton
                      label={item.label}
                      icon={item.icon}
                      to={item.to}
                      key={item.label}
                    />
                  ))}
                </List>
              </Drawer>
            </>
          )}
        </Toolbar>
      </AppBar>
    );
};

export default Header;

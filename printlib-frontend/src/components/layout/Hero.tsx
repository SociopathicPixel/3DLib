import React from "react";
import { Grid, Box, TextField, useTheme, useMediaQuery } from "@mui/material";
import TileButton from "../../components/TileButton";
import TileButtonSmall from "../../components/TileButtonSmall";

const HeroPage: React.FC = () => {
    type IconType = keyof typeof import("@mui/icons-material");

    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down("sm"));
    const TileNames: { label: string; icon: IconType; path: string }[] = [
    { label: "New Project", icon: "AddBox", path: "new-project" },
    { label: "My Collections", icon: "Collections", path: "collections" },
    { label: "Inventory", icon: "CreateNewFolder", path: "inventory" },
    { label: "Devices", icon: "Devices", path: "devices" },
    { label: "Jobs..", icon: "CreateNewFolder", path: "jobs" },
    { label: "Notes..", icon: "CreateNewFolder", path: "notes" },
    { label: "Settings", icon: "Settings", path: "settings" },
    { label: "My Acount", icon: "Person", path: "account" },
    ];
    const buttonSize = Math.floor(12 / Math.ceil(TileNames.length / Math.sqrt(TileNames.length)));
    return (
        <Box sx={{ px: 4, py: 6 }}>
        <Box sx={{ mb: 4 }}>
            <TextField fullWidth variant="outlined" placeholder="Search your library..." />
        </Box>
        <Grid container spacing={3}>
            {TileNames.map((tile, index) => (
            <Grid key={index} size={{sm:buttonSize}}>
                {(buttonSize < 4 || mobile) ? (<TileButtonSmall icon={tile.icon} path={tile.path}/>):(<TileButton label={tile.label} icon={tile.icon} path={tile.path} />)}
            </Grid>
            ))}
        </Grid>
        </Box>
    );
};

export default HeroPage;

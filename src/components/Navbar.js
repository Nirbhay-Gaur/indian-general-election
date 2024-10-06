import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import TranslateIcon from "@mui/icons-material/Translate";

function Navbar() {
  return (
    <AppBar position="static" sx={{ bgcolor: "#a70529" }}>
      <Toolbar>
        <Typography
          variant="h6"
          style={{ flexGrow: 1, textTransform: "uppercase" }}
        >
          Indian General Elections
        </Typography>
        <Button
          startIcon={<HomeIcon />}
          color="inherit"
          component={Link}
          to="/"
        >
          Home
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

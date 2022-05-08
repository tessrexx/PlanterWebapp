import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  return (
    <div>
      <AppBar
        className="Navbar"
        elevation={0}
        style={{
          backgroundColor: "#B5CCA7",
        }}
      >
        <Toolbar>
          <Typography>Planter</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

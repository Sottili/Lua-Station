import React from "react";
import "./index.css";
import { Grid, Box, Typography } from "@mui/material";
import logo from "../../imagens/logo.svg";

const SimpleNavbar = () => {
  return (
    <Box
      xs={12}
      sx={{
        height: 70,
        backgroundColor: "#2A3342",
        fontFamily: "Poppins",
      }}
    >
      <Grid container direction="row" alignItems="Center">
        <Grid item>
          <img alt="Logo Lua Station" className="logo-navbar-1" src={logo} />
        </Grid>
        <Grid item maxWidth="20px">
          <Typography>
            <Box
              sx={{
                color: "#fff",
                fontWeight: "200",
                fontFamily: "Poppins",
                lineHeight: "15px",
              }}
            >
              Lua Station
            </Box>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SimpleNavbar;

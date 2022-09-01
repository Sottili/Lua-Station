import React from "react";
import { Link } from "react-router-dom";


import "./index.css";
import { Grid, Box, Typography, Avatar } from "@mui/material";


import logo from "../../imagens/logo.svg";
import AstronautNavbarIcon from '../../imagens/AstronautNavbarIcon.png'

import {AiOutlineHeart} from 'react-icons/ai'
import {GrAdd} from 'react-icons/gr'
import {BsBoxArrowRight} from 'react-icons/bs'

const NavbarFreelas = () => {
  return (
    <Box
      xs={12}
      sx={{
        display: "flex",
        height: 70,
        backgroundColor: "#333F51",
        fontFamily: "Poppins",
        overflowY: "hidden",
      }}
    >
      <Grid container direction="row" alignItems="Center" style={{width: "60%"}}>
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
      <Grid 
      container 
      direction="row"
      style={{
        height: "70px",
        display: "flex",
        alignItems: "center",
        widht: "40%"
      }}>
        <Grid
          item
          style={{
            dislay: "flex",
            flexDirection: "row",
          }}
        >
          <Link
          to="/freelancers"
            style={{
              margin: "5px 30px",
              textDecoration: "none",
              color: "#979DAC",
            }}
          >
            Freelancers
          </Link>
          <Link
            to="/services"
            style={{
              margin: "5px 30px",
              textDecoration: "none",
              color: "#979DAC",
            }}
          >
            Serviços
          </Link>
          <Link
            to="/myfreelancers"
            style={{
              margin: "5px 30px",
              textDecoration: "none",
              color: "#979DAC",
            }}
          >
            Meus Freelas
          </Link>
        </Grid>
      </Grid>
      <Grid container direction="row" style={{ width: "25%", height :"70px", alignItems: "center"}}>
        <Grid item style={{ display: "flex", alignItems: "center" }}>
            <Link to="/createservice" style={{ color :"#fff" }}>
              <GrAdd size={20} style={{ verticalAlign: "middle"}} />
            </Link>
            <Link to="/fav" style={{ color: "#fff", margin: "0 20px"}}>
              <AiOutlineHeart size={20} style={{verticalAlign: "middle"}} />
            </Link>
            <button
            style={{ 
                display: "flex",  
                border: "none",
                backgroundColor: "transparent",
                cursor: "pointer"
              }}>
              <BsBoxArrowRight size={25} style={{
                color: "#fff",
                verticalAlign: "middle",
              }}/>
              <p style={{
                margin: "0 20px",
                fontSize: "18px",
                fontFamily: "Poppins",
                color: "#fff"
              }}>
                Sair
              </p> 
            </button>
            <Link to="/profile">
            <Avatar alt="Astronauta" src={AstronautNavbarIcon}></Avatar>
            </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default NavbarFreelas;

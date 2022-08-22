import React from "react";

import "./index.css";

import { Container, CssBaseline, Box, Grid, Avatar } from "@mui/material";
import NavbarFreelas from "../../components/home-navbar";

import iconFilter from "../../imagens/IconFilter.svg";
import moon from "../../imagens/moon.svg";
import star from "../../imagens/star.svg";
import meteor from "../../imagens/meteor.svg";

import { BiTime } from "react-icons/bi";
import CardServices from "../../components/CardServices";

const ServicesPage = () => {
  return (
    <>
      <CssBaseline />
      <NavbarFreelas />
      <Container
        maxWidth="xl"
        style={{
            maxWidth: "1920px",
            fontFamily: "Poppins",
            overflowX: "hidden",
            padding: "0",
            flexDirection: "column",
            display: "flex",
            justifyContent: "center",
            background:
            "radial-gradient(circle, rgba(24,25,82,1) 0%, rgba(24,25,82,1) 44%, rgba(13,12,34,1) 100%)",
        }}
      >
        <Box sx={12}>
          <Grid
            style={{
              display: "flex",
              flexDirection: "row",
              padding: "30px",
            }}
          >
            <Grid style={{ display: "flex", flexDirection: "column"}}>
              <Grid
                style={{
                  backgroundColor: "#333F51",
                  width: "300px",
                  height: "320px",
                  borderRadius: "15px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div style={{ display: "flex" }}>
                  <img src={iconFilter} />
                  <p style={{ color: "#fff", marginLeft: "10px" }}>Filtros</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    color: "#fff",
                  }}
                >
                  <div
                    className="checkboxes"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      margin: "10px 0",
                    }}
                  >
                    <img
                      src={moon}
                      style={{ width: "50px" }}
                      alt="Lua dificulty"
                    />
                    <input type="checkbox" />
                    Dificil/Longo
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      margin: "10px 0",
                    }}
                  >
                    <img
                      style={{ width: "50px" }}
                      src={star}
                      alt="Star dificulty"
                    />
                    <input type="checkbox" />
                    Intermediário/medio
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      margin: "10px 0",
                    }}
                  >
                    <img
                      style={{ width: "50px" }}
                      src={meteor}
                      alt="Meteor dificulty"
                    />
                    <input type="checkbox" />
                    Facil/Rápido
                  </div>
                </div>
              </Grid>
              <Grid
                item
                style={{
                  backgroundColor: "#333F51",
                  borderRadius: "20px",
                  height: "100px",
                  width: "300px",
                  marginTop: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div style={{ display: "flex" }}>
                  <BiTime size={30} style={{ color: "#fff" }} />
                  <select
                    name="select"
                    style={{
                      backgroundColor: "#5A189A",
                      color: "#fff",
                      border: "none ",
                      width: "200px",
                      borderRadius: "10px",
                      fontFamily: "Poppins",
                      fontSize: "16px",
                      marginLeft: "10px",
                    }}
                  >
                    <option selected value="valor1">
                      1-7 Dias
                    </option>
                    <option value="valor2">7 - 14 Dias</option>
                    <option value="valor3">14 - 30 Dias</option>
                  </select>
                </div>
              </Grid>
            </Grid>
              <Grid container style={{ display: "flex", flexDirection: "column" }}>
                <Grid
                    item
                    style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    }}
                >
                    <CardServices />
                    <CardServices />
                    <CardServices />
                    <CardServices />
                </Grid>
                <Grid item
                style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "30px"
                }}>
                <button style={{
                    backgroundColor: "#5A189A",
                    border: "none",
                    padding: "10px 100px",
                    color: "#fff",
                    fontFamily: "Poppins",
                    fontSize: "18px",
                    borderRadius: "10px"
                }}>Ver mais</button>
                </Grid>
              </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default ServicesPage;

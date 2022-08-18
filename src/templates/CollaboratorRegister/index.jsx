import React from "react";

import { Link } from "react-router-dom";

import { Box, Container, Typography, Button, ListItem } from "@mui/material";

import { BsArrowLeftShort } from "react-icons/bs";

import SimpleNavbar from "../../components/simple-navbar";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@emotion/react";
import PurpleTheme from "../../theme";
import { useState, useRef } from "react";

import Slider from "react-slick";

const CollaboratorRegister = () => {

  const refSlider = useRef();

  const [settingsSlider, setSettingsSlider] = useState({
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  })

  const goNext = () => {
    refSlider.current.slickNext();
  }


  return (
    <>
      <CssBaseline />
      <SimpleNavbar />
      <ThemeProvider theme={PurpleTheme}>
        <Container
          maxWidth="xl"
          style={{
            padding: 0,
            margin: 0,
            height: "calc(100vh - 70px)",
            width: "100%",
            background:
              "radial-gradient(circle, rgba(24,25,82,1) 0%, rgba(24,25,82,1) 44%, rgba(13,12,34,1) 100%)",
            color: "#fff",
            maxWidth: "1920px"
          }}
        >
          <Box
            xs={12}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "Poppins",
              position: "relative",
            }}
          >
            <Link
              style={{
                textDecoration: "none",
                color: "#fff",
                position: "absolute",
                top: 16,
                left: 10,
              }}
              to="/"
            >
              <BsArrowLeftShort style={{ verticalAlign: "middle" }} />
              Voltar
            </Link>
            <Typography
              variant="h5"
              style={{
                padding: "10px",
                fontWeight: "700",
                fontFamily: "Poppins",
                marginTop: "30px",
                textAlign: "center",
              }}
            >
              EMBARQUE EM NOSSO<br></br> FOGUETE
            </Typography>
            <Typography
              variant="subtitle2"
              style={{
                color: "#8896AB",
                fontFamily: "Poppins",
                marginBottom: "30px",
              }}
            >
              Venha conosco nessa jornada!
            </Typography>
            <form
              method="post"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <label style={{ textAlign: "left", width: "100%" }}>Nome</label>
              <input
                style={{
                  fontFamily: "Poppins",
                  width: "100%",
                  padding: "7px 10px",
                  borderRadius: "5px",
                  border: "none",
                  marginBottom: "10px",
                }}
                type="text"
                placeholder="Digite seu Nome"
              ></input>
              <label style={{ textAlign: "left", width: "100%" }}>
                Nome social
              </label>
              <input
                style={{
                  fontFamily: "Poppins",
                  width: "100%",
                  padding: "7px 10px",
                  borderRadius: "5px",
                  border: "none",
                  marginBottom: "10px",
                }}
                type="email"
                placeholder="Digite seu Nome Social"
              ></input>
              <label style={{ textAlign: "left", width: "100%" }}>Email</label>
              <input
                style={{
                  fontFamily: "Poppins",
                  width: "100%",
                  padding: "7px 10px",
                  borderRadius: "5px",
                  border: "none",
                  marginBottom: "10px",
                }}
                type="text"
                placeholder="Digite seu Email"
              ></input>
              <label style={{ textAlign: "left", width: "100%" }}>
                Data de Nascimento
              </label>
              <input
                style={{
                  fontFamily: "Poppins",
                  width: "100%",
                  padding: "7px 10px",
                  borderRadius: "5px",
                  border: "none",
                  marginBottom: "10px",
                }}
                type="date"
                placeholder="Digite sua Senha"
              ></input>
              <label style={{ textAlign: "left", width: "100%" }}>CPF</label>
              <input
                style={{
                  fontFamily: "Poppins",
                  width: "100%",
                  padding: "7px 10px",
                  borderRadius: "5px",
                  border: "none",
                  marginBottom: "10px",
                }}
                type="text"
                placeholder="Digite seu CPF"
              ></input>
              <Button
                variant="contained"
                style={{
                  width: "300px",
                  backgroundColor: "#5A189A",
                  fontFamily: "Poppins",
                  marginTop: "10px",
                }}
                onClick={()=>goNext()}
              >
                Próximo
              </Button>
            
            </form>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default CollaboratorRegister;

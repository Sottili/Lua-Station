import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

import { Box, Container } from "@mui/system";

import ErrorBG from "../../imagens/ErrorBG.svg";
import Astronaut from "../../imagens/AstronautERROR.png";
import { Button, CssBaseline } from "@mui/material";

const ErrorPage = () => {
  return (
    <Container
      className="container-error"
      maxWidth="xl"
      style={{
        maxWidth: "1920px",
        overflowX: "hidden",
        height: "100vh",
      }}
    >
      <CssBaseline />
      <Box
        sx={12}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          height: "100%",
        }}
      >
        <div>
          <img src={Astronaut} style={{ height: "420px" }} />
        </div>
        <div>
          <h3 style={{ fontSize: "32px", color: "#fff", margin: "0" }}>
            Poxaa!
          </h3>
          <p style={{ fontSize: "18px", color: "#8896AB" }}>
            Algo deu errado, tente novamente por favor!
          </p>
          <div>
            <Link
              to="/"
              style={{
                textDecoration: "none",
              }}
            >
              <Button
                style={{
                  backgroundColor: "#5A189A",
                  padding: "10px",
                  color: "#fff",
                  textTransform: "initial",
                  fontSize: "16px",
                  fontWeight: "300",
                  fontFamily: "Poppins",
                  marginRight: "10px",
                }}
              >
                Voltar para a tela inicial
              </Button>
            </Link>
            <Link
              to="/"
              style={{
                textDecoration: "none",
              }}
            >
              <Button
                style={{
                  backgroundColor: "#4D5F7A",
                  padding: "10px",
                  color: "#fff",
                  textTransform: "initial",
                  fontSize: "16px",
                  fontWeight: "300",
                  fontFamily: "Poppins",
                }}
              >
                Tentar novamente
              </Button>
            </Link>
          </div>
        </div>
      </Box>
    </Container>
  );
};

export default ErrorPage;

import React from "react";

import { ThemeProvider } from "@emotion/react";

import { BsArrowLeftShort } from "react-icons/bs";

import { Link } from "react-router-dom";

import SimpleNavbar from "../../components/simple-navbar";
import CssBaseline from "@mui/material/CssBaseline";

import { Box, Container, Typography, Button } from "@mui/material";
import PurpleTheme from "../../theme";

const TypeAccount = () => {
  return (
    <>
      <CssBaseline />
      <SimpleNavbar />
      <ThemeProvider theme={PurpleTheme}>
        <Container
          maxWidth="xl"
          style={{
            height: "calc(100vh - 70px)",
            background:
              "radial-gradient(circle, rgba(24,25,82,1) 0%, rgba(24,25,82,1) 44%, rgba(13,12,34,1) 100%)",
            color: "#fff",
            maxWidth: "1920px",
          }}
        >
          <Box
            xs={12}
            style={{
              height: "100%",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "Poppins",
            }}
          >
            <Link
              style={{
                textDecoration: "none",
                color: "#fff",
                position: "absolute",
                top: 14,
                left: 0,
              }}
              to="/"
            >
              <BsArrowLeftShort style={{ verticalAlign: "middle" }} />
              Voltar
            </Link>
            <Typography
              variant="h2"
              style={{ fontWeight: "700", paddingBottom: "50px" }}
            >
              TIPO DE CONTA
            </Typography>
            <Link
              to="/companyregister"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              <Button
                color="primary"
                variant="contained"
                sx={{
                  backgroundColor: "#5A189A",
                  width: 250,
                  fontFamily: "Poppins",
                }}
              >
                EMPRESA
              </Button>
            </Link>
            <Typography
              variant="h5"
              style={{
                fontWeight: "200",
                marginTop: "40px",
                marginBottom: "20px",
              }}
            >
              OU
            </Typography>
            <Link
              to="/profileregister"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#5A189A",
                  mt: 2,
                  width: 250,
                  fontFamily: "Poppins",
                }}
              >
                COLABORADOR
              </Button>
            </Link>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default TypeAccount;

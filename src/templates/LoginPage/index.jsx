import React from "react";
import { Link } from "react-router-dom";

import "./index.css";

//Components

import SimpleNavbar from "../../components/simple-navbar";

// Icons

import { BsArrowLeftShort } from "react-icons/bs";

// @MUI and Theme
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@emotion/react";

import Avatar from "@mui/material/Avatar";

import { Typography } from "@mui/material";

import PurpleTheme from "../../theme";

import Button from "@mui/material/Button";

import { Container, Box } from "@mui/system";
import { Grid } from "@mui/material";

// Images

import logo from "../../imagens/logo.svg";
import juan from "../../imagens/juan.svg";
import aspas from "../../imagens/aspas.svg";

const Login = () => {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={PurpleTheme}>
        <SimpleNavbar />
        <Container
          maxWidth="xl"
          style={{ padding: 0, margin: 0, height: "calc(100vh - 70px)", maxWidth: "1920px" }} 
        >
          <Box
            className="login-container"
            sx={{
              display: "flex",
              flexWrap: "wrap",
              textAlign: "center",
              background:
                "radial-gradient(circle, rgba(24,25,82,1) 0%, rgba(24,25,82,1) 44%, rgba(13,12,34,1) 100%)",
              color: "#fff",
              fontFamily: "Poppins",
            }}
            xs={12}
            xl={12}
          >
            <Grid
              container
              alignItems="center"
              style={{ marginTop: "40px", flexWrap: "wrap", }}
              direction="column"
              item
              xs={6} 
            >
              <div className="custom-login-right">
                <Link className="absolute-prev-login" to="/">
                  <p>
                    <BsArrowLeftShort style={{ verticalAlign: "middle" }} />
                    Voltar
                  </p>
                </Link>
                <img className="logo-right-login" src={logo} />
                <Typography
                  variant="h4"
                  style={{ marginBottom: "15px", fontFamily: "Poppins" }}
                >
                  Lua Station
                </Typography>
                <Typography
                  color="#8896AB"
                  style={{ marginBottom: "15px", fontFamily: "Poppins" }}
                  variant="subtitle1"
                >
                  Comece uma nova Aventura!
                </Typography>
              </div>
              <form action="post" className="login-form">
                <label className="label-login" htmlFor="my-input">
                  Email
                </label>
                <input
                  placeholder="Email"
                  className="input-email-login"
                  type="text"
                ></input>
                <label className="label-login" htmlFor="my-input">
                  Password
                </label>
                <input
                  placeholder="Password"
                  className="input-password-login"
                  type="password"
                ></input>
                <div className="login-form2">
                  <div>
                    <input type="checkbox"></input>
                    <label htmlFor="remember">Lembrar-me?</label>
                  </div>
                  <div>
                    <Link
                      style={{ textDecoration: "none", color: "#8343BF" }}
                      to="/"
                    >
                      Esqueceu sua senha?
                    </Link>
                  </div>
                </div>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#5A189A",
                    mt: 2,
                    fontFamily: "Poppins",
                  }}
                >
                  Entrar
                </Button>
              </form>
            </Grid>
            <Grid
              className="mobile"
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
              style={{
                background: "#3C096C",
              }}
              item
              xs={6}
            >
              <Typography
                variant="h5"
                maxWidth={400}
                style={{
                  fontFamily: "Poppins",
                  paddingBottom: "30px",
                  fontWeight: "400",
                  position: "relative",
                  zIndex: 3,
                }}
              >
                <img
                  src={aspas}
                  style={{
                    position: "absolute",
                    top: "-50px",
                    left: "-140px",
                    transform: "scale(-1)",
                    zIndex: 1,
                  }}
                />
                Vamos ter fé em Deus, parceiro, assim nós chega onde nós quer.
              </Typography>
              <Typography
                style={{ fontWeight: "400", paddingBottom: "30px" }}
                maxWidth={300}
                variant="h5"
              >
                Receba aqui é o luva de açougueiro
              </Typography>
              <Avatar
                style={{
                  width: "110px",
                  height: "110px",
                  marginBottom: "20px",
                }}
                src={juan}
              ></Avatar>
              <Typography
                style={{ fontFamily: "Poppins", position: "relative" }}
                variant="subtitle2"
              >
                Juan Pablo <br />
                <Typography
                  variant="subtitle"
                  color="#9D4EDD"
                  style={{ fontFamily: "Poppins" }}
                >
                  Desenvolvedor
                  <img
                    src={aspas}
                    style={{
                      position: "absolute",
                      top: "-200px",
                      right: "-220px",
                      transform: "scaleX(1)",
                      zIndex: 1,
                    }}
                  />
                </Typography>
              </Typography>
            </Grid>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Login;

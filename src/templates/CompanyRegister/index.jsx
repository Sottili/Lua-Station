import React from "react";

import { Link } from "react-router-dom";

import { Box, Container, Typography, Button, ListItem } from "@mui/material";

import { BsArrowLeftShort } from "react-icons/bs";

import SimpleNavbar from "../../components/simple-navbar";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@emotion/react";
import PurpleTheme from "../../theme";

const CompanyRegister = () => {
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
              }}
            >
              SE ESTABELEÇA NA LS
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
                type="email"
                placeholder="Digite seu Email"
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
              <label style={{ textAlign: "left", width: "100%" }}>
                Categoria da empresa
              </label>
              <select
                list="category"
                id="category"
                style={{
                  fontFamily: "Poppins",
                  width: "100%",
                  padding: "7px 10px",
                  borderRadius: "5px",
                  border: "none",
                  marginBottom: "10px",
                }}
              >
                <option value="grandeporte">Grande Porte</option>
                <option value="medioporte">Medio Porte</option>
                <option value="pequenoporte">Pequeno Porte</option>
              </select>
              <datalist id="category">
                <option value="Grande porte"></option>
                <option value="Medio porte"></option>
                <option value="Pequeno porte"></option>
              </datalist>
              <label style={{ textAlign: "left", width: "100%" }}>Senha</label>
              <input
                style={{
                  fontFamily: "Poppins",
                  width: "100%",
                  padding: "7px 10px",
                  borderRadius: "5px",
                  border: "none",
                  marginBottom: "10px",
                }}
                type="password"
                placeholder="Digite sua Senha"
              ></input>
              <label style={{ textAlign: "left", width: "100%" }}>
                Confirme a senha
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
                type="password"
                placeholder="Confirme sua Senha"
              ></input>
              <Button
                variant="contained"
                style={{
                  width: "300px",
                  backgroundColor: "#5A189A",
                  fontFamily: "Poppins",
                  marginTop: "10px",
                }}
              >
                Cadastrar
              </Button>
            </form>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default CompanyRegister;

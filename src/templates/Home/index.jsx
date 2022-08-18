import React from "react";

import "./index.css";

import { Link } from "react-router-dom";

// @MUI and Theme
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@emotion/react";

import { Typography } from "@mui/material";

import PurpleTheme from "../../theme";

import { Container, Box, padding } from "@mui/system";
import { Grid } from "@mui/material";
import { useRef } from "react";

// Images

import logo from "../../imagens/logo.svg";
import startupHome from "../../imagens/Startup_PNG 1.png";
import lamp from "../../imagens/lamp.png";
import moon from "../../imagens/moon.svg";
import star from "../../imagens/star.svg";
import meteor from "../../imagens/meteor.svg";
import ComeStation1 from "../../imagens/ComeStation1.svg";
import ComeStation2 from "../../imagens/ComeStation2.svg";
import ComeStation3 from "../../imagens/ComeStation3.svg";
import etec from "../../imagens/etec.svg";
import juan from "../../imagens/juan.svg";
import newana from "../../imagens/newana.svg";
import felipe from "../../imagens/felipe.svg";
import max from "../../imagens/max.svg";
import serafim from "../../imagens/serafim.svg";
import jonas from "../../imagens/jonas.svg";
import renove from '../../imagens/renove.svg'
import design from '../../imagens/design.svg'
import mobile from '../../imagens/mobile.svg'
import game from '../../imagens/game.svg'
import video from '../../imagens/video.svg'

//Icons

import {
  FaCheckCircle,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaCopyright
} from "react-icons/fa";

const Home = () => {
  const navRef = useRef();

  const navResponse = () => {
    navRef.current.classList.toggle("navResponseHome");
  };

  return (
    <>
      <CssBaseline />
      <Container
        className="container-home"
        maxWidth="xl"
        style={{
          maxWidth: "1920px",
          fontFamily: "Poppins",
        }}
      >
        <header className="headerHome">
          <div className="brandHome">
            <img src={logo} alt="Logo Lua Station" />
            <div
              style={{
                diplay: "flex",
                flexDirection: "column",
                lineHeight: "15px",
                fontWeight: "200",
              }}
            >
              <p>Lua</p>
              <p>Station</p>
            </div>
          </div>

          <nav ref={navRef} className="navHome">
            <ul>
              <li>
                <a href="#">Inicio</a>
              </li>
              <li>
                <a href="#">Serviços</a>
              </li>
              <li>
                <a href="#">Como Funciona?</a>
              </li>
              <li>
                <a href="#">Beneficios</a>
              </li>
              <li>
                <a href="#">Quem Somos?</a>
              </li>
              <li>
                <a href="#">Time</a>
              </li>
            </ul>
          </nav>
          <div>
            <button style={{ backgroundColor: "transparent", border: "none" }}>
              <Link
                style={{
                  textDecoration: "none",
                  color: "#fff",
                  fontFamily: "Poppins",
                }}
                to="/login"
              >
                Entrar
              </Link>
            </button>
            <button
              id="btn-home"
              style={{ backgroundColor: "#5A189A", border: "none" }}
            >
              <Link
                style={{
                  textDecoration: "none",
                  color: "#fff",
                  padding: "20px",
                  fontFamily: "Poppins",
                }}
                to="/typeaccount"
              >
                Cadastrar-se
              </Link>
            </button>
          </div>
        </header>
        <Box
          xs={12}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            fontFamily: "Poppins",
            marginTop: "50px",
          }}
        >
          <Grid>
            <Typography
              variant="h2"
              style={{
                padding: "10px",
                fontWeight: "700",
                fontFamily: "Poppins",
                fontWeight: "200",
                color: "#fff",
                marginBottom: "50px",
              }}
            >
              Welcome to Station!
            </Typography>
            <Typography
              variant="subtitle1"
              style={{
                color: "#fff",
                fontFamily: "Poppins",
                marginLeft: "30px",
                marginBottom: "30px",
                fontSize: "20px",
                color: "#5C677D",
              }}
            >
              Os Freelancers qualificados te esperam aqui
              <br />
              Está pronto para ir atrás dos seus desejos?
              <br />A Lua Station te leva lá!
            </Typography>
            <div id="buttons-home">
              <button
                id="btn-home"
                style={{ backgroundColor: "#5A189A", border: "none" }}
              >
                <Link
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                    padding: "20px",
                    fontFamily: "Poppins",
                  }}
                  to="/login"
                >
                  Publique seu projeto
                </Link>
              </button>
              <button
                id="btn-home"
                style={{ backgroundColor: "#5A189A", border: "none" }}
              >
                <Link
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                    padding: "20px",
                    fontFamily: "Poppins",
                  }}
                  to="/login"
                >
                  Seja um astronauta
                </Link>
              </button>
            </div>
          </Grid>
          <Grid>
            <img src={startupHome} alt="ilustrativo home" />
          </Grid>
        </Box>
        <Box
          xs={12}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Grid item>
            <h1
              style={{
                color: "#fff",
                padding: "80px",
                fontWeight: "300",
                fontSize: "50px",
              }}
            >
              Serviços Freelancer
            </h1>
          </Grid>
          <Grid container xs={12} spacing={2}
          style={{
            display: "flex",
            justifyContent: "center"
          }}>
            <Grid
              style={{
                backgroundColor: "#333F51",
                height: "250px",
                marginBottom: "20px",
                margin: "0 30px",
                borderRadius: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
              item
              xs={3}
            >
              <div>   
                <h1
                  style={{
                    color: "#fff",
                    fontWeight: "200",
                    fontSize: "22px",
                  }}
                >
                RENOVE SEU <br /> WEBSITE!
              </h1>
              </div>
                <img style={{ width: "200px"}} src={renove} />
            </Grid>
            <Grid
              style={{
                backgroundColor: "#333F51",
                height: "250px",
                marginBottom: "20px",
                margin: "0 30px",
                borderRadius: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
              item
              xs={3}
            >
              <div>   
                <h1
                  style={{
                    color: "#fff",
                    fontWeight: "300",
                    fontSize: "22px",
                  }}
                >
                DESIGN <br /> PROFISSIONAL
              </h1>
              </div>
                <img style={{ width: "200px"}} src={design} />
            </Grid>
            <Grid
              style={{
                backgroundColor: "#333F51",
                height: "250px",
                marginBottom: "20px",
                margin: "0 30px",
                borderRadius: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
              item
              xs={3}
            >
              <div>   
                <h1
                  style={{
                    color: "#fff",
                    fontWeight: "200",
                    fontSize: "22px",
                  }}
                >
                EDIÇÃO DE <br /> VIDEO!
              </h1>
              </div>
                <img style={{ width: "200px"}} src={video} />
            </Grid>
            <Grid
              style={{
                backgroundColor: "#333F51",
                height: "250px",
                marginBottom: "20px",
                margin: "20px 30px",
                borderRadius: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
              item
              xs={3}
            >
              <div>   
                <h1
                  style={{
                    color: "#fff",
                    fontWeight: "200",
                    fontSize: "22px",
                  }}
                >
                LANCE SEU <br /> APP!
              </h1>
              </div>
                <img style={{ width: "200px"}} src={renove} />
            </Grid>
            <Grid
              style={{
                backgroundColor: "#333F51",
                height: "250px",
                marginBottom: "20px",
                margin: "20px 30px",
                borderRadius: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
              item
              xs={3}
            >
              <div>   
                <h1
                  style={{
                    color: "#fff",
                    fontWeight: "200",
                    fontSize: "22px",
                  }}
                >
                LANCE SEU <br /> GAME!
              </h1>
              </div>
                <img style={{ width: "200px"}} src={game} />
            </Grid>
          </Grid>
        </Box>
        <Box
          xs={12}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "80px 0",
          }}
        >
          <Grid style={{ padding: "80px" }}>
            <h1
              style={{
                color: "#fff",
                fontWeight: "300",
                fontSize: "50px",
                margin: "0px",
              }}
            >
              Niveis de Serviços
            </h1>
            <p style={{ color: "#fff", margin: "0px", fontSize: "16px" }}>
              Os Freelancers receberam níveis de trabalho.
            </p>
          </Grid>
          <Grid
            container
            xs={12}
            style={{
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <Grid
              xs={3}
              style={{
                backgroundColor: "#333F51",
                height: "300px",
                marginBottom: "20px",
                margin: "0 70px",
                borderRadius: "5px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  letterSpacing: "2px",
                  alignItems: "center",
                }}
              >
                <img
                  style={{ height: "90px", marginBottom: "10px" }}
                  src={meteor}
                  alt="Meteoro dificulty"
                />
                <h4
                  style={{
                    color: "#fff",
                    fontWeight: "300",
                    fontSize: "24px",
                    margin: "0",
                  }}
                >
                  Básico
                </h4>
              </div>
              <p style={{ color: "#fff", padding: "0px 30px" }}>
                <FaCheckCircle
                  style={{
                    color: "#22C55E",
                    verticalAlign: "middle",
                    fontWeight: "300",
                  }}
                />
                Trabalho Rápido
              </p>
              <p style={{ color: "#fff", padding: "0px 30px" }}>
                <FaCheckCircle
                  style={{
                    color: "#22C55E",
                    verticalAlign: "middle",
                    fontWeight: "300",
                  }}
                />
                Menor Dificuldade
              </p>
            </Grid>
            <Grid
              xs={3}
              style={{
                backgroundColor: "#333F51",
                height: "300px",
                marginBottom: "20px",
                margin: "0 70px",
                borderRadius: "5px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  letterSpacing: "2px",
                  alignItems: "center",
                }}
              >
                <img
                  style={{ height: "90px", marginBottom: "10px" }}
                  src={star}
                  alt="Start dificulty"
                />
                <h4
                  style={{
                    color: "#fff",
                    fontWeight: "300",
                    fontSize: "24px",
                    margin: "0",
                  }}
                >
                  Intermediário
                </h4>
              </div>
              <p style={{ color: "#fff", padding: "0px 30px" }}>
                <FaCheckCircle
                  style={{
                    color: "#22C55E",
                    verticalAlign: "middle",
                    fontWeight: "300",
                  }}
                />
                Trabalho Padrão
              </p>
              <p style={{ color: "#fff", padding: "0px 30px" }}>
                <FaCheckCircle
                  style={{
                    color: "#22C55E",
                    verticalAlign: "middle",
                    fontWeight: "300",
                  }}
                />
                Dificuldade Moderada
              </p>
            </Grid>
            <Grid
              xs={3}
              style={{
                backgroundColor: "#333F51",
                height: "300px",
                marginBottom: "20px",
                margin: "0 70px",
                borderRadius: "5px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  letterSpacing: "2px",
                  alignItems: "center",
                }}
              >
                <img
                  style={{ height: "90px", marginBottom: "10px" }}
                  src={moon}
                  alt="Moon dificulty"
                />
                <h4
                  style={{
                    color: "#fff",
                    fontWeight: "300",
                    fontSize: "24px",
                    margin: "0",
                  }}
                >
                  Avançado
                </h4>
              </div>
              <p style={{ color: "#fff", padding: "0px 30px" }}>
                <FaCheckCircle
                  style={{
                    color: "#22C55E",
                    verticalAlign: "middle",
                    fontWeight: "300",
                  }}
                />
                Trabalho Demorado
              </p>
              <p style={{ color: "#fff", padding: "0px 30px" }}>
                <FaCheckCircle
                  style={{
                    color: "#22C55E",
                    verticalAlign: "middle",
                    fontWeight: "300",
                  }}
                />
                Maior Dificuldade
              </p>
            </Grid>
            <Grid item></Grid>
          </Grid>
        </Box>
        <Box xs={12}>
          <Grid style={{ padding: "80px" }}>
            <h1
              style={{
                color: "#fff",
                fontWeight: "300",
                fontSize: "50px",
                margin: "0px",
                textAlign: "center",
              }}
            >
              Como a LS funciona? (Colaborador)
            </h1>
          </Grid>
          <Grid
            container
            xs={12}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Grid
              item
              xs={3}
              style={{
                height: "280px",
                backgroundColor: "#333F51",
                margin: "0 20px",
                borderRadius: "6px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  backgroundColor: "#7B2CBF",
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  border: "6px solid #2A3342",
                  marginTop: "-20px",
                }}
              >
                <p
                  style={{
                    color: "#fff",
                    fontSize: "35px",
                    margin: "0",
                    textAlign: "center",
                  }}
                >
                  1
                </p>
              </div>
              <div
                className="content-cards-colaborator"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "-100px",
                }}
              >
                <h3 style={{ color: "#fff" }}>PUBLICAÇÃO</h3>
                <p style={{ fontWeight: "500", color: "#8896AB" }}>
                  Veja as publicações de ofertas de <br /> freelancers
                  disponíveis.
                </p>
              </div>
            </Grid>
            <Grid
              item
              xs={3}
              style={{
                height: "280px",
                backgroundColor: "#333F51",
                margin: "0 20px",
                borderRadius: "6px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  backgroundColor: "#7B2CBF",
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  border: "6px solid #2A3342",
                  marginTop: "-20px",
                }}
              >
                <p
                  style={{
                    color: "#fff",
                    fontSize: "30px",
                    margin: "0",
                    textAlign: "center",
                  }}
                >
                  2
                </p>
              </div>
              <div
                className="content-cards-colaborator"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "-100px",
                }}
              >
                <h3 style={{ color: "#fff" }}>PROCURE</h3>
                <p style={{ fontWeight: "500", color: "#8896AB" }}>
                  Procure o serviço que esteja dentro
                  <br /> do seu perfil profissional.
                </p>
              </div>
            </Grid>
            <Grid
              item
              xs={3}
              style={{
                height: "280px",
                backgroundColor: "#333F51",
                margin: "0 20px",
                borderRadius: "6px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  backgroundColor: "#7B2CBF",
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  border: "6px solid #2A3342",
                  marginTop: "-20px",
                }}
              >
                <p
                  style={{
                    color: "#fff",
                    fontSize: "30px",
                    margin: "0",
                    textAlign: "center",
                  }}
                >
                  3
                </p>
              </div>
              <div
                className="content-cards-colaborator"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "-100px",
                }}
              >
                <h3 style={{ color: "#fff" }}>CONTATO</h3>
                <p style={{ fontWeight: "500", color: "#8896AB" }}>
                  Contate o empregador para
                  <br /> receber mais informações do
                  <br /> serviço.
                </p>
              </div>
            </Grid>
          </Grid>
          <Grid style={{ padding: "80px" }}>
            <h1
              style={{
                color: "#fff",
                fontWeight: "300",
                fontSize: "50px",
                margin: "0px",
                textAlign: "center",
              }}
            >
              Como a LS funciona? (Empregador)
            </h1>
          </Grid>
          <Grid
            container
            xs={12}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Grid
              item
              xs={3}
              style={{
                height: "280px",
                backgroundColor: "#333F51",
                margin: "0 20px",
                borderRadius: "6px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  backgroundColor: "#7B2CBF",
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  border: "6px solid #2A3342",
                  marginTop: "-20px",
                }}
              >
                <p
                  style={{
                    color: "#fff",
                    fontSize: "35px",
                    margin: "0",
                    textAlign: "center",
                  }}
                >
                  1
                </p>
              </div>
              <div
                className="content-cards-colaborator"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "-100px",
                }}
              >
                <h3 style={{ color: "#fff" }}>PUBLICAÇÃO</h3>
                <p style={{ fontWeight: "500", color: "#8896AB" }}>
                  Publique o serviço que está <br /> precisando.
                </p>
              </div>
            </Grid>
            <Grid
              item
              xs={3}
              style={{
                height: "280px",
                backgroundColor: "#333F51",
                margin: "0 20px",
                borderRadius: "6px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  backgroundColor: "#7B2CBF",
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  border: "6px solid #2A3342",
                  marginTop: "-20px",
                }}
              >
                <p
                  style={{
                    color: "#fff",
                    fontSize: "30px",
                    margin: "0",
                    textAlign: "center",
                  }}
                >
                  2
                </p>
              </div>
              <div
                className="content-cards-colaborator"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "-100px",
                }}
              >
                <h3 style={{ color: "#fff" }}>PROCURE</h3>
                <p style={{ fontWeight: "500", color: "#8896AB" }}>
                  Procure o perfil do profissional que
                  <br /> seja melhor para seu serviço.
                </p>
              </div>
            </Grid>
            <Grid
              item
              xs={3}
              style={{
                height: "280px",
                backgroundColor: "#333F51",
                margin: "0 20px",
                borderRadius: "6px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  backgroundColor: "#7B2CBF",
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  border: "6px solid #2A3342",
                  marginTop: "-20px",
                }}
              >
                <p
                  style={{
                    color: "#fff",
                    fontSize: "30px",
                    margin: "0",
                    textAlign: "center",
                  }}
                >
                  3
                </p>
              </div>
              <div
                className="content-cards-colaborator"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "-100px",
                }}
              >
                <h3 style={{ color: "#fff" }}>CONTATE</h3>
                <p style={{ fontWeight: "500", color: "#8896AB" }}>
                  Contate o profissional e ofereça
                  <br /> mais informações sobre o serviço.
                </p>
              </div>
            </Grid>
          </Grid>
        </Box>
        <Box xs={12}>
          <Grid
            container
            xs={12}
            style={{
              padding: "80px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Grid item xs={12} style={{ padding: "80px" }}>
              <h1
                style={{
                  color: "#fff",
                  fontWeight: "300",
                  fontSize: "50px",
                  margin: "0px",
                  textAlign: "center",
                }}
              >
                Venha para a nossa estação espacial
              </h1>
            </Grid>
            <Grid
              item
              xs={3}
              style={{
                height: "450px",
                backgroundColor: "#333F51",
                margin: "0 20px",
                borderRadius: "6px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  backgroundColor: "#7B2CBF",
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  border: "6px solid #2A3342",
                  marginTop: "-20px",
                }}
              >
                <p
                  style={{
                    color: "#fff",
                    fontSize: "30px",
                    margin: "0",
                    textAlign: "center",
                  }}
                >
                  1
                </p>
              </div>
              <h3 style={{ color: "#fff", fontSize: "24px" }}>
                Publicação{" "}
                <FaCheckCircle
                  style={{ color: "#22C55E", verticalAlign: "middle" }}
                />
              </h3>
              <p style={{ fontWeight: "500", color: "#8896AB" }}>
                Veja as publicações de ofertas de
                <br />
                freelancers disponíveis
              </p>
              <img src={ComeStation1} alt="Ilustrative image" />
            </Grid>
            <Grid
              item
              xs={3}
              style={{
                height: "450px",
                backgroundColor: "#333F51",
                margin: "0 20px",
                borderRadius: "6px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  backgroundColor: "#7B2CBF",
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  border: "6px solid #2A3342",
                  marginTop: "-20px",
                }}
              >
                <p
                  style={{
                    color: "#fff",
                    fontSize: "30px",
                    margin: "0",
                    textAlign: "center",
                  }}
                >
                  2
                </p>
              </div>
              <h3 style={{ color: "#fff", fontSize: "24px" }}>
                Procure{" "}
                <FaCheckCircle
                  style={{ color: "#22C55E", verticalAlign: "middle" }}
                />
              </h3>
              <p style={{ fontWeight: "500", color: "#8896AB" }}>
                Procure o serviço que esteja dentro
                <br /> do seu perfil profissional
              </p>
              <img src={ComeStation2} alt="Ilustrative image" />
            </Grid>
            <Grid
              item
              xs={3}
              style={{
                height: "450px",
                backgroundColor: "#333F51",
                margin: "0 20px",
                borderRadius: "6px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  backgroundColor: "#7B2CBF",
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  border: "6px solid #2A3342",
                  marginTop: "-20px",
                }}
              >
                <p
                  style={{
                    color: "#fff",
                    fontSize: "30px",
                    margin: "0",
                    textAlign: "center",
                  }}
                >
                  3
                </p>
              </div>
              <h3 style={{ color: "#fff", fontSize: "24px" }}>
                Contato{" "}
                <FaCheckCircle
                  style={{ color: "#22C55E", verticalAlign: "middle" }}
                />
              </h3>
              <p style={{ fontWeight: "500", color: "#8896AB" }}>
                Contate o empregador para
                <br /> receber mais informações do <br /> serviço.
              </p>
              <img src={ComeStation3} alt="Ilustrative image" />
            </Grid>
          </Grid>
        </Box>
        <Box xs={12}>
          <Grid container xs={12} style={{ padding: "80px" }}>
            <Grid item xs={6}>
              <h3 style={{ fontSize: "42px", color: "#fff" }}>Quem Somos?</h3>
              <p style={{ color: "#fff", fontSize: "28px" }}>
                Somos alunos da Etec Abdias do
                <br /> Nascimento e desenvolvemos esse site para nosso <br />{" "}
                TCC (Trabalho de Conclusão de Curso)
                <br /> e atualmente, algumas das informações
                <br /> oferecidas são fictícias, porém
                <br /> queremos manter continuídade no projeto.
              </p>
            </Grid>
            <Grid item xs={6}>
              <img src={etec} alt="Etec Abdias do Nascimento" />
            </Grid>
          </Grid>
        </Box>
        <Box xs={12} style={{ display: "flex", justifyContent: "center" }}>
          <Grid container xs={12}>
            <Grid item xs={12} style={{ padding: "80px" }}>
              <h1
                style={{
                  color: "#fff",
                  fontWeight: "500",
                  fontSize: "50px",
                  margin: "0px",
                  textAlign: "center",
                }}
              >
                Conheça os fundadores do projeto
              </h1>
              <p
                style={{
                  color: "#8896AB",
                  fontWeight: "300",
                  fontSize: "18px",
                  margin: "0px",
                  textAlign: "center",
                }}
              >
                Altamente profissionais e capazes de administrar seus negócios
                em todos os canais digitais.
              </p>
            </Grid>
            <Grid
              item
              xs={4}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "30px",
              }}
            >
              <img
                src={serafim}
                style={{ width: "100px" }}
                alt="Guilherme Serafim"
              />
              <h3 style={{ color: "#fff", margin: "0", padding: "5px" }}>
                Guilherme Serafim
              </h3>
              <p style={{ color: "#9D4EDD", margin: "0", padding: "5px" }}>
                Administrador
              </p>
              <div>
                <FaFacebookF style={{ color: "#fff", margin: "0 5px" }} />
                <FaTwitter style={{ color: "#fff", margin: "0 5px" }} />
                <FaInstagram style={{ color: "#fff", margin: "0 5px" }} />
              </div>
            </Grid>
            <Grid
              item
              xs={4}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "30px",
              }}
            >
              <img
                src={newana}
                style={{ width: "100px" }}
                alt="Newana Vitória"
              />
              <h3 style={{ color: "#fff", margin: "0", padding: "5px" }}>
                Newana Vitória
              </h3>
              <p style={{ color: "#9D4EDD", margin: "0", padding: "5px" }}>
                Analista
              </p>
              <div>
                <FaFacebookF style={{ color: "#fff", margin: "0 5px" }} />
                <FaTwitter style={{ color: "#fff", margin: "0 5px" }} />
                <FaInstagram style={{ color: "#fff", margin: "0 5px" }} />
              </div>
            </Grid>
            <Grid
              item
              xs={4}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "30px",
              }}
            >
              <img
                src={max}
                style={{ width: "100px" }}
                alt="Maxsuel de Souza"
              />
              <h3 style={{ color: "#fff", margin: "0", padding: "5px" }}>
                Maxsuel de Souza
              </h3>
              <p style={{ color: "#9D4EDD", margin: "0", padding: "5px" }}>
                Designer
              </p>
              <div>
                <FaFacebookF style={{ color: "#fff", margin: "0 5px" }} />
                <FaTwitter style={{ color: "#fff", margin: "0 5px" }} />
                <FaInstagram style={{ color: "#fff", margin: "0 5px" }} />
              </div>
            </Grid>
            <Grid
              item
              xs={4}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "30px",
              }}
            >
              <img
                src={felipe}
                style={{ width: "100px" }}
                alt="Filipe Sottili"
              />
              <h3 style={{ color: "#fff", margin: "0", padding: "5px" }}>
                Filipe Sottili
              </h3>
              <p style={{ color: "#9D4EDD", margin: "0", padding: "5px" }}>
                Desenvolvedor
              </p>
              <div>
                <FaFacebookF style={{ color: "#fff", margin: "0 5px" }} />
                <FaTwitter style={{ color: "#fff", margin: "0 5px" }} />
                <FaInstagram style={{ color: "#fff", margin: "0 5px" }} />
              </div>
            </Grid>
            <Grid
              item
              xs={4}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "30px",
              }}
            >
              <img src={juan} style={{ width: "100px" }} alt="Juan Pablo" />
              <h3 style={{ color: "#fff", margin: "0", padding: "5px" }}>
                Juan Pablo
              </h3>
              <p style={{ color: "#9D4EDD", margin: "0", padding: "5px" }}>
                Desenvolvedor
              </p>
              <div>
                <FaFacebookF style={{ color: "#fff", margin: "0 5px" }} />
                <FaTwitter style={{ color: "#fff", margin: "0 5px" }} />
                <FaInstagram style={{ color: "#fff", margin: "0 5px" }} />
              </div>
            </Grid>
            <Grid
              item
              xs={4}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "30px",
              }}
            >
              <img
                src={jonas}
                style={{ width: "100px" }}
                alt="Jonas Henrique"
              />
              <h3 style={{ color: "#fff", margin: "0", padding: "5px" }}>
                Jonas Henrique
              </h3>
              <p style={{ color: "#9D4EDD", margin: "0", padding: "5px" }}>
                Designer
              </p>
              <div>
                <FaFacebookF style={{ color: "#fff", margin: "0 5px" }} />
                <FaTwitter style={{ color: "#fff", margin: "0 5px" }} />
                <FaInstagram style={{ color: "#fff", margin: "0 5px" }} />
              </div>
            </Grid>
          </Grid>
        </Box>
        <Box xs={12} style={{ paddingTop: "80px" }}>
            <Grid container xs={12} style={{ display: "flex", flexDirection: "column", alignItems: "center", color: "#fff"}}>
                <img src={logo} style={{ width: "80px"}} alt="Logo Lua Station" />
                <Typography style={{ fontFamily: "Poppins" }} variant="subtitle1">Precisa de ajuda?</Typography>
                <Typography style={{ fontFamily: "Poppins" }}  variant="subtitle1">Entre em contato conosco</Typography>
                <Typography style={{ fontFamily: "Poppins", marginBottom: "20px" }}  variant="subtitle1">Email: luastation@gmail.com</Typography>
                <Typography style={{ fontFamily: "Poppins", color: "#8896AB" }} variant="subtitle2"><FaCopyright style={{ verticalAlign: "middle", color: "#8896AB" }} /> 2022 LS. Todos os direitos reservados.</Typography>
            </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Home;

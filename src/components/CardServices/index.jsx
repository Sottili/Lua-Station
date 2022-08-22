import React from "react";

import { CssBaseline, Grid, Typography } from "@mui/material";

import { Box, padding } from "@mui/system";

import moon from "../../imagens/moon.svg";

import { BiDollarCircle } from "react-icons/bi";

import { BsFillCheckCircleFill } from 'react-icons/bs'

const CardServices = () => {
  return (
    <>
      <CssBaseline />
      <Box
        style={{
          width: "400px",
          height: "auto",
          borderRadius: "10px",
          color: "#444",
          backgroundColor: "#fff",
          margin: "20px 20px"
        }}
      >
        <Grid
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h4
            style={{
              fontSize: "24px",
              color: "#000",
              fontWeight: "400"
            }}
          >
            Aplicativo Delivery
          </h4>
          <img
            src={moon}
            style={{
              width: "100px",
            }}
          />
          <Typography
            variant="subtitle1"
            style={{ fontFamily: "Poppins", color: "#000", marginTop: "20px" }}
          >
            Descrição
          </Typography>
          <p
            style={{
              fontSize: "14px",
              textAlign: "justify",
              padding: "0 20px",
              color: "#000",
              margin: "0",
              marginBottom: "30px",
              marginTop: "0px",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
            numquam atque distinctio beatae corrupti quod odit tempora quidem
            debitis? Voluptatum porro dolorem recusandae suscipit rem illum
            mollitia soluta aliquid non. Corporis obcaecati rem doloribus quas
            nulla.
          </p>
          <button
            style={{
              backgroundColor: "#5A189A",
              fontFamily: "Poppins",
              padding: "15px",
              width: "75%",
              border: "none",
              borderRadius: "6px",
              fontSize: "18px",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            Iniciar
          </button>
          <button
            style={{
              backgroundColor: "#979DAC",
              fontFamily: "Poppins",
              padding: "10px",
              width: "75%",
              border: "none",
              borderRadius: "6px",
              fontSize: "18px",
              color: "#fff",
              marginTop: "10px",
              marginBottom: "20px",
              cursor: "pointer",
            }}
          >
            Ver mais
          </button>
        </Grid>
        <div
          style={{
            borderRadius: "2px",
            opacity: "0.7",
            height: "2px",
            widht: "100%",
            backgroundColor: "#EEF0F3",
            margin: "10px 0",
          }}
        ></div>
        <Grid
          item
          style={{
            display: "flex",
            color: "#000",
            width: "100%",
            justifyContent: "center",
            margin: "10px 0",
          }}
        >
          <BiDollarCircle style={{ verticalAlign: "top" }} size={25} />
          R$ 99,99
        </Grid>
        <Grid 
        item 
        style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "20px",
            padding: "10px 10px"
        }}>
            <div style={{
                display: "flex",
                padding: "10px"
            }}>
                <BsFillCheckCircleFill size={25} style={{ color: "#22C55E", marginRight: "10px" }}/>
                Linguagem
            </div>
            <div style={{
                display: "flex",
                padding: "10px"
            }}>
                <BsFillCheckCircleFill size={25} style={{ color: "#22C55E", marginRight: "10px" }}/>
                Tempo
            </div>
        </Grid>
      </Box>
    </>
  );
};

export default CardServices;

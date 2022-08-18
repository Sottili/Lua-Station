import React, { useState } from "react";
import lowChoice from "../../../imagens/lowMoney.svg";
import lgbtChoice from "../../../imagens/lgbtqia.svg";
import blackChoice from "../../../imagens/black.svg";
import womenSymbol from "../../../imagens/womensymbol.svg";
import SimpleNavbar from "../../../components/simple-navbar";
import { CssBaseline } from "@mui/material";
import { Container, Box, height, padding, width } from "@mui/system";

const steps = [
  {
    id: "PERSONAL",
  },
  {
    id: "CLASSE",
  },
  {
    id: "PASSWORD",
  },
];

export default function ProfileRegister() {
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    nameSocial: "",
    email: "",
    date: "",
    cpf: "",
    password: "",
    confirm_password: "",
    checkBox: {
      lowMoney: "",
      lgbt: "",
      women: "",
      black: "",
    },
  });

  function handleNext() {
    setCurrentStep((prevState) => prevState + 1);
  }

  function handlePrev() {
    setCurrentStep((prevState) => prevState  - 1)
  }

  function handleInputChange(event) {
    const { name, value } = event.target;

    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    console.log("Form sent...", formValues);

    setLoading(true);
  }

  return (
    <>
      <CssBaseline />
      <Container
        maxWidth="xl"
        style={{
          padding: 0,
          margin: 0,
          height: "100vh",
          width: "100%",
          background:
            "radial-gradient(circle, rgba(24,25,82,1) 0%, rgba(24,25,82,1) 44%, rgba(13,12,34,1) 100%)",
          color: "#fff",
          maxWidth: "1920px",
        }}
      >
        <SimpleNavbar />
        <Box
          sx={12}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "calc(100% - 10vh)",
          }}
        >
          <h1
            style={{
              fontWeight: "700",
              fontFamily: "Poppins",
              padding: "0",
              margin: "0",
              fontSize: "24px",
            }}
          >
            Finalização
          </h1>
          <p
            style={{
              fontFamily: "Poppins",
              color: "#8896AB",
              padding: "0",
              margin: "0",
            }}
          >
            Venha conosco nessa jornada!
          </p>
          <form className="steps-form" onSubmit={handleSubmit}>
            <div className="fields-container">
              {steps[currentStep].id === "PERSONAL" && (
                <div className="fields">
                  <div className="field">
                    <h3
                      style={{
                        margin: "0",
                        padding: "0",
                        fontWeight: "300",
                        fontSize: "16px",
                        fontFamily: "Poppins",
                      }}
                    >
                      Nome
                    </h3>
                    <input
                      type="text"
                      name="name"
                      onChange={handleInputChange}
                      value={formValues.name}
                      style={{
                        border: "1px solid #D5DAE1",
                        borderRadius: "8px",
                        padding: "10px 14px",
                        width: "300px",
                        fontFamily: "Poppins",
                      }}
                    />
                  </div>
                  <div className="field">
                    <h3
                      style={{
                        margin: "0",
                        padding: "0",
                        fontWeight: "300",
                        fontSize: "16px",
                        fontFamily: "Poppins",
                      }}
                    >
                      Nome Social
                    </h3>
                    <input
                      type="text"
                      name="nameSocial"
                      onChange={handleInputChange}
                      value={formValues.nameSocial}
                      style={{
                        border: "1px solid #D5DAE1",
                        borderRadius: "8px",
                        padding: "10px 14px",
                        width: "300px",
                        fontFamily: "Poppins",
                      }}
                    />
                  </div>
                  <div className="field">
                    <h3
                      style={{
                        margin: "0",
                        padding: "0",
                        fontWeight: "300",
                        fontSize: "16px",
                        fontFamily: "Poppins",
                      }}
                    >
                      Email
                    </h3>
                    <input
                      type="text"
                      name="email"
                      onChange={handleInputChange}
                      value={formValues.email}
                      style={{
                        border: "1px solid #D5DAE1",
                        borderRadius: "8px",
                        padding: "10px 14px",
                        width: "300px",
                        fontFamily: "Poppins",
                      }}
                    />
                  </div>
                  <div className="field">
                    <h3
                      style={{
                        margin: "0",
                        padding: "0",
                        fontWeight: "300",
                        fontSize: "16px",
                        fontFamily: "Poppins",
                      }}
                    >
                      Data de Nascimento
                    </h3>
                    <input
                      type="date"
                      name="email"
                      onChange={handleInputChange}
                      value={formValues.date}
                      style={{
                        border: "1px solid #D5DAE1",
                        borderRadius: "8px",
                        padding: "10px 14px",
                        width: "300px",
                        fontFamily: "Poppins",
                      }}
                    />
                  </div>
                  <div className="field">
                    <h3
                      style={{
                        margin: "0",
                        padding: "0",
                        fontWeight: "300",
                        fontSize: "16px",
                        fontFamily: "Poppins",
                      }}
                    >
                      CPF
                    </h3>
                    <input
                      type="text"
                      name="cpf"
                      onChange={handleInputChange}
                      value={formValues.cpf}
                      style={{
                        border: "1px solid #D5DAE1",
                        borderRadius: "8px",
                        padding: "10px 14px",
                        width: "300px",
                        fontFamily: "Poppins",
                      }}
                    />
                  </div>
                </div>
              )}
              {steps[currentStep].id === "CLASSE" && (
            <div style={{
                backgroundColor: "#fff",
                padding: "30px 10px",
                color: "#444",
                borderRadius: "8px"
            }}>
                <div className="fields">
                  <div className="field" style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center"
                  }}>
                    <input
                      type="checkbox"
                      name="lowMoney"
                      onChange={handleInputChange}
                      value={formValues.checkBox.lowMoney}
                    />
                      <img src={lowChoice} style={{ margin: "5px 10px"}}/>
                    <p style={{ fontFamily: "Poppins", margin: "2px" }}>Baixa Renda</p>
                      
                  </div>
                  <div className="field" style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center"
                  }}>
                    <input
                      type="checkbox"
                      name="lgbt"
                      onChange={handleInputChange}
                      value={formValues.checkBox.lgbt}
                    />
                    
                      <img src={lgbtChoice} style={{ margin: "5px 10px"}} />
                      <p style={{ fontFamily: "Poppins", margin: "0 2px" }}>LGBTQIA+</p>
                    
                  </div>
                  <div className="field" style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center"
                  }}>
                    <input
                      type="checkbox"
                      name="white"
                      onChange={handleInputChange}
                      value={formValues.checkBox.black}
                    />
                   
                      <img src={blackChoice} style={{ margin: "5px 10px"}}/>
                      <p style={{ fontFamily: "Poppins", margin: "0 2px" }}>Negro(a)</p>
                    
                  </div>
                  <div className="field" style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center"
                  }}>
                    <input
                      type="checkbox"
                      name="white"
                      onChange={handleInputChange}
                      value={formValues.checkBox.women}
                    />
                    
                      <img src={womenSymbol} style={{ margin: "5px 10px"}} />
                     <p style={{ fontFamily: "Poppins", margin: "0 2px" }}>Mulher</p> 
                   
                  </div>
                </div>
            </div>
              )}

              {steps[currentStep].id === "PASSWORD" && (
                <div className="fields">
                  <div className="field">
                    <h3
                      style={{
                        margin: "0",
                        padding: "0",
                        fontWeight: "500",
                        fontSize: "16px",
                        fontFamily: "Poppins",
                      }}
                    >
                      Senha
                    </h3>
                    <input
                      type="password"
                      placeholder="Digite sua senha"
                      name="password"
                      onChange={handleInputChange}
                      value={formValues.password}
                    />
                  </div>
                  <div className="field">
                    <h3
                      style={{
                        margin: "0",
                        padding: "0",
                        fontWeight: "500",
                        fontSize: "16px",
                        fontFamily: "Poppins",
                      }}
                    >
                      Confirme sua senha
                    </h3>
                    <input
                      type="password"
                      placeholder="Confirme sua senha"
                      name="confirm_password"
                      onChange={handleInputChange}
                      value={formValues.confirm_password}
                    />
                  </div>
                </div>
              )}
              {currentStep < steps.length - 1 && (
                <>
              <div style={{
                display: "flex",
                flexDirection: "column"
              }}>
                <button
                  className="button next"
                  type="button"
                  onClick={handlePrev}
                  style={{
                    width: "300px",
                    padding: "10px",
                    marginTop: "10px",
                    borderRadius: "8px",
                    backgroundColor: "#5A189A",
                    border: "none",
                    color: "#fff",
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    cursor: "pointer"
                  }}
                >
                  Voltar
                </button>
                <button
                className="button prev"
                type="button"
                onClick={handleNext}
                style={{
                  width: "300px",
                  padding: "10px",
                  marginTop: "8px",
                  borderRadius: "8px",
                  backgroundColor: "#5A189A",
                  border: "none",
                  color: "#fff",
                  fontFamily: "Poppins",
                  fontSize: "16px",
                  cursor: "pointer"
                }}
              >
                Proximo
              </button>

              </div>
                </>
              )}

              {currentStep === steps.length - 1 && (
                <div style={{
                    display: "flex",
                    flexDirection: "column"
                }}>
                <button className="button submit" type="submit" style={{
                    width: "300px",
                    padding: "10px",
                    marginTop: "10px",
                    borderRadius: "8px",
                    backgroundColor: "#5A189A",
                    border: "none",
                    color: "#fff",
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    cursor: "pointer"
                  }}>
                  Enviar
                </button>
                <button
                className="button next"
                type="button"
                onClick={handlePrev}
                style={{
                  width: "300px",
                  padding: "10px",
                  marginTop: "10px",
                  borderRadius: "8px",
                  backgroundColor: "#5A189A",
                  border: "none",
                  color: "#fff",
                  fontFamily: "Poppins",
                  fontSize: "16px",
                  cursor: "pointer"
                }}
              >
                Voltar
              </button>
            </div>
              )}

              {loading && <h1 className="loader">Enviando...</h1>}
            </div>
          </form>
        </Box>
      </Container>
    </>
  );
}

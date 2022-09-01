import {Link} from 'react-router-dom';

import {BsArrowLeftShort} from 'react-icons/bs'

import { Container, Box, Grid, CssBaseline, Avatar } from '@mui/material';

import creditChoice from "../../imagens/creditChoice.svg"
import debitChoice from "../../imagens/debitChoice.svg"
import pixChoice from "../../imagens/pixChoice.svg"

import { useState } from 'react';

import React from 'react';

import NavbarFreelas from '../../components/home-navbar';

import ilustration from '../../imagens/ilustration.svg'

import ilustration2 from '../../imagens/Startup_PNG 1.png'

import meteor from '../../imagens/meteor.svg'
import { width } from '@mui/system';

const CreateServices = () => {

    const steps = [
        {
          id: "primaryStep",
        },
        {
          id: "secondStep",
        },
        {
          id: "thirdStep",
        },
        {
          id: "fourStep",
        },
      ];

  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    description: "",
    descriptionProject: "",
    deadline: {
        meteor: "",
        star: "",
        moon: ""
    },
    checkBox: {
      creditChoice: "",
      debitChoice: "",
      pixChoice: "",
    },
  });

  function handleNext() {
    setCurrentStep((prevState) => prevState + 1);
  }

  function handlePrev() {
    setCurrentStep((prevState) => prevState - 1);
  }

  function handleInputChange(event) {
    const { name, value } = event.target;

    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

    function handleSubmit() {
    setFormValues(formValues);
  }
    return ( 
        <>
            <CssBaseline/>
            <NavbarFreelas/>
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
                 height: "calc(100vh - 70px)",
             }}>
                <Box xs={12} style={{
                    position: "relative",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Link to="/" style={{
                    position: "absolute",
                    padding: "30px",
                    left: "0",
                    top: "0",
                    textDecoration: "none",
                    color: "#fff"
                }}>
                  <p>
                    <BsArrowLeftShort style={{ verticalAlign: "middle" }} />
                    Voltar
                  </p>
                </Link>
            <Grid container style={{
              height: "60%"
            }}>
            <form className="steps-form" onSubmit={handleSubmit} style={{
                width: "100%",
            }}>
            <div className="fields-container" style={{
                display: "flex",
                position: "relative"
            }}>
            <div style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "absolute",
              left: "50%",
              right: "50%",
            }}>
              {steps[currentStep].id === "primaryStep" && (
                <>
                <div style={{
                  display: "flex",
                }}>
                <img src={ilustration} style={{
                    height: "420px",
                    position: "absolute",
                    right: "0",
                    marginRight: "250px",
                    marginTop: "20px"
                }} />
                <div className="fields">
                <h3 style={{
                    color: "#fff",
                    fontSize: "32px",
                    fontWeight: "300",
                    margin: "0",
                    marginBottom: "20px",
                    width: "17rem"
                }}>Crie seu projeto</h3>
                  <div className="field" style={{ margin: "10px 0", display: "flex", flexDirection: "column" }}>
                    <h3
                      style={{
                        margin: "0",
                        padding: "0",
                        fontWeight: "300",
                        fontSize: "16px",
                        fontFamily: "Poppins",
                        color: "#fff"
                      }}
                    >
                      Nome do projeto
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
                        width: "400px",
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
                        color: "#fff"
                      }}
                    >
                      Descrição da empresa
                    </h3>
                    <textarea
                      rows={10}
                      type="text"
                      name="nameSocial"
                      onChange={handleInputChange}
                      value={formValues.description}
                      style={{
                        border: "1px solid #D5DAE1",
                        borderRadius: "8px",
                        padding: "10px 14px",
                        width: "400px",
                        fontFamily: "Poppins",
                      }}
                    />
                  </div>
                </div>
                </div>
                </>
              )}
              {steps[currentStep].id === "secondStep" && (
                <>
                <div style={{
                  display: "flex"
                }}>
                  <img src={ilustration2} style={{
                    height: "420px",
                    position: "absolute",
                    right: "0",
                    marginRight: "250px",
                    marginTop: "20px"
                }} />
                <div
                  style={{
                    padding: "30px 10px",
                    color: "#444",
                    borderRadius: "8px",
                    marginTop: "-200px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <h3 style={{fontSize: "32px", width: "17rem", color: "#fff", fontWeight: "300", margin: "0", marginTop: "20px"}}>{formValues.name}</h3>
                <div className="field">
                    <h3
                      style={{
                        margin: "0",
                        padding: "0",
                        fontWeight: "300",
                        fontSize: "16px",
                        fontFamily: "Poppins",
                        color: "#fff"
                      }}
                    >
                      Prazo
                    </h3>
                    <select style={{
                      padding: "5px 100px",
                      borderRadius: "5px",
                      border: "none"
                    }} name="deadline">
                            <option value={formValues.deadline.meteor}>
                                 1-7 Dias
                            </option>
                            <option value={formValues.deadline.star}>
                                7-14 Dias
                            </option>
                            <option value={formValues.deadline.moon}>
                              15-30 Dias
                            </option>
                    </select>
                </div>
                <div className="field">
                    <h3
                      style={{
                        margin: "0",
                        padding: "0",
                        fontWeight: "300",
                        fontSize: "16px",
                        fontFamily: "Poppins",
                        color: "#fff"
                      }}
                    >
                      Descrição do projeto
                    </h3>
                    <textarea
                      rows={10}
                      type="text"
                      name="nameSocial"
                      onChange={handleInputChange}
                      value={formValues.descriptionProject}
                      style={{
                        border: "1px solid #D5DAE1",
                        borderRadius: "8px",
                        padding: "10px 14px",
                        width: "400px",
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
                        color: "#fff"
                      }}
                    >
                      Preço
                    </h3>
                    <input
                      type="text"
                      name="name"
                      onChange={handleInputChange}
                      value={formValues.price}
                      style={{
                        border: "1px solid #D5DAE1",
                        borderRadius: "8px",
                        padding: "10px 14px",
                        width: "400px",
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
                        color: "#fff"
                      }}
                    >
                      Plataforma
                    </h3>
                    <input
                      type="text"
                      name="name"
                      onChange={handleInputChange}
                      value={formValues.price}
                      style={{
                        border: "1px solid #D5DAE1",
                        borderRadius: "8px",
                        padding: "10px 14px",
                        width: "400px",
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
                        color: "#fff"
                      }}
                    >
                      Prazo na plataforma
                    </h3>
                    <input
                      type="text"
                      name="name"
                      onChange={handleInputChange}
                      value={formValues.price}
                      style={{
                        border: "1px solid #D5DAE1",
                        borderRadius: "8px",
                        padding: "10px 14px",
                        width: "400px",
                        fontFamily: "Poppins",
                      }}
                    />
                </div>
                  </div>
                </div>
                </>
              )}
              {steps[currentStep].id === "thirdStep" && (
                <>
                  <h3 style={{fontSize: "32px", width: "12rem", fontWeight: "600", color: "#fff", textAlign: "center"}}>Pagamento</h3>
                <div
                  style={{
                    padding: "20px",
                    color: "#444",
                    borderRadius: "8px",
                    margin: "-35px",
                    textAlign: "left"
                  }}
                >
                  <h4 style={{
                    fontSize: "16px",
                    fontWeight: "300",
                    width: "300px",
                    color:"#fff"
                  }}>Forma de Pagamento</h4>
                </div>
                <div className="fields" style={{
                  width: "300px",
                  backgroundColor: "#fff",
                  padding: "10px 10px",
                  borderRadius: "8px"
                }}>
                    <div
                      className="field"
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <input
                        type="checkbox"
                        name="lowMoney"
                        onChange={handleInputChange}
                        value={formValues.checkBox.creditCard}
                        id="customCheckboxProfile"
                      />
                      <img src={creditChoice} style={{ margin: "5px 10px" }} />
                      <p style={{ fontFamily: "Poppins", margin: "2px" }}>
                        Cartão de Crédito
                      </p>
                    </div>
                    <hr />
                    <div
                      className="field"
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <input
                        type="checkbox"
                        name="lgbt"
                        onChange={handleInputChange}
                        value={formValues.checkBox.debitCard}
                        id="customCheckboxProfile"
                      />

                      <img src={debitChoice} style={{ margin: "5px 10px" }} />
                      <p style={{ fontFamily: "Poppins", margin: "0 2px" }}>
                        Cartão de Débito
                      </p>
                    </div>
                    <hr />
                    <div
                      className="field"
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <input
                        type="checkbox"
                        name="white"
                        onChange={handleInputChange}
                        value={formValues.checkBox.pix}
                        id="customCheckboxProfile"
                      />

                      <img src={pixChoice} style={{ margin: "5px 10px" }} />
                      <p style={{ fontFamily: "Poppins", margin: "0 2px" }}>
                        Pix
                      </p>
                    </div>
                  </div>
                </>
              )}
              {steps[currentStep].id === "fourStep" && (
                <>
                <div
                  style={{
                    padding: "20px",
                    color: "#444",
                    borderRadius: "8px",
                    margin: "-35px",
                    textAlign: "left",
                    width: "100vh"
                  }}
                >
                  <h3 style={{fontSize: "32px", width: "", fontWeight: "600", color: "#fff", textAlign: "center"}}>Projeto adicionado com sucesso!</h3>
                  <h3 style={{fontSize: "32px", width: "", fontWeight: "600", color: "#fff", textAlign: "center"}}>Agora Aguarde um Freelancer aceitar o trabalho!</h3>
                  <h4 style={{
                    fontSize: "16px",
                    fontWeight: "300",
                    width: "300px",
                    color:"#fff"
                  }}>Forma de Pagamento</h4>
                </div>
                </>
              )}
              {currentStep < steps.length - 1 && (
                <>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
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
                        cursor: "pointer",
                      }}
                    >
                      Proximo
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
                      cursor: "pointer",
                    }}
                  >
                    Voltar
                  </button>
                  </div>
                </>
              )}
              {currentStep === steps.length - 1 && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <button
                    className="button submit"
                    type="submit"
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
                      cursor: "pointer",
                    }}
                  >
                    Finalizar
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
                      cursor: "pointer",
                    }}
                  >
                    Voltar
                  </button>
                </div>
              )}
            </div>
            </div>
          </form>
                </Grid>
                </Box>
            </Container>
        </>
     );
}
 
export default CreateServices;
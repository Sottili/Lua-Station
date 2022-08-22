import './index.css'

import meteor from '../../imagens/meteor.svg'
import moon from '../../imagens/moon.svg'
import star from '../../imagens/star.svg'

import { Container, CssBaseline, Box, Grid, Avatar } from "@mui/material";
import NavbarFreelas from "../../components/home-navbar";
import Astronaut from '../../imagens/AstronautNavbarIcon.png'

const ProfileFreelancersPage = () => {
  return (
    <>
    <NavbarFreelas />
    <Container
        className="container-freelancers"
        maxWidth="xl"
        style={{
          maxWidth: "1920px",
          fontFamily: "Poppins",
          overflowX: "hidden",
          padding: "0",
          height: "calc(100vh - 70px)",
          flexDirection: "column",
          display: "flex",
          justifyContent: "center"
        }}
        >
        <CssBaseline />
        <Box sx={12}>
          <Grid container xs={12}>
            <Grid xs={6} style={{ display: "flex", alignItems: "center", flexDirection: "column"}}>
              <Avatar src={Astronaut} style={{ width: "200px", height: "200px", marginBottom: "30px"}}/>
              <div style={{ backgroundColor: "#3C096C", width: "70%", height: "100px", display: "flex", alignItems: "center", justifyContent: "center", borderTopRightRadius: "10px", borderTopLeftRadius: "10px" }}>
                <h3 style={{ fontFamily: "Poppins", color: "#fff", fontWeight: "500"}}>Serviços concluidos</h3>
              </div>
              <div  style={{ backgroundColor: "#240046", width: "70%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", }}>
                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "#3C096C",
                  borderRadius: "30px",
                  padding: "0 30px",
                  margin: "0 30px"
                }}>
                  <img src={meteor} alt="Meteoro" style={{ margin: "10px 0", height: "90px" }} />
                  <p style={{color: "#fff"}}>Meteoros: 7</p>
                </div>
                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "#3C096C",
                  borderRadius: "30px",
                  padding: "0 30px",
                  margin: "0 30px"
                }}>
                  <img src={star} alt="Estrela" style={{ margin: "10px 0", height: "90px" }} />
                  <p style={{color: "#fff"}}>Estrela: 14</p>
                </div>
                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "#3C096C",
                  borderRadius: "30px",
                  padding: "0 30px",
                  margin: "0 30px"
                }}>
                  <img src={moon} alt="Moon" style={{ margin: "10px 0", height: "90px" }} />
                  <p style={{color: "#fff"}}>Luas: 21</p>
                </div>
              </div>
            </Grid>
            <Grid xs={6} style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
              <div style={{ backgroundColor: "#3C096C", width: "60%", height: "80px", display: "flex", alignItems: "center", justifyContent: "center", borderTopRightRadius: "10px", borderTopLeftRadius: "10px" }}>
                <h3 style={{ fontFamily: "Poppins", color: "#fff", fontSize: "20px", fontWeight: "300"}}>Descrição</h3>
              </div>
              <div  style={{ backgroundColor: "#10002B", width: "60%", height: "100%", display: "flex", color: "#fff", flexDirection: "column" }}>
                <div style={{ padding: "30px 30px", fontSize: "18px"}}>
                  <p>Nome</p>
                  <p style={{ margin: "0 20px"}}>Juan Pablo</p>
                  <p>Email</p>
                  <p style={{ margin: "0 20px"}}>lorem@lorem.com</p>
                  <p>CPF</p>
                  <p style={{ margin: "0 20px"}}>999.999.999-10</p>
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default ProfileFreelancersPage;

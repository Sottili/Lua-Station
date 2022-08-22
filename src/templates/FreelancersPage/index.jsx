import React from 'react';
import {Link} from 'react-router-dom';

import './index.css'

import NavbarFreelas from '../../components/home-navbar';

import { BsArrowLeftShort } from 'react-icons/bs';

import { Container, CssBaseline, Box, Grid, Avatar } from "@mui/material";

import iconFilter from '../../imagens/IconFilter.svg'
import CardFreelancer from '../../components/CardFreelancer';

const FreelancersPage = () => {
    return ( 
        <>
        <CssBaseline />
        <NavbarFreelas/>
        <Container 
          style={{
            maxWidth: "1920px",
            fontFamily: "Poppins",
            overflowX: "hidden",
            padding: "0",
            height: "calc(100vh - 70px)",
            background:
            "radial-gradient(circle, rgba(24,25,82,1) 0%, rgba(24,25,82,1) 44%, rgba(13,12,34,1) 100%)",
          }}>
            <Box sx={12}>
            <Link style={{width: "100%", height: "150px", color: "#fff", textDecoration: "none"}} to="/">
                  <p style={{margin: "30px 30px",}}>
                    <BsArrowLeftShort style={{ verticalAlign: "middle", marginRight: "5px" }} size={30} />
                    Voltar
                  </p>
            </Link>
            <Grid style={{
                display: "flex",
                padding: "30px"
            }}>
                <Grid style={{
                    backgroundColor: "#333F51",
                    width: "300px",
                    height: "250px",
                    borderRadius: "15px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}>
                    <div style={{ display: "flex"}}>
                        <img src={iconFilter} />
                        <p style={{ color: "#fff"}}>Filtros</p>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", color: "#fff"}}>
                        <div className="checkboxes">
                            <input type="checkbox" />
                            1-5
                        </div>
                        <div>
                            <input type="checkbox" />
                            5-10
                        </div>
                        <div>
                            <input type="checkbox" />
                            10-20
                        </div>
                        <div>
                            <input type="checkbox" />
                            20-50
                        </div>
                    </div>
                </Grid>
                <Grid style={{ padding: "0 20px", display: "flex", flexWrap: "wrap"}}>
                        <CardFreelancer/>
                        <CardFreelancer/>
                        <CardFreelancer/>
                        <CardFreelancer/>
                        <CardFreelancer/>
                </Grid>
            </Grid>
            </Box>
        </Container>
        </>
     );
}
 
export default FreelancersPage;
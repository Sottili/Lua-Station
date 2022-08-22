import { Avatar } from '@mui/material';
import { Box } from '@mui/system';

import Astronaut from '../../imagens/AstronautNavbarIcon.png'

import {FaHeart} from 'react-icons/fa'

import React from 'react';

const CardFreelancer = () => {
    return ( 
        <>
            <Box style={{
                width: "300px",
                backgroundColor: "#fff",
                position: "relative",
                borderRadius: "10px",
                margin: "20px 20px"
            }}>
                <button style={{ border: "none", background: "transparent", position: "absolute", right: "0"}}>
                    <FaHeart size={20} style={{ color: "#444"}}/>
                </button>
                <div style={{ display: "flex", padding: "20px 20px"}}>
                    <Avatar src={Astronaut} style={{ height: "100px", width: "100px"}} />
                    <p style={{ fontSize: "22px"}}>Juan Pablo</p>
                </div>
                <div style={{ padding: "20px", width: "100%", display: "flex", justifyContent: "center"}}>
                <button style={{ padding: "20px 100px", backgroundColor: "#5A189A", color: "#fff", border: "none", fontFamily: "Poppins", borderRadius: "10px" }}>
                    Ver mais
                </button>
                </div>
            </Box>
        </>
     );
}
 
export default CardFreelancer;
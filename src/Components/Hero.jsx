import React, { forwardRef } from "react";
import { Box, Typography } from '@mui/material';
import '../App.css';
import TypewriterComponent from "../Assets/TypewriterComponenet";
import Resume from "../Assets/Resume";
import LinkedIn from "../Assets/LinkedIn";
import GitHub from "../Assets/GitHub";

const Hero = forwardRef((props, ref) => {
    return (
      <div className="mainContainer" ref={ref}>
        <Box
          sx={{
            height: "100vh",
            width: "100vw",
            backgroundColor: "#8EC5FC",
            backgroundImage: "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box 
            sx={{
                pl: '8.7rem',
                pb: '6.25rem',
                maxWidth: '74rem',
                minWidth: '74rem',
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontWeight: "bold",
                letterSpacing: 6,
              }}
            >
              Hi, I'm
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontWeight: "bold",
                letterSpacing: 6,
              }}
            >
              Lawrence Lin
            </Typography>
            <Box>
            <Typography
              variant="h1"
              sx={{
                fontWeight: "bold",
                letterSpacing: 6,
              }}
            >
                <TypewriterComponent />
            </Typography>
            </Box>
            <Box
              sx={{
                height: '70px',
                p: '10px'
              }}
            >
            <Resume />
            <LinkedIn />
            <GitHub />
            </Box>
          </Box>
          <Box sx={{
            mb: '6rem',
            width: '423px',
            height: '629px',
            boxShadow: "0 2px 12px 2px #B669FF",
            overflow: 'hidden',
          }}>
          <img src="https://i.gyazo.com/69e51dddfa95f9396db9433410cc667d.jpg" alt="me standing"/>
          </Box>
        </Box>
      </div>
    );
});

export default Hero;
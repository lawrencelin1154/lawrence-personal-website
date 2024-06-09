import React from "react";
import Paper from '@mui/material/Paper';
import { Button, Box } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import HomeIcon from '@mui/icons-material/Home';
import FaceIcon from '@mui/icons-material/Face';
import ArticleIcon from '@mui/icons-material/Article';
import CallIcon from '@mui/icons-material/Call';
import '../App.css';

function NavBar({ scrollToSection, heroRef, aboutRef, experienceRef, contactRef }) {

    return (
      <Paper
        square
        elevation={3}
        style={{
          height: "3.75rem",
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1000,
        }}
      >
        <Box
        style={{
            display: 'flex',
            alignItems: 'center',
        }}
        >
          <Avatar sx={{ m:1, mr: 0 }} src="https://i.gyazo.com/afc79257d0ca08a5e005ebf213192e46.jpg"/>
          <Button
            onClick={() => scrollToSection(heroRef)}
            variant="outlined"
            startIcon={<HomeIcon />}
            style={{
              marginTop: ".2rem",
              marginLeft: "2.434rem",
            }}
          >
            Home
          </Button>
          <Button
            onClick={() => scrollToSection(aboutRef)}
            variant="outlined"
            startIcon={<FaceIcon />}
            style={{
              marginTop: ".2rem",
              marginLeft: "2.434rem",
            }}
          >
            About Me
          </Button>
          <Button
            onClick={() => scrollToSection(experienceRef)}
            variant="outlined"
            startIcon={<ArticleIcon />}
            style={{
              marginTop: ".2rem",
              marginLeft: "2.434rem",
            }}
          >
            Experience
          </Button>
          <Button
            onClick={() => scrollToSection(contactRef)}
            variant="outlined"
            startIcon={<CallIcon />}
            style={{
              marginTop: ".2rem",
              marginLeft: "2.434rem",
            }}
          >
            Contact
          </Button>
        </Box>
      </Paper>
    );
}

export default NavBar;
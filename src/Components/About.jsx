import React, { forwardRef, useEffect } from "react";
import { Box, Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";
import '../App.css';

const About = forwardRef((props, ref) => {

    useEffect(() => {
        const numStars = 25;
        const boxElement = document.querySelector('.aboutBG');
        const existingStars = boxElement.querySelectorAll('.star').length;
      
        for (let i = existingStars; i < numStars; i++) {
          const star = document.createElement('div');
          star.className = 'star';
          star.style.top = `${Math.random() * 100}vh`;
          star.style.left = `${Math.random() * 100}vw`;
          star.style.animationDuration = `${Math.random() * 10 + 5}s, ${Math.random() * 2 + 1}s`;
          boxElement.appendChild(star);
        }
      }, []);

      const languages = [
        { name: 'Java', image: 'https://i.gyazo.com/1e1ba20cfa4a4c86d66437632e35df2f.png' },
        { name: 'JavaScript', image: 'https://i.gyazo.com/1bc75cfc28fa3132c3409ef3e02e73c5.png' },
        { name: 'Python', image: 'https://i.gyazo.com/6606c48fbf49fc629449aa11170b8c1c.png' },
        { name: 'HTML/CSS', image: 'https://i.gyazo.com/1c236ae02ee7c0ca8057cc1832d750f4.png' },
        { name: 'React', image: 'https://i.gyazo.com/be3668f7ecbe460befcb22b9a8a87792.png'},
        { name: 'Material UI', image: 'https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/6aecc665-9f30-4dc7-bacc-880d8e66c7bb.png?auto=format%2Ccompress&fit=max&w=128&q=75&ch=Width%2CDPR'},
      ];

      const skills = [
        { name: 'JUnit Test', image: 'https://i.gyazo.com/d8f0cd7941133733b854e434670e93cc.png'},
        { name: 'Git', image: 'https://i.gyazo.com/279884a10713f864dc2c6c9e4ea666e2.png'},
        { name: 'Agile', image: 'https://i.gyazo.com/2538ae43c61340f9cdd73fca5164faec.png'},
        { name: 'Jira', image: 'https://i.gyazo.com/25234aa88bdbf6ea100745365ed924b9.png'},
        { name: 'VSCode', image: 'https://code.visualstudio.com/assets/images/code-stable.png'},
        { name: 'Eclipse', image: 'https://cdn.icon-icons.com/icons2/1381/PNG/512/eclipse_94656.png'},
      ]

    return (
      <div className="mainContainer" ref={ref}>
        <Box
          className="aboutBG"
          sx={{
            position: "relative",
            overflow: "hidden",
            width: "100%",
            height: "100vh",
          }}
        >
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Box
              sx={{
                pt: "8rem",
                pl: "10rem",
              }}
            >
              <Typography variant="h1" color="#FBF9EF">
                About
              </Typography>
              <Typography variant="h1" color="#FBF9EF">
                Me
              </Typography>
              <Typography
                variant="h3"
                color="#FBF9EF"
                sx={{
                  pt: "4rem",
                }}
              >
                Student @
              </Typography>
              <Typography variant="h4" color="#FBF9EF">
                University of Maryland
              </Typography>
              <Typography variant="h5" color="#FBF9EF">
                Major: Computer Science
              </Typography>
              <Box
                sx={{
                  pt: "1rem",
                }}
              >
                <img
                  src="https://seeklogo.com/images/U/university-of-maryland-logo-26CF28182C-seeklogo.com.png"
                  alt="UMD logo"
                />
              </Box>
            </Box>
            <Box
              sx={{
                pt: "8rem",
                pl: "10rem",
                maxWidth: "73.75rem"
              }}
            >
              <Typography variant="h3" color="#FBF9EF">
                Languages/Frameworks/Libraries
              </Typography>
              <Grid container spacing={4} sx={{ mt: 2 }}>
                {languages.map((language) => (
                  <Grid item xs={12} sm={6} md={3.5} key={language.name}>
                    <Card
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <CardMedia
                        component="img"
                        sx={{ width: 60, height: 60, margin: 2 }}
                        image={language.image}
                        alt={language.name}
                      />
                      <CardContent>
                        <Typography variant="h6">{language.name}</Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
              <Typography variant="h3" color="#FBF9EF"
              sx={{
                mt: '3rem'
              }}
              >
                Skills/Knowledge/Technologies
              </Typography>
              <Grid container spacing={4} sx={{ mt: 2 }}>
                {skills.map((skill) => (
                  <Grid item xs={12} sm={6} md={3.5} key={skill.name}>
                    <Card
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <CardMedia
                        component="img"
                        sx={{ width: 60, height: 60, margin: 2 }}
                        image={skill.image}
                        alt={skill.name}
                      />
                      <CardContent>
                        <Typography variant="h6">{skill.name}</Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Box>
      </div>
    );
});

export default About;
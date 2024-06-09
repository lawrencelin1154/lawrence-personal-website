import React, { forwardRef } from "react";
import { Box, Paper, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import '../App.css';

const Experience = forwardRef((props, ref) => {
  const items = [
    {
      name: "AI Software Engineer Intern",
      company: "Outlier.AI Inc; San Francisco, CA",
      period: "May 2024 - Present",
      description: [
        "- Trained AI models using supervised learning by evaluating and editing over 100+ code prompts in Python, JavaScript, and Java",
        "- Provided ideal output examples for 50+ code responses by AI and highlighted issues to improve AI model performance by giving detailed justification and grading for code responses",
        "- Collaborated with the development team to refine and enhance AI algorithms by reducing variance, bias, and error"
      ],
      image: "https://i.gyazo.com/eacaee1df6cb2acc65390bae3283324e.png"
    },
    {
      name: "Software Engineer Intern",
      company: "Cloud Native Compliance Maven; Sterling, VA",
      period: "Mar 2024 - June 2024",
      description: [
        "- Developed automation solutions, streamlined documentation management, and monitoring for Governance Risk Compliance tool (GRC)",
        "- Implemented dynamic UX/UI features for a front-end GRC management tool using React and MUI, resulting in a 20% increase in web traffic and user engagement",
        "- Collaborated with team members to troubleshoot and debug 95% of reported issues within a week of deployment, ensuring a seamless user experience while operating on an agile methodology"
      ],
      image: "https://i.gyazo.com/a602f1526dab2bbe7bf4315a8cb5f005.png"
    },
    {
      name: "Assistant Lead Support Technician",
      company: "University of Maryland: Department of IT; College Park, MD",
      period: "Aug 2023 - Present",
      description: [
        "- Provide technical support to 100+ university faculty and students daily, resolving both hardware and software issues",
        "- Maintain a high ticket resolution rate by effectively addressing software-related issues through the use of the command line prompts, Apple GSX diagnostics tool, and bash terminal",
        "- Consistently achieving a 96% first-contact resolution rate, reducing downtime, and enhancing user productivity"
      ],
      image: "https://i.gyazo.com/6e1c81af9d495c9ed8176538775e8c94.png" 
    },
    {
      name: "Technology Consultant",
      company: "Target; Fairfax, VA",
      period: "June 2022 - Aug 2023",
      description: [
        "- Revitalized Target’s technology department as a proactive Technology Consultant, collaborating with a small team of 4 associates",
        "- Drove a 15% increase in technology sales, contributing to the tech department’s ability to generate over $20k in revenue daily through innovative strategies, organization, and efficient operations",
        "- Helped lead backroom technology storage system and organization project to streamline customer order processing allowing for a 25% increase in outbound shipments"
      ],
      image: "https://i.gyazo.com/5cc9709ba13abdb295fb2d25eea0b9e6.png"
    }
  ];

  return (
    <div className="mainContainer" ref={ref}>
        <div className="animatedBackground"></div>
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-start', 
        pt: "8rem",
        pl: "6rem",
      }}
    >
      <Box
        sx={{
          maxWidth: '43.75rem',
          flex: 1, 
          mr: 2,
        }}
      >
        <Carousel>
          {items.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </Carousel>
      </Box>
      <iframe 
        title="resume" 
        src="https://drive.google.com/file/d/1yldTqbRYmZ85u9xVyMsNbPFwd2MxsaJM/preview" 
        width="1000px" 
        height="800px" 
        style={{ 
            border: 'none',
            boxShadow: '0px 0px 13px 1px black'
        }}
      />
    </Box>
  </div>
  );

  function Item({ item }) {
    return (
      <Paper 
      square={false}
      variant="elevation"
      elevation={10}
      sx={{ 
        p: 2, 
        m: 3,
        height: '20.5rem' ,
      }}>
        <Box
        sx={{
            display: 'flex',

        }}
        >
        {item.image && <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px', paddingRight: '1rem', objectFit: 'contain' }} />}
        <Box>
        <Typography variant="h5" component="h2">{item.name}</Typography>
        <Typography variant="subtitle1" color="textSecondary">{item.company}</Typography>
        <Typography variant="subtitle2" color="textSecondary">{item.period}</Typography>
        </Box>
        </Box>
        <ul>
          {item.description.map((desc, index) => (
            <li key={index}>
              <Typography variant="body1">{desc}</Typography>
            </li>
          ))}
        </ul>
      </Paper>
    );
  }
});

export default Experience;
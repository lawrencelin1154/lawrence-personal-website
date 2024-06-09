import React from "react";
import { Button } from '@mui/material';
import ContactPageIcon from '@mui/icons-material/ContactPage';

function Resume() {
    return (
        <a 
            href="https://docs.google.com/document/d/1Pw8mtEMN7NggzP8IG10dFs7c9zax1YbT/edit?usp=sharing&ouid=114317467356278930419&rtpof=true&sd=true" 
            target="_blank"
            rel="noreferrer"
        >
            <Button 
                variant="outlined"
                size="large"
                startIcon={<ContactPageIcon />}
                sx={{
                    mt: 2,
                    ml: 1,
                    borderRadius: 100,
                    color: "#B669FF",
                    borderColor: "#B669FF",
                    '&:hover': {
                        boxShadow: "0 2px 12px 2px #B669FF",
                        borderColor: "#B669FF",
                    },
                }}
            >
                Get Resume
            </Button>
        </a>
    );
};

export default Resume;

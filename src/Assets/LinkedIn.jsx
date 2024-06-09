import React from "react";
import { Button } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function LinkedIn() {
    return (
        <a 
            href="https://www.linkedin.com/in/lawrence-lin11/" 
            target="_blank"
            rel="noreferrer"
        >
            <Button 
                variant="outlined"
                size="large"
                startIcon={<LinkedInIcon />}
                sx={{
                    mt: 2,
                    ml: 4,
                    borderRadius: 100,
                    color: "#0072b1",
                    borderColor: "#0083b1",
                    '&:hover': {
                        boxShadow: "0 2px 12px 2px #0072b1",
                    },
                }}
            >
                LinkedIn
            </Button>
        </a>
    );
};

export default LinkedIn;

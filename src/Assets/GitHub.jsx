import React from "react";
import { Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

function GitHub() {
    return (
        <a 
            href="https://github.com/lawrencelin1154" 
            target="_blank"
            rel="noreferrer"
        >
            <Button 
                variant="outlined"
                size="large"
                startIcon={<GitHubIcon />}
                sx={{
                    mt: 2,
                    ml: 4,
                    borderRadius: 100,
                    color: "#2b3137",
                    borderColor: "#2b3137",
                    '&:hover': {
                        boxShadow: "0 2px 12px 2px #24292e",
                        borderColor: "#24292e"
                    },
                }}
            >
                GitHub
            </Button>
        </a>
    );
};

export default GitHub;
import React, { forwardRef, useRef, useState } from "react";
import { Box, TextField, Button, Typography, Alert } from "@mui/material";
import emailjs from '@emailjs/browser';

import '../App.css';

const Contact = forwardRef((props, ref) => {
    const form = useRef();
    const [alert, setAlert] = useState({ show: false, severity: '', message: '' });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_jpdw94q', 'template_ov2rcrs', form.current, {
        publicKey: '2fXJvPqQBwyblxgKi',
      })
      .then(
        () => {
            setAlert({
                show: true,
                severity: 'success',
                message: "Message has successfully been sent to Lawrence Lin's inbox.",
              });
              setTimeout(() => {
                setAlert({ show: false, severity: '', message: '' });
              }, 5000);
        },
        (error) => {
            setAlert({
                show: true,
                severity: 'error',
                message: 'An error has occurred, please try again or contact me on LinkedIn.',
              });
              setTimeout(() => {
                setAlert({ show: false, severity: '', message: '' });
              }, 5000);
        },
      );
  };


    return (
      <div className="mainContainer" ref={ref}>
        <section>
          <div class="air air1"></div>
          <div class="air air2"></div>
          <div class="air air3"></div>
          <div class="air air4"></div>
        <Box
          sx={{
            pt: "8rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              maxWidth: "31.25rem",
              display: "flex",
              alignItems: "center",
              backgroundColor: "white",
              borderRadius: "10px",
              p: "2rem",
              mb: "1rem",
              boxShadow: "0px 0px 12px 4px grey",
            }}
          >
            <form ref={form} onSubmit={sendEmail}>
              <Box
                sx={{
                  mb: "1rem",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    pb: ".5rem",
                  }}
                >
                  Send A Message:
                </Typography>
                <TextField
                  margin="dense"
                  size="small"
                  label="Name"
                  variant="filled"
                  name="from_name"
                  sx={{
                    pr: "3.375rem",
                  }}
                />
                <TextField
                  margin="dense"
                  size="small"
                  label="Email"
                  variant="filled"
                  name="email_id"
                />
              </Box>
              <Box
                sx={{
                  mb: "1.5rem",
                }}
              >
                <TextField
                  rows={4}
                  margin="dense"
                  fullWidth
                  multiline
                  size="large"
                  label="Message"
                  variant="filled"
                  name="message"
                />
              </Box>
              <Button variant="outlined" type="submit" value="Send">
                Send
              </Button>
            </form>
          </Box>
        </Box>
        {alert.show && (
          <Box
            sx={{
              position: "fixed",
              pt: "6rem",
              pl: "15px",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              overflow: "hidden",
              "@keyframes expand-out": {
                "0%": {
                  width: "0px",
                  height: "0px",
                },
                "100%": {
                  width: "486.8px",
                  height: "48.2px",
                },
              },
              animation: "expand-out 1s ease",
            }}
          >
            <Alert variant="filled" severity={alert.severity}>
              {alert.message}
            </Alert>
          </Box>
        )}
        </section>
      </div>
    );
});

export default Contact;
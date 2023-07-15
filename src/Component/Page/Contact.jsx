import React, { useRef, useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import emailjs from "@emailjs/browser";
import Alert from "react-bootstrap/Alert";

export default function Contact() {
  const form = useRef();
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [Actionss, SetAction] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_24cpc9i",
        "template_f66sl48",
        form.current,
        "z_3H-IRSR6OyJEBIk"
      )
      .then(
        (result) => {
          form.current.reset();
          setShowAlert(true);
          SetAction(true);
          setAlertMessage("Form Submitted!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      {showAlert && (
        <Alert
          variant={Actionss ? "success" : "danger"}
          onClose={() => setShowAlert(false)}
          dismissible
        >
          {alertMessage}
        </Alert>
      )}
      <Typography variant="h3" component="h1" gutterBottom>
        Contact Us
      </Typography>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <form ref={form} onSubmit={sendEmail} style={{ width: "39rem" }}>
          <TextField
            label="Name"
            name="user_name"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            name="user_email"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Message"
            name="message"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary">
            Send
          </Button>
        </form>
      </div>
    </>
  );
}

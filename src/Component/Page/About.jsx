import { Typography } from "@mui/material";
import React from "react";

export default function About() {
  return (
    <div>
      <Typography variant="h3" component="h1" gutterBottom>
        About Us
      </Typography>
      <Typography>
        This application was developed by Shubham Tribhuvan to showcase the
        React skills.
      </Typography>
    </div>
  );
}

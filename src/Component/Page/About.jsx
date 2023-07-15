import { Typography } from "@mui/material";
import React from "react";

export default function About() {
  return (
    <div>
      <Typography variant="h3" component="h1" gutterBottom>
        About Us
      </Typography>
      <Typography
        variant="h6"
        component="h1"
        gutterBottom
        style={{ textAlign: "justify", marginLeft: "16%" }}
      >
        This application was developed by{" "}
        <a
          href="https://shubhamtribhuvan8.github.io/"
          style={{ color: "blue" }}
          title="blank"
        >
          <strong style={{ color: "blue" }}>Shubham Tribhuvan</strong>
        </a>
        to showcase the React skills.
      </Typography>

      <Typography style={{ textAlign: "justify", marginLeft: "16%" }}>
        <li>
          The goal of this React application development assignment is to build
          a feature-rich application that includes a to-do list, shopping cart,
          API integration, and routing.
        </li>
        <li>
          By using React functional components with hooks, state management with
          React Context, and making API requests using fetch or axios, you will
          create a dynamic and interactive application. The to-do list
          functionality allows users to add new tasks, mark tasks as completed,
          and remove tasks.
        </li>
        <li>
          The application will display the total number of tasks and the number
          of completed tasks, providing users with an organized task management
          system.
        </li>
        <li>
          The shopping cart feature enables users to add items to the cart and
          remove them as needed.
        </li>
        <li>
          The application will also display the total number of items in the
          cart and the subtotal, giving users a convenient shopping experience.
        </li>
      </Typography>
    </div>
  );
}

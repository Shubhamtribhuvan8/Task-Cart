import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <br />
      <br />
      <Typography variant="h3" component="h1" gutterBottom>
        Welcome to My TASKCART-TASKTODO Application
      </Typography>
      <Typography
        variant="h6"
        component="h1"
        gutterBottom
        style={{ textAlign: "justify", marginLeft: "26%" }}
      >
        This is a simple to-do list and shopping cart application built using
        React.
      </Typography>
      <Link to={"/commerce"}>
        <img
          style={{ height: "19rem" }}
          src="https://cdn.icon-icons.com/icons2/2387/PNG/512/shopping_cart_market_ecommerce_icon_144576.png"
          alt=""
        />
      </Link>
      <Link to={"/todo"}>
        <img
          style={{ height: "19rem" }}
          src="https://cdn-icons-png.flaticon.com/512/906/906334.png"
          alt=""
        />
      </Link>
    </div>
  );
}

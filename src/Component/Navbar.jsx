import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <header className="navbar">
        <div className="navbar__title navbar__item">
          <img
            style={{ height: "46px" }}
            src="https://cdn.icon-icons.com/icons2/2387/PNG/512/shopping_cart_market_ecommerce_icon_144576.png"
            alt=""
          />
          <Link to={"/"} className="navbar__link">
            <h6 className="navbar__item"> TASK-CART</h6>
          </Link>
        </div>

        <Link to={"/"} className="navbar__link">
          <div className="navbar__item">HOME</div>
        </Link>
        <Link to={"/about"} className="navbar__link">
          <div className="navbar__item">ABOUT</div>
        </Link>
        <Link to={"/contact"} className="navbar__link">
          <div className="navbar__item">CONTACT</div>
        </Link>
      </header>
    </div>
  );
}

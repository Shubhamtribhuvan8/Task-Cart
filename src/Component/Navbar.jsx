import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <header className="navbar">
        <div className="navbar__title navbar__item">
          <div className="navflex">
            <Link to={"/"}>
              <img
                style={{ height: "46px" }}
                src="https://cdn.icon-icons.com/icons2/2387/PNG/512/shopping_cart_market_ecommerce_icon_144576.png"
                alt=""
              />
            </Link>
            <Link to={"/todo"}>
              <img
                style={{ height: "46px" }}
                src="https://cdn-icons-png.flaticon.com/512/906/906334.png"
                alt=""
              />
            </Link>
          </div>

          <div className="navflex">
            <Link to={"/"} className="navbar__link">
              <h6 className="navbar__item"> TASK-CART</h6>
            </Link>
            <Link to={"/todo"} className="navbar__link">
              <h6 className="navbar__item"> TASK-TODO</h6>
            </Link>
          </div>
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

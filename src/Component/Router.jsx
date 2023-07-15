import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductPage from "./Commerce/ProductPage";
import ProductDetails from "./Commerce/ProductDetails";
import OrderPage from "./Commerce/OrderPage";
import CartPage from "./Commerce/CartPage";
import AddTodo from "./Todo/Addtodo";
import About from "./Page/About";
import Contact from "./Page/Contact";
export default function Routers() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/todo" element={<AddTodo />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/orders" element={<OrderPage />} />
        <Route path="/*" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

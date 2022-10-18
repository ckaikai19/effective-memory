import React, { useState } from "react";
import "./index.css";
import Products from "./components/Products";
import Home from "./components/Home";
import Items from "./components/Items";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <header className="bg-gray-400 p-7 flex">
        <Link to={`/`}>
          <h1 className="text-3xl pr-6 font-light">Home</h1>
        </Link>
        <Link to={`/products`}>
          <h1 className="text-3xl pr-6 font-light">Products</h1>
        </Link>
        <Link to={`/cart`}>
          <h1 className="text-3xl pr-6 font-light">Cart</h1>
        </Link>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/item/:id" element={<Items />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;

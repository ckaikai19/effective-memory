import React, { useState } from "react";
import "./index.css";
import Products from "./components/Products";
import Home from "./components/Home";
import Items from "./components/Items";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Router>
  );
}

export default App;

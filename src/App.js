import React from "react";
import { Routes, Route } from 'react-router-dom';
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";
import Navbar from "./Navbar";
import "./App.css";
import { useState } from "react";
import SignupLogin from "./SignupLogin"

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prevCartItems => [...prevCartItems, product]);
  };

  // Function to calculate the total number of items in the cart
  function getTotalItems(){
    return cartItems.length;
  };

  
  return (
    <div>
      <Navbar totalItems={getTotalItems()} />
      <Routes>
      <Route path="/" element={<ProductList addToCart={addToCart} cartItems={cartItems} setCartItems={setCartItems} />} />
      <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
      <Route path="/:index" element={<ProductDetails />} />
      <Route path="signup" element={<SignupLogin/>}/>
      </Routes>
    </div>
  );
}

export default App
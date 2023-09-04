// Import React and necessary components and functions from libraries
import React from "react";
import { Routes, Route } from 'react-router-dom';
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";
import Navbar from "./Navbar";
import "./App.css";
import { useState } from "react";
import SignupLogin from "./SignupLogin"
import Checkout from "./Checkout";

function App() {
  // Initialize state for managing the cart items
  const [cartItems, setCartItems] = useState([]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCartItems(prevCartItems => [...prevCartItems, product]);
  };

  // Function to calculate the total number of items in the cart
  function getTotalItems(){
    return cartItems.length;
  };
  
  return (
    <div>
      {/* Render the Navbar component and pass the total number of items in the cart */}
      <Navbar totalItems={getTotalItems()} />
      <Routes>
        {/* Define routes for different views */}
        <Route path="/" element={<ProductList addToCart={addToCart} cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/:index" element={<ProductDetails />} />
        <Route path="signup" element={<SignupLogin/>}/>
      <Route path="/" element={<ProductList addToCart={addToCart} cartItems={cartItems} setCartItems={setCartItems} />} />
      <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
      <Route path="/:index" element={<ProductDetails />} />
      <Route path="signup" element={<SignupLogin/>}/>
      <Route path="checkout" element={<Checkout cartItems={cartItems} />} />
      </Routes>
    </div>
  );
}

// Export the App component as the default export
export default App;

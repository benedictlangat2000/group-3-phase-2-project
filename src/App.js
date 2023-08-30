
import React from "react";


import { useState, useEffect } from "react";
import Cart from "./Cart";
import  "./App.css"
import ProductDetails from './ProductDetails';
import {Routes, Route, Link} from 'react-router-dom'
import SignupLogin from './SignupLogin'
import EcommerceNavbar from "./Navbar";

 




function App() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch API
    fetch("http://ecommerce.muersolutions.com/api/v1/products")
      .then((response) => response.json())
      .then((data) => {
        setCartItems(data); // Update the cart items state with the fetched data
      })
      .catch((error) => {
        console.error("Error fetching cart items:", error);
      });
  }, []);

  return (
    <div>
     

     
    <Routes>
      <Route path="/"element={<EcommerceNavbar/> }>
      <Route path='/:index' element={<ProductDetails/>}/>
      <Route path="/signup" element={<SignupLogin/>}/>
      <Route path="/cart" element={<Cart cartItem={cartItems} />}/>
      </Route>
    </Routes>

    </div>
  )

  }
export default App;


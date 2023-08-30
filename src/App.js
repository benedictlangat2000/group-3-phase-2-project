
import React from "react";
'
import Navbar from "./Navbar";
import Search from "./component/Search";

 function App(){
    return(
        <div>
          <Navbar/>
            
        </div>
    )
 }
 export default App


import React, { useState, useEffect } from "react";
import Cart from "./Cart";
import  "./App.css"


import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import {Routes, Route} from 'react-router-dom'
import SignupLogin from './SignupLogin';


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

    <div className="App">
      <Cart cartItem={cartItems} /> 
    </div>
  );
}

    <Routes>
      <Route path='/' element={<ProductList/>}/>
      <Route path='/:index' element={<ProductDetails/>}/>
         <SignupLogin/>
    </Routes>
  )

  }
export default App;


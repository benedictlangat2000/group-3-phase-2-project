import React, { useState, useEffect } from "react";
import Cart from "./Cart";

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

export default App;

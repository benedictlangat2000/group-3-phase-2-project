import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; // Importing the shopping cart icon
import { Outlet, Link } from 'react-router-dom';

function Navbar({ totalItems }) {
  // The Navbar component receives a "totalItems" prop to display the total number of items in the cart
  
        
        
  return (<div className='search'>
    

      
      <nav>
      <h2>Buy&Carry</h2>
      
      <Link to="/">Home</Link>
      <Link to="/cart"><FaShoppingCart /> Cart({totalItems})</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/checkout">Checkout</Link>
      </nav>

      {/* Outlet to render nested routes */}
      <Outlet></Outlet>
    </div>
  );
}

export default Navbar;

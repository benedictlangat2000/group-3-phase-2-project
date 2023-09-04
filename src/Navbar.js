import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; // Importing the shopping cart icon
import { Outlet, Link } from 'react-router-dom';

function Navbar({ totalItems }) {
  // The Navbar component receives a "totalItems" prop to display the total number of items in the cart
  
  return (
    <div className='search'>
      {/* Brand/logo and navigation links */}
      <h2>Buy&Carry</h2>
      <nav>
        <Link to="/">Home</Link> {/* Link to the home page */}
        {/* Search button (commented out) */}
        {/* <Button variant="outline-success" style={{ 'backgroundColor': "orange", 'color': "black" }}>Search</Button> */}
        <Link to="/signup">Signup</Link> {/* Link to the signup page */}
        <Link to="/cart"><FaShoppingCart /> Cart({totalItems})</Link> {/* Link to the cart page with shopping cart icon and total items */}
      </nav>

      {/* Outlet to render nested routes */}
      <Outlet></Outlet>
    </div>
  );
}

export default Navbar;

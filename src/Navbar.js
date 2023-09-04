import React from 'react';





import {FaShoppingCart } from 'react-icons/fa';

import { Outlet, Link } from 'react-router-dom';



function Navbar({totalItems}) {

  
        
        
  return (<div className='search'>
    

      
      <nav>
      <h2>Buy&Carry</h2>
      
      <Link to="/">Home</Link>
      <Link to="/cart"><FaShoppingCart /> Cart({totalItems})</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/checkout">Checkout</Link>
      </nav>
     
     
      
  <Outlet></Outlet>
  
    
</div>);
}

export default Navbar;

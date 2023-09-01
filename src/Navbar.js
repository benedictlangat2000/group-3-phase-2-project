import React from 'react';





import {FaShoppingCart } from 'react-icons/fa';

import { Outlet, Link } from 'react-router-dom';



function Navbar({totalItems}) {

  
        
        
  return (<div className='search'>
    

      <h2>Buy&Carry</h2>
      <nav>
      <Link to="/">Home</Link>
       {/* <Button variant="outline-success" style={{'backgroundColor':"orange",'color':"black"}}>Search</Button> */}
      <Link to="/signup">Signup</Link>
      <Link to="/cart"><FaShoppingCart /> Cart({totalItems})</Link>
      </nav>
     
     
      
  <Outlet></Outlet>
  
    
</div>);
}

export default Navbar;

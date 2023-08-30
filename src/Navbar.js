import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import Cart from './component/Cart';
import { Outlet, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';


function EcommerceNavbar() {

  const[products, setProducts] = useState([])
    
   useEffect(()=>{
            fetch("http://ecommerce.muersolutions.com/api/v1/products")
            .then(response=>response.json())
            .then(data=>setProducts(data))
            .catch(error=>console.log(error))
           

        }, [])
        // console.log(products)
    

  return (<div>
    <nav>
     
      
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Group-3 shopify</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <FormControl type="text" placeholder="Search products" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Nav>
          <Nav>
            <Nav.Link href="/account"><FaUser /> Account</Nav.Link>
            <Nav.Link href="/cart"><FaShoppingCart /> Cart</Nav.Link>
            
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <nav className='nav'>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/signup">Signup</Link>
      </li>
      <li>
        <Link to="/cart">Cart</Link>
      </li>
    </ul>
  </nav>
  </nav>
  <Outlet></Outlet>
  <div>
  <h1>Here are the products available currently</h1>
  <p>We are glad to serve you!</p>
  
{products.map((product,index)=>(
          <div key={index}> 
              <ul>
                  <li>
                 
                  <h2>{product.product_name} </h2>
                  <img src ={product.product_full_image} alt={product.product_thumbnail}/>
                  <button><Link to ={`/${index}`}>View Details</Link></button>
                  </li>
              </ul>
          </div>
))}

</div>

    
</div>);
}

export default EcommerceNavbar;

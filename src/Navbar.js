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
  const[searchProduct, setSearchProduct] = useState('')

   
   useEffect(()=>{
            fetch("http://ecommerce.muersolutions.com/api/v1/products")
            .then(response=>response.json())
            .then(data=>setProducts(data))
            .catch(error=>console.log(error))
        }, [])

        const filteredProducts = products.filter((product) =>
  product.product_name.toLowerCase().includes(searchProduct.toLowerCase())
)
        
        
  return (<div className='search'>
    <nav>
    
    <Navbar bg="light" expand="lg">
      <Container>
    
        <Link to="/">Home</Link>
      
         <h2>ECOMMERCE SHOPIFY</h2>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          <FormControl type="text" placeholder="Search products" value={searchProduct} className="mr-sm-2" onChange={(e) => setSearchProduct(e.target.value)} />
            <Button variant="outline-success" style={{'backgroundColor':"orange",'color':"black"}}>Search</Button>
          </Nav>
          <Nav>
            <Nav.Link href="/signup"><FaUser /> Account</Nav.Link>
            <Nav.Link href="/cart"><FaShoppingCart /> Cart</Nav.Link>
            
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    
  
  </nav>
  <Outlet></Outlet>
  <div className='product-list'>
  <h1>Here are the products available currently</h1>
  <p>We are glad to serve you!</p>
  
{filteredProducts.map((product,index)=>(
          <div key={index} className='product-card'> 
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

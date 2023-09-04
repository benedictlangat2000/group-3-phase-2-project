
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";


function ProductList({addToCart,cartItems, setCartItem}) {
    const [products, setProducts] = useState([]);
    const [searchProduct, setSearchProduct] = useState("");
   
  
    useEffect(() => {
      fetch("http://ecommerce.muersolutions.com/api/v1/products")
        .then(response => response.json())
        .then(data => setProducts(data))
        .catch(error => console.log(error));
    }, []);
  
    function handleSearch(e) {
      setSearchProduct(e.target.value.toLowerCase());
    }
    
  
  
    const filteredProducts = products.filter(product =>
      product.product_name.toLowerCase().includes(searchProduct.toLowerCase())
    );
  
    return (
      <div>
        <input type="text" placeholder="Search products" value={searchProduct} onChange={handleSearch} className="searchBar" />
        <div className="paragraph">
          <h2>Here are the products available currently</h2>
          <h3>We are glad to serve you! <span>Kindly click on the photo to product details</span> </h3>
          
        </div>
        <div className="product-list-container">
          {filteredProducts.map((product, index) => (
            <div key={index} className="product-card">
              <h2>{product.product_name}</h2>
              <Link to={`/${index}`}><img src={product.product_full_image} alt={product.product_thumbnail} /></Link>
              <button style={{ backgroundColor: "orange", color: "black" }} onClick={() => {addToCart(product)}}>Add To Cart</button>
             
            </div>
          ))}
        </div>
        
        
      </div>
    );
  }
  
  export default ProductList;
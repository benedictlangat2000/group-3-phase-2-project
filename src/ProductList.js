import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";

function ProductList({ addToCart, cartItems, setCartItem }) {
  // State to store the list of products
  const [products, setProducts] = useState([]);
  
  // State to handle search input
  const [searchProduct, setSearchProduct] = useState("");

  // Fetch products from an API when the component mounts
  useEffect(() => {
    fetch("http://ecommerce.muersolutions.com/api/v1/products")
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.log(error));
  }, []);

  // Function to handle search input changes
  function handleSearch(e) {
    setSearchProduct(e.target.value.toLowerCase());
  }

  // Filter products based on the search input
  const filteredProducts = products.filter(product =>
    product.product_name.toLowerCase().includes(searchProduct.toLowerCase())
  );

  return (
    <div>
      {/* Search bar input */}
      <input type="text" placeholder="Search products" value={searchProduct} onChange={handleSearch} className="searchBar" />
      <div className="paragraph">
        <h2>Here are the products available currently</h2>
        <h3>We are glad to serve you!</h3>
      </div>
      <div className="product-list-container">
        {/* Map through filtered products and display them */}
        {filteredProducts.map((product, index) => (
          <div key={index} className="product-card">
            <h2>{product.product_name}</h2>
            {/* Link to the product details page */}
            <Link to={`/${index}`}>
              <img src={product.product_full_image} alt={product.product_thumbnail} />
            </Link>
            {/* Button to add product to the cart */}
            <button style={{ backgroundColor: "orange", color: "black" }} onClick={() => {addToCart(product)}}>Add To Cart</button>
          </div>
        ))}
      </div>
      
      {/* Render the Cart component with cartItems */}
      <Cart cartItems={cartItems} setCartItems={setCartItem} />
    </div>
  );
}

export default ProductList;

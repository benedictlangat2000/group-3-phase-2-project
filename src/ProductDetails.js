import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  // Get the 'index' parameter from the route using useParams
  let { index } = useParams();

  // State to store the product data
  const [product, setProduct] = useState({});

  // Use useEffect to fetch product data based on the 'index' parameter
  useEffect(() => {
    fetch("http://ecommerce.muersolutions.com/api/v1/products")
      .then(response => response.json())
      .then(data => setProduct(data[index]))
      .catch(error => console.log(error));
  }, [index]);

  // If product data is not yet available, display a loading message
  if (!product) {
    return <div>Loading...</div>;
  }

  // Render product details once data is available
  return (
    <div key={index} className="product-details-card">
      <div className="product-details">
        <img src={product.product_full_image} alt={product.product_thumbnail} />
        <h2>{product.product_name}</h2>
        <p>{product.product_description}</p>
        <p>Price: ${product.unit_price}</p>
        <p>Ranking: {product.ranking}</p>
        <p>Created: {product.created}</p>
        <p>Updated: {product.updated}</p>
      </div>
    </div>
  );
}

export default ProductDetails;

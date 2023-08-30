import React from "react"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

function ProductDetails(){

    let {index} = useParams()
    const[product, setProduct]= useState({})
    useEffect(() => {
        fetch(`http://ecommerce.muersolutions.com/api/v1/products/${index}`)
          .then(response => response.json())
          .then(data => setProduct(data) )
          .catch(error =>console.log(error))
          
      }, [index]);
    
return <div key={product.index}>
      <h2>{product.product_name}</h2>
      <p>{product.product_description}</p>
      <h6>{product.unit_price}</h6>
      <h6>{product.ranking}</h6>
      <h6>{product.created}</h6>
      <h6>{product.updated}</h6>

       </div>

}
export default ProductDetails
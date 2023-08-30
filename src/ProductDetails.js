import React from "react"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

function ProductDetails(){

    let {index} = useParams()
    console.log(index)
    const[product, setProduct]= useState({})
    useEffect(() => {
        fetch("http://ecommerce.muersolutions.com/api/v1/products")
          .then(response => response.json())
          .then(data => setProduct(data[index]) )
          .catch(error =>console.log(error))

          
        
          
      }, [index]);
      console.log(product)
    
return <div key={index}>
      <h2>{product.product_name}</h2>
      <p>{product.product_description}</p>
      <p>{product.unit_price} </p>
      <p>{product.ranking} </p>
      <p>{product.created} </p>
      <p>{product.updated} </p>

       </div>

}
export default ProductDetails
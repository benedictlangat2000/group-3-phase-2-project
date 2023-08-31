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
        
    //   console.log(product)
    
return <div key={index} className="product-details-card">
     <img src ={product.product_full_image} alt={product.product_thumbnail}/>
     <div className="product-details">
      <h2>NAME : {product.product_name}</h2>
      <p>DESCRIPTION : {product.product_description}</p>
      <p>PRICE : {product.unit_price} </p>
      <p>RANKING : {product.ranking} </p>
      <p>CREATED : {product.created} </p>
      <p>UPDATED : {product.updated} </p>
      <button style={{'backgroundColor':"orange",'color':"black"}}>Add To Cart</button>
      </div>
       </div>

}
export default ProductDetails
import React from "react";
import { useState, useEffect } from "react"
import {Link} from "react-router-dom";



function ProductList(){
    
const[products, setProducts] = useState([])
    
    try {
        useEffect(()=>{
            fetch("http://ecommerce.muersolutions.com/api/v1/products")
            .then(response=>response.json())
            .then(data=>setProducts(data))

        }, [])
        
    } catch (error) {
        console.log(error)
        
        
    }
    console.log(products)

    
    return( <div>
            <h1>Here are the products available currently</h1>
            <p>We are glad to serve you!</p>
            
    {products.map((product,index)=>(
                    <div key={index}> 
                        <ul>
                            <li>
                           
                            <h2>{product.product_name} </h2>
                            <img src ={product.product_full_image} alt={product.product_thumbnail}/>
                            <button><Link to ={`/${product.index}`}>View Details</Link></button>
                            </li>
                        </ul>
                    </div>
    ))}
    
        </div>)

    
            
}
export default ProductList
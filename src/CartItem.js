import React from "react";
function CartItem({item,removeFromCart}){
 return<div className="cart-item">
    <img src={item.image} alt={item.name}/>
    <div>
        <h3>{item.name}</h3>
        <p>Price:${item.price}</p>
        <button onClick={() => removeFromCart(item)}>Remove</button>
    </div>
  {/* i am obadia  */}
 </div>
}
export default CartItem;
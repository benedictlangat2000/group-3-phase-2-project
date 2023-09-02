import React from "react";

function CartItem({ item, removeCartItem }) {
  

function handleRemoveCartItem() {
   removeCartItem(item);
}
  return (
    <div className="cart-item">
      <img src={item.product_full_image} alt={item.product_thumbnail} />
      <div>
        <h3>{item.product_name}</h3>
        <p>Price: ${item.unit_price}</p>
        <button onClick={handleRemoveCartItem}>Remove</button>
       </div>
    </div>
  );
}

export default CartItem
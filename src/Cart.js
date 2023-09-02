import React from "react";
import CartItem from "./CartItem";

function Cart({ cartItem, removeFromCart }) {
  const calculateTotal = () => {
    return cartItem.reduce((total, item) => total + item.price, 0);
  };
  

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItem.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItem.map(item => (
            <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
          ))}
          <p>Total: ${calculateTotal()}</p>
        </div>
      )}
     
    </div>

  )
}

export default Cart;

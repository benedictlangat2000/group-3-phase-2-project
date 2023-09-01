import React from "react";
import CartItem from "./CartItem";

function Cart({ cartItems, setCartItems }) {
  function removeCartItem(item) {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((cartItem) => cartItem !== item)
    );
  }

  

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((product, index) => (
            <CartItem
              key={index}
              item={product}
              removeCartItem={removeCartItem}
            />
          ))}
        </ul>
      ) : (
        <p>No products added to cart.</p>
      )}
    </div>
  );
}

export default Cart;

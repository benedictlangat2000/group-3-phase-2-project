import React from "react";
import CartItem from "./CartItem";

function Cart({ cartItems, setCartItems }) {
  // Function to remove an item from the cart
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
          {/* Map through the cart items and render each as a CartItem component */}
          {cartItems.map((product, index) => (
            <CartItem
              key={index}
              item={product}
              removeCartItem={removeCartItem}
            />
          ))}
        </ul>
      ) : (
        // Display a message if the cart is empty
        <p>No products added to cart.</p>
      )}
    </div>
  );
}

export default Cart;

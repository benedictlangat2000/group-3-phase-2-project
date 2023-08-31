import React from "react";
import CartItem from "./CartItem";

function Cart({ cartItem, removeFromCart }) {
  const calculateTotal = () => {
    return cartItem.reduce((total, item) => total + item.price, 0);
  };
  // const addToCart = (product, quantity) => {
  //   const updatedCart = [...cart];
  //   const existingItem = updatedCart.find(item => item.id === product.id);

  //   if (existingItem) {
  //     existingItem.quantity += quantity;
  //   } else {
  //     updatedCart.push({ ...product, quantity });
  //   }

  //   setCart(updatedCart);
  // };

  // const removeFromCart = (productId) => {
  //   const updatedCart = cart.filter(item => item.id !== productId);
  //   setCart(updatedCart);
  // };

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
  );
}

export default Cart;

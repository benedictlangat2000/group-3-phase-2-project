import React from "react";

function OrderReceipt({ order }) {
  return (
    <div>
      <h2>Order Receipt</h2>
      {order && (
        <div>
        
          <p>Shipping Address:</p>
          <p>Name: {order.shippingAddress.name}</p>
          <p>Address Line: {order.shippingAddress.addressLine}</p>
          <p>City: {order.shippingAddress.city}</p>
          <p>Postal Code: {order.shippingAddress.postalCode}</p>
          <p>Selected County: {order.shippingAddress.selectedCounty}</p>
          <p>Total Amount: ${order.totalAmount}</p>
          
        </div>
      )}
      <button onClick={() => window.print()}>Print Receipt</button>
    </div>
  );
}

export default OrderReceipt;
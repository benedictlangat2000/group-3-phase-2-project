import React from "react";

function OrderReceipt({ order }) {
  return (
    <div>
      <h2>Order Receipt</h2>
      {order && ( // Check if an order object is provided before rendering
        <div>
          {/* Display shipping address information */}
          <p>Shipping Address:</p>
          <p>Name: {order.shippingAddress.name}</p>
          <p>Address Line: {order.shippingAddress.addressLine}</p>
          <p>City: {order.shippingAddress.city}</p>
          <p>Postal Code: {order.shippingAddress.postalCode}</p>
          <p>Selected County: {order.shippingAddress.selectedCounty}</p>
          
          {/* Display the total order amount */}
          <p>Total Amount: ${order.totalAmount}</p>
        </div>
      )}
      {/* Button to trigger the browser's print functionality */}
      <button onClick={() => window.print()}>Print Receipt</button>
    </div>
  );
}

export default OrderReceipt;

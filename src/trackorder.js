import React, { useState, useEffect } from 'react';

function Orders() {
  const [orders, setOrders] = useState([]);

 useEffect(() => {
//     // Fetch user's orders from your backend API
//     // Update the 'orders' state with the fetched data
      fetch('/api/orders')
         .then(response => response.json())
         .then(data => setOrders(data));
   }, []);
  return (
    <div>
      <h2>Your Orders</h2>
      <div>
        {orders.map(order => (
          <div key={order.id}>
            Order ID: {order.id} - Status: {order.status}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;

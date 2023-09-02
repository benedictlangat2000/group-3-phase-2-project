import React, { useState } from 'react';

function Checkout() {
  const [address, setAddress] = useState('');
  const [paymentStatus, setPaymentStatus] = useState('Pending');
  const [orderReceipt, setOrderReceipt] = useState(null);

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSimulatePayment = () => {
    // In a real application, you would integrate with a payment gateway here
    setPaymentStatus('Payment Successful');

    // Simulate order receipt generation
    const receipt = {
      orderId: Math.floor(Math.random() * 1000),
      items: ['Product 1', 'Product 2'],
      total: 100.0,
      address: address,
    };

    setOrderReceipt(receipt);
  };

  return (
    <div>
      <h1>Checkout</h1>
      <div>
        <label>Delivery Address:</label>
        <input
          type="text"
          value={address}
          onChange={handleAddressChange}
          placeholder="Enter your delivery address"
        />
      </div>
      <div>
        <button onClick={handleSimulatePayment}>Simulate Payment</button>
      </div>
      <div>
        <h2>Payment Status: {paymentStatus}</h2>
      </div>
      {orderReceipt && (
        <div>
          <h2>Order Receipt</h2>
          <p>Order ID: {orderReceipt.orderId}</p>
          <p>Items: {orderReceipt.items.join(', ')}</p>
          <p>Total: ${orderReceipt.total.toFixed(2)}</p>
          <p>Delivery Address: {orderReceipt.address}</p>
        </div>
      )}
    </div>
  );
}

export default Checkout;

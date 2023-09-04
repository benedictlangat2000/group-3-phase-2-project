import React, { useState } from "react";

function PaymentForm({ onNext }) {
  const [paymentInfo, setPaymentInfo] = useState({
    phoneNumber: "",
    billingAddress: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo({ ...paymentInfo, [name]: value });
  };

  const handleNextClick = () => {
    onNext(paymentInfo);
  };

  return (
    <div>
      <h2>Payment Details</h2>
      <form>
        <label>Phone Number:</label>
        <input
          type="text"
          name="phoneNumber"
          value={paymentInfo.phoneNumberNumber}
          onChange={handleInputChange}
        />

        <label>Billing Address:</label>
        <input
          type="text"
          name="billingAddress"
          value={paymentInfo.billingAddress}
          onChange={handleInputChange}
        />

        
      </form>
    </div>
  );
}

export default PaymentForm;

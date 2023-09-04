import React, { useState } from "react";

function PaymentForm({ onNext }) {
  // State to manage payment information, including phone number and billing address
  const [paymentInfo, setPaymentInfo] = useState({
    phoneNumber: "",
    billingAddress: "",
  });

  // Function to handle input changes and update paymentInfo state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo({ ...paymentInfo, [name]: value });
  };

  // Function to handle the "Next" button click
  const handleNextClick = () => {
    // Call the onNext function and pass the paymentInfo to the parent component
    onNext(paymentInfo);
  };

  return (
    <div>
      <h2>Payment Details</h2>
      <form>
        {/* Input field for phone number */}
        <label>Phone Number:</label>
        <input
          type="text"
          name="phoneNumber"
          value={paymentInfo.phoneNumber}
          onChange={handleInputChange}
        />

        {/* Input field for billing address */}
        <label>Billing Address:</label>
        <input
          type="text"
          name="billingAddress"
          value={paymentInfo.billingAddress}
          onChange={handleInputChange}
        />

        {/* Button to trigger the "Next" action */}
        <button type="button" onClick={handleNextClick}>
          Next
        </button>
      </form>
    </div>
  );
}

export default PaymentForm;

import React, { useState } from "react";
import AddressAndLocationForm from "./AddressAndLocationForm";
import PaymentForm from "./PaymentForm";
import OrderReceipt from "./OrderReceipt";
function Checkout({ cartItems }) {
  // State to manage the current step in the checkout process
  const [step, setStep] = useState(1); 
  // State to store form data, including shipping address and payment info
  const [formData, setFormData] = useState({
    shippingAddress: {},
    paymentInfo: {},
  });

  // Function to handle the submission of the address form
  const handleAddressSubmit = (addressData) => {
    setFormData({ ...formData, shippingAddress: addressData });
    setStep(2); // Move to the payment step
  };

  // Function to handle the submission of the payment form
  const handlePaymentSubmit = (paymentData) => {
    setFormData({ ...formData, paymentInfo: paymentData });

    // Calculate the total order amount based on cart items
    const totalAmount = calculateTotalAmount(cartItems);

    // Create an order object with shipping address, payment info, and total amount
    const order = {
      shippingAddress: formData.shippingAddress,
      paymentInfo: formData.paymentInfo,
      totalAmount,
    };

    // Update the form data with the order and move to the receipt step
    setFormData({ ...formData, order });
    setStep(3); // Move to the receipt step
  };

  // Function to calculate the total amount based on cart items
  const calculateTotalAmount = (items) => {
    return items.reduce((total, item) => total + item.unit_price, 0);
  };

  // Function to move to the previous step in the checkout process
  const handleStepBack = () => {
    setStep(step - 1);
  };

  // Function to move to the next step in the checkout process
  const handleStepNext = () => {
    setStep(step + 1);
  };

  return (
    <div>
      {/* Render different forms and receipt based on the current step */}
      {step === 1 && (
        <AddressAndLocationForm onNext={handleAddressSubmit} />
      )}
      {step === 2 && (
        <PaymentForm onNext={handlePaymentSubmit} />
      )}
      {step === 3 && (
        <OrderReceipt order={formData.order} />
      )}
      <div>
        {/* Render "Back" button if not on the first step */}
        {step > 1 && (
          <button onClick={handleStepBack}>Back</button>
        )}
        {/* Render "Next" button if not on the last step */}
        {step < 3 && (
          <button onClick={handleStepNext}>Next</button>
        )}
      </div>
    </div>
  );
}

export default Checkout;

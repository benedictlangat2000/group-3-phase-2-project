import React, { useState } from "react";
import AddressAndLocationForm from "./AddressAndLocationForm";
import PaymentForm from "./PaymentForm";
import OrderReceipt from "./OrderReceipt";

function Checkout({ cartItems }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    shippingAddress: {},
    paymentInfo: {},
  });

  const handleAddressSubmit = (addressData) => {
    setFormData({ ...formData, shippingAddress: addressData });
    setStep(2); // Move to the payment step
  };

  const handlePaymentSubmit = (paymentData) => {
    setFormData({ ...formData, paymentInfo: paymentData });

    const totalAmount = calculateTotalAmount(cartItems);
    const order = {
      shippingAddress: formData.shippingAddress,
      paymentInfo: formData.paymentInfo,
      totalAmount,
      // Add more order details as needed
    };
    setFormData({ ...formData, order });
    setStep(3); // Move to the receipt step
  };

  const calculateTotalAmount = (items) => {
    // Calculate the total amount based on cart items
    return items.reduce((total, item) => total + item.unit_price, 0);
  };

  const handleStepBack = () => {
    setStep(step - 1);
  };

  const handleStepNext = () => {
    // Check if the current step is the payment step (step 2)
    if (step === 2) {
      // Call the handlePaymentSubmit function to submit payment data
      // You can add validation logic here if needed before proceeding
      handlePaymentSubmit(formData.paymentInfo);
    } else {
      setStep(step + 1); // Move to the next step
    }
  };

  return (
    <div>
      {step === 1 && <AddressAndLocationForm onNext={handleAddressSubmit} />}
      {step === 2 && <PaymentForm onNext={handlePaymentSubmit} />}
      {step === 3 && <OrderReceipt order={formData.order} />}
      <div>
        {step > 1 && <button onClick={handleStepBack}>Back</button>}
        {step < 3 && (
          <button onClick={handleStepNext}>
            {step === 2 ? "Submit Payment" : "Next"}
          </button>
        )}
      </div>
    </div>
  );
}

export default Checkout;

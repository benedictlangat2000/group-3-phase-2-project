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
    setStep(2); 
  };

  const handlePaymentSubmit = (paymentData) => {
    setFormData({ ...formData, paymentInfo: paymentData });
   
    const totalAmount = calculateTotalAmount(cartItems); 
    const order = {
      shippingAddress: formData.shippingAddress,
      paymentInfo: formData.paymentInfo,
      totalAmount,
     
    };
    setFormData({ ...formData, order });
    setStep(3); 
  };

  const calculateTotalAmount = (items) => {
    
    return items.reduce((total, item) => total + item.unit_price, 0);
  };

  const handleStepBack = () => {
    setStep(step - 1);
  };

  const handleStepNext = () => {
    setStep(step + 1);
  };

  return (
    <div>
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
        {step > 1 && (
          <button onClick={handleStepBack}>Back</button>
        )}
        {step < 3 && (
          <button onClick={handleStepNext}>Next</button>
        )}
      </div>
    </div>
  );
}

export default Checkout;

import React, { useState } from "react";
import "./PaymentMethod.css";

const PaymentMethod = ({ onSelectPayment }) => {
  const [paymentMethod, setPaymentMethod] = useState(null);

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
    onSelectPayment(method);
  };

  return (
    <div className="payment-method">
      <h3>Metode Pembayaran</h3>
      <div className="payment-options">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="payment-option"
            onClick={() => handlePaymentMethodChange(`Method ${index + 1}`)}
          >
            <img
              src={`https://via.placeholder.com/60?text=Payment+${index + 2}`}
              alt={`Payment Method ${index + 1}`}
            />
          </div>
        ))}
      </div>
      {paymentMethod && <p>Metode Pembayaran: {paymentMethod}</p>}
    </div>
  );
};

export default PaymentMethod;

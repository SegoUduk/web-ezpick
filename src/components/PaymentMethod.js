import React, { useState } from "react";
import "./PaymentMethod.css";

const PaymentMethod = ({ onSelectPayment }) => {
  const [paymentMethod, setPaymentMethod] = useState(null);

  // Daftar metode pembayaran
  const paymentOptions = [
    { id: "gopay", name: "GoPay", image: "https://via.placeholder.com/60?text=GoPay" },
    { id: "ovo", name: "OVO", image: "https://via.placeholder.com/60?text=OVO" },
    { id: "dana", name: "Dana", image: "https://via.placeholder.com/60?text=Dana" },
    { id: "linkaja", name: "LinkAja", image: "https://via.placeholder.com/60?text=LinkAja" },
    { id: "bca", name: "BCA Mobile", image: "https://via.placeholder.com/60?text=BCA+Mobile" },
    { id: "mandiri", name: "Mandiri Online", image: "https://via.placeholder.com/60?text=Mandiri+Online" },
    { id: "bni", name: "BNI Mobile", image: "https://via.placeholder.com/60?text=BNI+Mobile" },
    { id: "bri", name: "BRI Mobile", image: "https://via.placeholder.com/60?text=BRI+Mobile" },
  ];

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method.name); // Set nama metode pembayaran
    onSelectPayment(method.id); // Kirim ID metode pembayaran ke parent
  };

  return (
    <div className="payment-method">
      <h3>Metode Pembayaran</h3>
      <div className="payment-options">
        {paymentOptions.map((option) => (
          <div
            key={option.id}
            className={`payment-option ${
              paymentMethod === option.name ? "selected" : ""
            }`}
            onClick={() => handlePaymentMethodChange(option)}
          >
            <img src={option.image} alt={option.name} />
            <p>{option.name}</p>
          </div>
        ))}
      </div>
      {paymentMethod && <p>Metode Pembayaran: <strong>{paymentMethod}</strong></p>}
    </div>
  );
};

export default PaymentMethod;

import React, { useState } from "react";
import "./PaymentMethod.css";

const PaymentMethod = ({ onSelectPayment }) => {
  const [paymentMethod, setPaymentMethod] = useState(null);

  // Daftar metode pembayaran
  const paymentOptions = [
    { id: "gopay", name: "GoPay", image: "/gambar/gopay.png" },
    { id: "ovo", name: "OVO", image: "/gambar/ovo.png" },
    { id: "dana", name: "Dana", image: "/gambar/dana.webp" },
    { id: "linkaja", name: "LinkAja", image: "/gambar/link.png" },
    { id: "bca", name: "BCA Mobile", image: "/gambar/bca.png" },
    { id: "mandiri", name: "Mandiri Online", image: "/gambar/mandiri.png" },
    { id: "bni", name: "BNI Mobile", image: "/gambar/bni.png" },
    { id: "bri", name: "BRI Mobile", image: "/gambar/bri.jpg" },
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

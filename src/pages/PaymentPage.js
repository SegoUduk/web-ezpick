import React, { useState } from "react";
import "./PaymentPage.css";

const PaymentPage = ({ cartItems, removeFromCart }) => {
  const [notes, setNotes] = useState("");

  const handleRemove = (id) => {
    removeFromCart(id);
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="payment-page">
      <h2>Pembayaran</h2>
      <div className="order-list">
        {cartItems.map((item) => (
          <div key={item.id} className="order-item">
            <img src={item.image} alt={item.name} />
            <div>
              <p>{item.name}</p>
              <p>Rp {item.price} x {item.quantity}</p>
            </div>
            <button onClick={() => handleRemove(item.id)}>Hapus</button>
          </div>
        ))}
      </div>
      <textarea
        placeholder="Tambahkan catatan"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
      <p>Total: Rp {totalPrice}</p>
      <button>Metode Pembayaran</button>
      <button>Konfirmasi</button>
    </div>
  );
};

export default PaymentPage;

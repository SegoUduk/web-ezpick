import React from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = ({ cartItems }) => {
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <div>
        <p>Keranjang: {cartItems.length} item</p>
        <p>Total Harga: Rp {totalPrice.toLocaleString()}</p>
      </div>
      <button onClick={() => navigate("/payment")}>Lihat Keranjang</button>
    </div>
  );
};

export default Cart;

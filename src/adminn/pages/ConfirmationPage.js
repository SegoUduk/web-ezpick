import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ConfirmationPage.css";
import AdminNavbar from "../components/AdminNavbar";

const ConfirmationPage = () => {
  const location = useLocation(); // Mendapatkan data pesanan dari navigasi
  const navigate = useNavigate();
  const order = location.state; // Data pesanan yang diterima

  if (!order) {
    // Jika tidak ada data, arahkan kembali ke halaman utama
    navigate("/");
    return null;
  }

  const { cart, pickupOption, numberOfPeople, orderNote, paymentMethod, total, time } = order;

  return (
    <div className="confirmation-page">
      {/* Navbar */}
      <AdminNavbar />

      {/* Konten Utama */}
      <div className="confirmation-content">
        <div className="card">
          {/* Detail Pembelian */}
          <div className="order-details">
            <h3>Detail Pembelian</h3>
            <p>
              <b>Waktu Pesanan:</b> {time}
            </p>
            <p>
              <b>Opsi Pengambilan:</b> {pickupOption}
            </p>
            {pickupOption === "Makan di Tempat" && (
              <p>
                <b>Jumlah Orang:</b> {numberOfPeople}
              </p>
            )}
            <p>
              <b>Metode Pembayaran:</b> {paymentMethod}
            </p>
          </div>

          {/* Menu yang Dipilih */}
          <div className="menu-selection">
            <h3>Menu yang Dipilih</h3>
            <ul>
              {cart.map((item, index) => (
                <li key={index}>
                  {item.name} x{item.quantity} - Rp{(item.price * item.quantity).toLocaleString()}
                </li>
              ))}
            </ul>
            <h3>Total: Rp{total.toLocaleString()}</h3>
          </div>

          {/* Catatan */}
          <div className="notes">
            <h3>Catatan untuk Pesanan</h3>
            <textarea value={orderNote} readOnly></textarea>
          </div>

          {/* Tombol Aksi */}
          <div className="action-buttons">
            <button className="cancel-button" onClick={() => navigate("/")}>
              Batalkan
            </button>
            <button className="confirm-button">Konfirmasi</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;

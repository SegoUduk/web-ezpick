import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./ConfirmationPage.css";
import AdminNavbar from "../components/AdminNavbar";

const ConfirmationPage = () => {
    const { order } = useCart(); // Ambil data order dari context
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1); // Kembali ke halaman sebelumnya
    };

    const handleConfirm = () => {
        // Ambil riwayat pesanan yang sudah ada di localStorage
        const storedOrders = JSON.parse(localStorage.getItem("orderHistory")) || [];

        // Tambahkan data pesanan saat ini ke riwayat
        storedOrders.push(order);

        // Simpan kembali ke localStorage
        localStorage.setItem("orderHistory", JSON.stringify(storedOrders));

        // Kembali ke halaman sebelumnya
        navigate(-1);
    };

    if (!order) {
        return (
            <div>
                <h3>Tidak ada data untuk ditampilkan.</h3>
                <button onClick={handleBack}>Kembali</button>
            </div>
        );
    }

    return (
        <div className="confirmation-page">
            <AdminNavbar />
            <div className="confirmation-content">
                <div className="card">
                    <div className="order-details">
                        <h3>Detail Pesanan</h3>
                        <p><b>Opsi Pengambilan:</b> {order.pickupOption}</p>
                        {order.numberOfPeople && (
                            <p><b>Jumlah Orang:</b> {order.numberOfPeople}</p>
                        )}
                        <p><b>Catatan:</b> {order.orderNote}</p>
                        <p><b>Metode Pembayaran:</b> {order.paymentMethod}</p>
                        <p><b>Total:</b> Rp{order.total.toLocaleString()}</p>
                    </div>
                    <div className="cart-items">
                        <h3>Item dalam Pesanan</h3>
                        <ul>
                            {order.cart.map((item, index) => (
                                <li key={index}>
                                    {item.name} x{item.quantity} - Rp{(item.price * item.quantity).toLocaleString()}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="action-buttons">
                        <button className="back-button" onClick={handleBack}>
                            Kembali
                        </button>
                        <button className="confirm-button" onClick={handleConfirm}>
                            Konfirmasi
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationPage;

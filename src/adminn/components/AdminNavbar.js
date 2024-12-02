import React from "react";
import { useNavigate } from "react-router-dom";
import "./AdminNavbar.css";

const AdminNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/AdminLogin"); // Kembali ke halaman login admin
  };

  return (
    <nav className="admin-navbar">
      {/* Bagian Logo */}
      <div className="admin-navbar-logo">
        <img src="/logo.png" alt="Logo" />
      </div>

      {/* Bagian Menu */}
      <div className="admin-navbar-menu">
        <button onClick={() => navigate("/AdminDashboard")}>Edit Menu</button>
        <button onClick={() => navigate("/ConfirmationPage")}>
          Konfirmasi Pesanan
        </button>
      </div>

      {/* Button Logout */}
      <div className="admin-navbar-logout">
        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
};

export default AdminNavbar;

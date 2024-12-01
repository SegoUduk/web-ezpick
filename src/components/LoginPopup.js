import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./LoginPopup.css";

const LoginPopup = ({ onClose, onRegisterClick }) => {
  const { login } = useAuth(); // Mengambil fungsi login dari AuthContext
  const navigate = useNavigate();

  const handleUserLogin = () => {
    login("user"); // Login sebagai pengguna biasa
    navigate("/"); // Arahkan ke halaman Beranda setelah login
  };

  const handleAdminLoginClick = () => {
    navigate("/AdminLogin"); // Arahkan ke halaman login admin
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Login</h2>
        <form>
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />
          <button type="button" onClick={handleUserLogin} className="popup-button">
            Masuk
          </button>
        </form>
        <p>
          Belum ada akun?{" "}
          <span onClick={onRegisterClick} className="link">
            Daftar dulu
          </span>
        </p>
        <button className="admin-login-button" onClick={handleAdminLoginClick}>
          Login sebagai Admin
        </button>
        <button className="close-button" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default LoginPopup;

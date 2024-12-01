import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";

const AdminLogin = () => {
  const { login } = useAuth(); // Mengambil fungsi login dari AuthContext
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAdminLogin = () => {
    if (email === "admin" && password === "admin123") {
      login("admin"); // Login sebagai admin
      navigate("/AdminDashboard"); // Arahkan ke halaman dashboard admin
    } else {
      alert("Email atau password salah!");
    }
  };

  return (
    <div className="admin-login-container">
      <h2>Login Admin</h2>
      <form>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="button" onClick={handleAdminLogin} className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;

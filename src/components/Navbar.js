import React from "react";
import { Link } from "react-router-dom"; // Import Link dari React Router
import "./Navbar.css";

const Navbar = ({ isLoggedIn, handleLoginClick, handleProfileClick }) => (
  <header className="navbar">
    <div className="logo">
      <img src="logo.png" alt="EZPick Logo" className="logo-image" />
    </div>
    <nav className="nav-links">
      {/* Gunakan Link untuk navigasi */}
      <Link to="/">Beranda</Link>
      <Link to="/rekomendasi">Rekomendasi</Link>
    </nav>
    <div className="auth-buttons">
      {!isLoggedIn ? (
        <button className="login-button" onClick={handleLoginClick}>
          Log in/Sign up
        </button>
      ) : (
        <div className="profile-button" onClick={handleProfileClick}>
          <img src="https://via.placeholder.com/100" alt="Profile" className="profile-image" />
        </div>
      )}
    </div>
  </header>
);

export default Navbar;

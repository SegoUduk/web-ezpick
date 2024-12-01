import React, { useState } from "react";
import AdminNavbar from "../components/AdminNavbar"; // Navbar Admin
import FoodPopup from "../components/AddFoodPopup"; // Popup untuk menambah makanan/minuman
import "./AdminDashboard.css"; // CSS untuk halaman Admin

const AdminDashboard = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State untuk membuka/tutup popup

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="admin-dashboard">
      {/* Navbar */}
      <AdminNavbar />

      {/* Konten Dashboard */}
      <div className="dashboard-content">
        <section className="menu-section">
          {/* Bagian Makanan */}
          <div className="menu-category">
            <h2>Makanan</h2>
            <div className="menu-items">
              {Array(8) // Contoh dummy data menu makanan
                .fill(null)
                .map((_, index) => (
                  <div className="menu-card" key={`makanan-${index}`}>
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Makanan"
                      className="menu-image"
                    />
                    <p>Paket Chicken Katsu</p>
                    <p>Rp. 25.000</p>
                  </div>
                ))}
            </div>
            <div className="menu-actions">
              <button className="action-button" onClick={openPopup}>
                Tambah Makanan
              </button>
              <button className="action-button">Edit Stok</button>
            </div>
          </div>

          {/* Bagian Minuman */}
          <div className="menu-category">
            <h2>Minuman</h2>
            <div className="menu-items">
              {Array(8) // Contoh dummy data menu minuman
                .fill(null)
                .map((_, index) => (
                  <div className="menu-card" key={`minuman-${index}`}>
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Minuman"
                      className="menu-image"
                    />
                    <p>Paket Chicken Katsu</p>
                    <p>Rp. 25.000</p>
                  </div>
                ))}
            </div>
            <div className="menu-actions">
              <button className="action-button" onClick={openPopup}>
                Tambah Minuman
              </button>
              <button className="action-button">Edit Stok</button>
            </div>
          </div>
        </section>

        {/* Food Popup */}
        {isPopupOpen && <FoodPopup closePopup={closePopup} />}
      </div>
    </div>
  );
};

export default AdminDashboard;

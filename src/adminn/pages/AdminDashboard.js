import React from "react";
import AdminNavbar from "../component/AdminNavbar"; // Navbar Admin
import "./AdminDashboard.css"; // CSS untuk halaman Admin

const AdminDashboard = () => {
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
              <button className="action-button">Tambah Makanan</button>
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
              <button className="action-button">Tambah Minuman</button>
              <button className="action-button">Edit Stok</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminDashboard;

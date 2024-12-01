import React, { useState } from "react";
import AdminNavbar from "../components/AdminNavbar"; // Navbar Admin
import FoodPopup from "../components/AddFoodPopup"; // Popup untuk menambah makanan/minuman
import EditStockPopup from "../components/EditStockPopup"; // Pop-up untuk Edit Stok
import "./AdminDashboard.css"; // CSS untuk halaman Admin

const AdminDashboard = () => {
  // State untuk pop-up tambah makanan/minuman
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // State untuk pop-up edit stok
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null); // Item yang dipilih untuk edit stok

  // Data dummy untuk makanan/minuman
  const [menuItems, setMenuItems] = useState([
    { id: 1, name: "Paket Chicken Katsu", price: "Rp. 25.000", available: true, category: "Makanan", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Paket Iced Tea", price: "Rp. 15.000", available: true, category: "Minuman", image: "https://via.placeholder.com/150" },
    // Tambahkan item lainnya
  ]);

  // Membuka popup tambah makanan/minuman
  const openPopup = () => {
    setIsPopupOpen(true);
  };

  // Menutup popup tambah makanan/minuman
  const closePopup = () => {
    setIsPopupOpen(false);
  };

  // Membuka popup edit stok
  const openEditPopup = (item) => {
    setSelectedItem(item);
    setIsEditPopupOpen(true);
  };

  // Menutup popup edit stok
  const closeEditPopup = () => {
    setIsEditPopupOpen(false);
  };

  // Menyimpan perubahan stok
  const handleSaveStock = (newStockStatus) => {
    const updatedMenuItems = menuItems.map((item) =>
      item.id === selectedItem.id ? { ...item, available: newStockStatus } : item
    );
    setMenuItems(updatedMenuItems);
    closeEditPopup();
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
              {menuItems
                .filter(item => item.category === "Makanan")
                .map((item) => (
                  <div className="menu-card" key={item.id}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="menu-image"
                    />
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    <p>Status: {item.available ? "Tersedia" : "Habis"}</p>
                    <button className="action-button" onClick={() => openEditPopup(item)}>Edit Stok</button>
                  </div>
                ))}
            </div>
            <div className="menu-actions">
              <button className="action-button" onClick={openPopup}>
                Tambah Makanan
              </button>
            </div>
          </div>

          {/* Bagian Minuman */}
          <div className="menu-category">
            <h2>Minuman</h2>
            <div className="menu-items">
              {menuItems
                .filter(item => item.category === "Minuman")
                .map((item) => (
                  <div className="menu-card" key={item.id}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="menu-image"
                    />
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    <p>Status: {item.available ? "Tersedia" : "Habis"}</p>
                    <button className="action-button" onClick={() => openEditPopup(item)}>Edit Stok</button>
                  </div>
                ))}
            </div>
            <div className="menu-actions">
              <button className="action-button" onClick={openPopup}>
                Tambah Minuman
              </button>
            </div>
          </div>
        </section>

        {/* Popup untuk menambah makanan/minuman */}
        {isPopupOpen && <FoodPopup closePopup={closePopup} />}

        {/* Popup untuk edit stok */}
        {isEditPopupOpen && (
          <EditStockPopup
            selectedItem={selectedItem}
            onSave={handleSaveStock}
            onCancel={closeEditPopup}
          />
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;

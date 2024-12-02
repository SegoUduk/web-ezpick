import React, { useState } from "react";
import "./AddFoodPopup.css"; // CSS untuk popup

const FoodPopup = ({ closePopup }) => {
  const [foodName, setFoodName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSave = () => {
    // Logic untuk menyimpan makanan (misalnya menambah ke daftar menu)
    closePopup(); // Menutup popup setelah menyimpan
  };

  return (
    <div className="popup2">
      <div className="popup-content">
        <h2>Tambah Makanan</h2>
        <form>
          <input
            type="file"
            onChange={handleImageChange}
            accept="image/*"
            required
          />
          {image && <img src={image} alt="Preview" className="preview-image" />}
          <input
            type="text"
            placeholder="Nama Makanan"
            value={foodName}
            onChange={(e) => setFoodName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Harga Makanan"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
          <div className="popup-actions">
            <button type="button" className="popup-button" onClick={handleSave}>
              Simpan
            </button>
            <button
              type="button"
              className="popup-button cancel"
              onClick={closePopup}
            >
              Batal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FoodPopup;

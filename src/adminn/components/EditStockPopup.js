import React, { useState } from "react";
import "./EditStockPopup.css";

const EditStockPopup = ({ selectedItem, onSave, onCancel }) => {
  const [newStockStatus, setNewStockStatus] = useState(selectedItem.available);

  const handleSubmit = () => {
    onSave(newStockStatus);
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <button className="close-button" onClick={onCancel}>X</button>
        <h2>Edit Stok</h2>
        <div className="popup-image">
          <img src={selectedItem.image} alt={selectedItem.name} className="menu-image" />
        </div>
        <div className="popup-form">
          <p>{selectedItem.name}</p>
          <p>{selectedItem.price}</p>
          <div>
            <label>
              <input
                type="radio"
                checked={newStockStatus}
                onChange={() => setNewStockStatus(true)}
              />
              Tersedia
            </label>
            <label>
              <input
                type="radio"
                checked={!newStockStatus}
                onChange={() => setNewStockStatus(false)}
              />
              Habis
            </label>
          </div>
          <div className="popup-actions">
            <button className="popup-button" onClick={handleSubmit}>Simpan</button>
            <button className="popup-button cancel" onClick={onCancel}>Batal</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditStockPopup;

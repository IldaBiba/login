import React, { useEffect } from "react";
import "./NavBar.css";

const NavBar = ({ onCancel, onSave }) => {
  const handleSaveButton = () => {
    onSave();
  };
  const handleCancelButton = () => {
    onCancel();
  };

  return (
    <div className="navbar">
      <button className="navbar-button" onClick={handleSaveButton}>
        Save
      </button>
      <button className="navbar-button" onClick={handleCancelButton}>
        Cancel
      </button>
    </div>
  );
};

export default NavBar;

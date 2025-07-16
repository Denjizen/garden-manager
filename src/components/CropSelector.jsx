import React, { useState } from "react";
import "./CropSelector.css";

const CropSelector = ({ crops, onPlant }) => {
  const [selected, setSelected] = useState("");

  const handlePlantClick = () => {
    const crop = crops.find(c => c.name === selected);
    if (crop) {
      onPlant(crop);
      setSelected("");
    }
  };

  return (
    <div className="crop-selector-container">
      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        className="styled-dropdown"
      >
        <option value="">Select a crop...</option>
        {crops.map((crop, idx) => (
          <option key={idx} value={crop.name}>
            {crop.name}
          </option>
        ))}
      </select>
      <button onClick={handlePlantClick} className="plant-button">
        Plant Crop
      </button>
    </div>
  );
};

export default CropSelector;

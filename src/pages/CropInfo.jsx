// src/pages/CropInfo.jsx

import React from "react";
import crops from "../data/crops";
import "./CropInfo.css";

const CropInfo = () => {
  return (
    <div className="crop-info-container">
      <h1>🌿 Crop Information</h1>
      <div className="crop-grid">
        {crops.map((crop, index) => (
          <div key={index} className="crop-card">
            <h3>{crop.name}</h3>
            <p>{crop.description}</p>
            <p><strong>Time to Harvest:</strong> {crop.timeToHarvest}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CropInfo;

// src/components/CropCard.jsx

import React from "react";

const CropCard = ({ crop, onPlant, showPlantButton }) => {
  return (
    <div className="card">
      <h3>{crop.name}</h3>
      {crop.description && <p>{crop.description}</p>}
      {crop.plantedDate && (
        <p><strong>Planted:</strong> {crop.plantedDate}</p>
      )}
      {showPlantButton && (
        <button onClick={() => onPlant(crop.name)}>🌱 Plant This</button>
      )}
    </div>
  );
};

export default CropCard;

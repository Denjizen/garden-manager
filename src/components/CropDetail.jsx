import React from "react";
import "./CropDetail.css";

export default function CropDetail({ crop }) {
  return (
    <div className="crop-detail-card">
      <h2>{crop.name}</h2>
      <p><strong>Planted On:</strong> {crop.plantedDate}</p>
      <p><strong>Days to Harvest:</strong> {crop.daysToHarvest}</p>
      <p><strong>Description:</strong> {crop.description}</p>
    </div>
  );
}

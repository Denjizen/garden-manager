import React, { useEffect, useState } from "react";
import CropSelector from "../components/CropSelector";
import "./Garden.css";
import { getPlantedCrops, plantCrop, deleteCrop } from "../utils/storage";

const defaultCrops = [
  { name: "Tomato", daysToHarvest: 75 },
  { name: "Carrot", daysToHarvest: 60 },
  { name: "Lettuce", daysToHarvest: 30 },
  { name: "Potatoes", daysToHarvest: 90 },
  { name: "Peas", daysToHarvest: 60 },
  { name: "Zucchini", daysToHarvest: 55 },
  { name: "Green Beans", daysToHarvest: 50 },
  { name: "Chard", daysToHarvest: 40 },
  { name: "Beetroot", daysToHarvest: 65 },
  { name: "Onions", daysToHarvest: 95 },
];

const Garden = () => {
  const [garden, setGarden] = useState([]);

  useEffect(() => {
    setGarden(getPlantedCrops());
  }, []);

  const handlePlant = (crop) => {
    plantCrop(crop.name);
    setGarden(getPlantedCrops());
  };

  const handleDelete = (cropId) => {
    deleteCrop(cropId);
    setGarden(getPlantedCrops());
  };

  return (
    <div className="garden">
      <h2>Plant New Crop</h2>
      <CropSelector crops={defaultCrops} onPlant={handlePlant} />

      <h2>Your Greenhouse</h2>
      <div className="crop-list">
        {garden.map((crop) => {
          const plantedDate = new Date(crop.plantedDate);
          const harvestDate = new Date(plantedDate);
          const cropInfo = defaultCrops.find(c => c.name === crop.name);
          const daysToHarvest = cropInfo ? cropInfo.daysToHarvest : 60;
          harvestDate.setDate(harvestDate.getDate() + daysToHarvest);
          const daysLeft = Math.max(
            0,
            Math.ceil((harvestDate - new Date()) / (1000 * 60 * 60 * 24))
          );

          return (
            <div key={crop.id} className="crop-card" style={{ position: "relative" }}>
              <h3>{crop.name}</h3>
              <p>Planted: {plantedDate.toDateString()}</p>
              <p>Days until harvest: {daysLeft}</p>

              {/* Delete button */}
              <button
                onClick={() => handleDelete(crop.id)}
                style={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                  width: 32,
                  height: 32,
                  backgroundColor: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
                aria-label={`Delete ${crop.name}`}
              >
                {/* Simple "X" or you can replace with an SVG icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="red"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width="24"
                  height="24"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Garden;

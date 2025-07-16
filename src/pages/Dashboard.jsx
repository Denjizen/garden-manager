import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { getPlantedCrops, updateWatering } from "../utils/storage";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const Dashboard = () => {
  const [crops, setCrops] = useState([]);

  useEffect(() => {
    setCrops(getPlantedCrops());
  }, []);

  const toggleWater = (cropId, day) => {
    const crop = crops.find(c => c.id === cropId);
    if (!crop) return;
    const newValue = !crop.watering[day];
    updateWatering(cropId, day, newValue);
    setCrops(getPlantedCrops());
  };

  return (
    <div className="dashboard">
      <h2>🧠 Dashboard</h2>
      <div className="crop-list">
        {crops.map((crop) => {
          // Calculate estimated harvest date
          const plantedDate = new Date(crop.plantedDate);
          // Use crop.daysToHarvest or fallback (e.g., 60 days) if missing
          const daysToHarvest = crop.daysToHarvest || 60;
          const estHarvestDate = new Date(plantedDate);
          estHarvestDate.setDate(plantedDate.getDate() + daysToHarvest);

          return (
            <div key={crop.id} className="crop-card">
              <h4>{crop.name}</h4>
              <p>Planted: {plantedDate.toLocaleDateString()}</p>
              <p>Est Harvest: {estHarvestDate.toLocaleDateString()}</p>
              <div className="watering-schedule">
                {days.map(day => (
                  <label key={day}>
                    <input
                      type="checkbox"
                      checked={crop.watering[day]}
                      onChange={() => toggleWater(crop.id, day)}
                    />
                    {day.slice(0, 3)}
                  </label>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;

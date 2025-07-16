// src/components/WateringSchedule.jsx

import React from "react";

const WateringSchedule = ({ crop, onToggle }) => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div className="watering-schedule">
      <p><strong>Watering Schedule</strong></p>
      <div className="days">
        {days.map(day => (
          <label key={day}>
            <input
              type="checkbox"
              checked={crop.watering[day]}
              onChange={(e) => onToggle(crop.id, day, e.target.checked)}
            />
            {day}
          </label>
        ))}
      </div>
    </div>
  );
};

export default WateringSchedule;

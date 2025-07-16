const STORAGE_KEY = "myGarden";

const wateringDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export const getPlantedCrops = () => {
  let data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  const today = new Date();
  const day = today.getDay(); // 0 = Sunday, 1 = Monday, etc.

  // Auto reset watering on Monday
  if (day === 1) {
    data = data.map(crop => ({
      ...crop,
      watering: Object.fromEntries(wateringDays.map(day => [day, false]))
    }));
    // Save reset watering back to localStorage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }

  return data;
};

export const plantCrop = (cropName) => {
  const planted = getPlantedCrops();
  const newCrop = {
    id: `${cropName}-${Date.now()}`,
    name: cropName,
    plantedDate: new Date().toISOString().split("T")[0],
    watering: Object.fromEntries(wateringDays.map(day => [day, false]))
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...planted, newCrop]));
};

export const updateWatering = (cropId, day, value) => {
  const planted = getPlantedCrops();
  const updated = planted.map(crop =>
    crop.id === cropId
      ? { ...crop, watering: { ...crop.watering, [day]: value } }
      : crop
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
};

export const deleteCrop = (cropId) => {
  const planted = getPlantedCrops();
  const filtered = planted.filter(crop => crop.id !== cropId);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
};

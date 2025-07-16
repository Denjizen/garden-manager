// src/utils/notifications.js

export async function requestNotificationPermission() {
  if (!('Notification' in window)) return false;

  const permission = await Notification.requestPermission();
  return permission === 'granted';
}

export function sendWaterReminder(crop) {
  if (!('Notification' in window)) return;

  const title = `💧 Time to water your ${crop.name}`;
  const options = {
    body: `Planted on ${new Date(crop.plantedDate).toLocaleDateString()}.`,
    icon: '/icon-192.png',
  };

  new Notification(title, options);
}

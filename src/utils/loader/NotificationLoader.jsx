import api from '../api/APIService';

export async function NotificationLoader() {
  const size = 20;

  const notificationResponse = await api.get(`/notification?size=${size}`);

  return { initialNotificationData: notificationResponse.data };
}

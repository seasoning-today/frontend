import api from '@utils/api/APIService';

export async function CollageLoader({ request }) {
  const url = new URL(request.url);
  const yearParam =
    url.searchParams.get('year') === null
      ? '2024'
      : url.searchParams.get('year');

  const collageResponse = await api.get(`/article/collage?year=${yearParam}`);
  const newNotificationResponse = await api.get(`/notification/new`);

  return {
    collageData: collageResponse.data,
    newNotificationData: newNotificationResponse.data,
  };
}

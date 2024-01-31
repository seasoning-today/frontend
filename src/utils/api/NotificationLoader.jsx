import axios from 'axios';
import { redirect } from 'react-router-dom';

export const NotificationLoader = async ({ request, params }) => {
  /* (공통 로직) localStorage에 “accessToken” 이 존재하지 않는 경우 처리 */
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken === null) {
    console.log('* No Access Token... Redirecting to /login');
    return redirect(`/login`);
  }

  const size = 10;
  const lastId = '';

  try {
    const response = await axios.get(
      `/api/notification?size=${size}&lastId=${lastId}`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );

    const friendRequestsData = response.data.filter(
      (notification) => notification.type === 'FRIENDSHIP_REQUEST'
    );
    const friendshipAcceptedData = response.data.filter(
      (notification) => notification.type === 'FRIENDSHIP_ACCEPTED'
    );
    const friendReactionData = response.data.filter(
      (notification) => notification.type === 'ARTICLE_FEEDBACK'
    );
    const seasonalNotifyData = response.data.filter(
      (notification) => notification.type === 'ARTICLE_OPEN'
    );
    const notificationData = {
      friendRequestsData: friendRequestsData,
      friendshipAcceptedData: friendshipAcceptedData,
      friendReactionData: friendReactionData,
      seasonalNotifyData: seasonalNotifyData,
    };

    return { notificationData };
  } catch (error) {
    console.error(error);
    console.log('* Response Error... Redirecting to /login');
    return redirect(`/login`);
  }

  return null;
};

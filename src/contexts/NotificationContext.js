import axios from 'axios';
import { useState, useEffect, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import useIntersectionFocus from '@utils/hooks/useIntersectionFocus';

export const NotificationContext = createContext();

export function useNotificationContext(loaderData) {
  const navigate = useNavigate();
  const { initialNotificationData } = loaderData;

  const [notifications, setNotifications] = useState(initialNotificationData);
  const [friendRequests, setFriendRequests] = useState([]);
  const [otherNotifications, setOtherNotifications] = useState([]);
  const [lastNotificationId, setLastNotificationId] = useState(
    initialNotificationData.length > 0
      ? initialNotificationData.at(-1).id
      : null
  );

  const fetchNotificationData = async () => {
    if (!lastNotificationId) return;

    const size = 10;

    try {
      const accessToken = localStorage.getItem('accessToken');
      const notiResponse = await axios.get(
        `/api/notification?size=${size}&lastId=${lastNotificationId}`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      if (notiResponse.data.length === 0) {
        setLastNotificationId(null);
      } else {
        setNotifications((notifications) => [
          ...notifications,
          ...notiResponse.data,
        ]);
        setLastNotificationId(notiResponse.data.at(-1).id);
      }
    } catch (error) {
      console.error(error);
      setLastNotificationId(null);

      if (error.response && error.response.status === 401) {
        console.log('* Unauthorized... Redirecting to /login');
        navigate(`/login`);
      } else {
        console.log('* Response Error... Redirecting to /home');
        navigate(`/home`);
      }
    }
  };

  useEffect(() => {
    setFriendRequests(
      notifications.filter(
        (notification) => notification.type === `FRIENDSHIP_REQUEST`
      )
    );
    setOtherNotifications(
      notifications.filter(
        (notification) => notification.type !== `FRIENDSHIP_REQUEST`
      )
    );
  }, [notifications]);

  const { observerRef } = useIntersectionFocus(fetchNotificationData, []);

  return { friendRequests, notifications: otherNotifications, observerRef };
}

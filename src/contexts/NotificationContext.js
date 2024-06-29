import api from '@utils/api/APIService';
import { useState, useEffect, createContext, useContext } from 'react';
import useIntersectionFocus from '@utils/hooks/useIntersectionFocus';

export const NotificationContext = createContext();

export function useNotificationContext() {
  return useContext(NotificationContext);
}

export function createNotificationContext(loaderData) {
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
      const notiResponse = await api.get(
        `/notification?size=${size}&lastId=${lastNotificationId}`
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

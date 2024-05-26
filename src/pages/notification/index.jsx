import axios from 'axios';

import NotificationTemplate from '@components/templates/NotificationTemplate';

import { useState, useEffect } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import useIntersectionFocus from '@utils/hooks/useIntersectionFocus';

const NotificationPage = () => {
  const { initialNotificationData } = useLoaderData();
  const [notifications, setNotifications] = useState(initialNotificationData);
  const [friendRequests, setFriendRequests] = useState([]);
  const [otherNotifications, setOtherNotifications] = useState([]);
  const [lastNotificationId, setLastNotificationId] = useState(
    initialNotificationData.length > 0
      ? initialNotificationData.at(-1).id
      : null
  );
  const navigate = useNavigate();

  const fetchNotificationData = async () => {
    if (!lastNotificationId) return;

    const size = 20;

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
  const { observerRef } = useIntersectionFocus(fetchNotificationData, []);

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

  return (
    <NotificationTemplate
      friendRequests={friendRequests}
      notifications={otherNotifications}
      observerRef={observerRef}
    />
  );
};

export default NotificationPage;

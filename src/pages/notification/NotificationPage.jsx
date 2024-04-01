import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useLoaderData, useNavigate } from 'react-router-dom';

import useRefFocusEffect from '@utils/hooks/useRefFocusEffect';
import NavigationHeader from '@components/common/NavigationHeader';
import FriendRequest from '@components/notification/FriendRequest';
import FriendReaction from '@components/notification/FriendReaction';
import FriendAccepted from '@components/notification/FriendAccepted';
import SeasonalNotify from '@components/notification/SeasonalNotify';

const Layout = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NotificationContainer = styled.div`
  width: 100%;
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.38rem 1.31rem;
  row-gap: 1.38rem;
  overflow-y: scroll;
`;

const Line = styled.div`
  width: 100%;
  min-height: 0.0625rem;

  background-color: #e3e3e3;
`;

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
    console.log(lastNotificationId);
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
  const { focusElementRef } = useRefFocusEffect(fetchNotificationData, []);

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

  const formatNotificationTime = (timestamp) => {
    const currentTime = new Date();
    const notificationTime = new Date(timestamp);
    const timeDifference = currentTime - notificationTime;

    const minutes = Math.floor(timeDifference / 1000 / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return `${days}일 전`;
    } else if (hours > 0) {
      return `${hours}시간 전`;
    } else if (minutes > 0) {
      return `${minutes}분 전`;
    } else {
      return '방금 전';
    }
  };

  return (
    <Layout>
      <NavigationHeader title="알림" optionType="icon" />

      <NotificationContainer>
        {friendRequests.map((notification) => (
          <FriendRequest
            key={notification.id}
            profileName={notification.profile.nickname}
            profileImageUrl={notification.profile.image}
            friendId={notification.profile.id}
            setNotifications={setNotifications}
            createdAt={formatNotificationTime(notification.created)}
          />
        ))}
        {friendRequests.length > 0 && otherNotifications.length > 0 ? (
          <Line />
        ) : undefined}
        {otherNotifications.map((notification) => {
          switch (notification.type) {
            case 'ARTICLE_OPEN':
              return (
                <SeasonalNotify
                  key={notification.id}
                  seasonName={notification.message}
                  createdAt={formatNotificationTime(notification.created)}
                />
              );
            case 'ARTICLE_FEEDBACK':
              return (
                <FriendReaction
                  key={notification.id}
                  articleId={notification.message}
                  profileName={notification.profile.nickname}
                  profileImageUrl={notification.profile.image}
                  createdAt={formatNotificationTime(notification.created)}
                />
              );
            case 'FRIENDSHIP_ACCEPTED':
              return (
                <FriendAccepted
                  key={notification.id}
                  profileName={notification.profile.nickname}
                  profileImageUrl={notification.profile.image}
                  createdAt={formatNotificationTime(notification.created)}
                />
              );
            default:
              return undefined;
          }
        })}

        <div ref={focusElementRef} />
      </NotificationContainer>
    </Layout>
  );
};

export default NotificationPage;

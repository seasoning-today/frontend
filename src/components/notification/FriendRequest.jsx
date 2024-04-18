import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

import useFallBackImage from '@utils/hooks/useFallBackImage';

const Layout = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  column-gap: 1rem;

  background-color: white;
`;

const ProfileImage = styled.img`
  width: 2.9375rem;
  height: 2.9375rem;
  border-radius: 50%;

  flex-shrink: 0;

  background-color: green;
`;

const Content = styled.div`
  flex-grow: 1;

  .notification__name {
    margin-right: 0.25rem;

    color: #333;
    font-family: 'Apple SD Gothic Neo';
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .notification__content {
    color: #333;
    font-family: 'Apple SD Gothic Neo';
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .notification__time {
    margin-left: 0.5rem;

    color: #bfbfbf;
    font-family: 'Apple SD Gothic Neo';
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const ButtonContainer = styled.div`
  width: auto;
  display: flex;
  column-gap: 0.5rem;
  flex-shrink: 0;

  .notification__button__approve {
    color: white;
    background-color: #0d6b38;
  }

  .notification__button__decline {
    color: black;
    background-color: #f0f0f0;
  }
`;

const Button = styled.div`
  min-width: 3.4375rem;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  padding: 0.3rem 0.7rem;

  span {
    text-align: center;
    font-family: 'Apple SD Gothic Neo';
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  &:hover {
    cursor: pointer;
  }
`;

const FriendRequest = ({
  profileName,
  profileImageUrl,
  friendId,
  setNotifications,
  createdAt,
}) => {
  const { onLoadFallBackImage } = useFallBackImage();

  const handleFriendRequest = async (action) => {
    const accessToken = localStorage.getItem('accessToken');

    try {
      if (action === 'accept') {
        const acceptResponse = await axios.post(
          `/api/friend/add/accept`,
          {
            id: friendId,
          },
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );
      } else if (action === 'decline') {
        const declineResponse = await axios.delete(`/api/friend/add/decline`, {
          data: {
            id: friendId,
          },
          headers: { Authorization: `Bearer ${accessToken}` },
        });
      }

      const size = 10;
      const lastId = '';
      const notificationResponse = await axios.get(
        `/api/notification?size=${size}&lastId=${lastId}`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      setNotifications(notificationResponse.data);
    } catch (error) {
      console.error('Error handling friend request:', error);
    }
  };

  return (
    <Layout>
      <ProfileImage src={profileImageUrl} onError={onLoadFallBackImage} />

      <Content>
        <span className="notification__name">{profileName}</span>
        <span className="notification__content">
          님에게서 친구신청이 왔습니다
        </span>
        <span className="notification__time">{createdAt}</span>
      </Content>

      <ButtonContainer>
        <Button
          className="notification__button__approve"
          onClick={() => {
            handleFriendRequest('accept');
          }}
        >
          <span>수락</span>
        </Button>
        <Button
          className="notification__button__decline"
          onClick={() => {
            handleFriendRequest('decline');
          }}
        >
          <span>거절</span>
        </Button>
      </ButtonContainer>
    </Layout>
  );
};

export default FriendRequest;

import React, { useState } from 'react';
import styled from 'styled-components';

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

const Content = styled.p`
  flex-grow: 1;

  .notification__name {
    margin-right: 0.25rem;

    color: #333;
    font-family: AppleSDGothicNeo;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .notification__content {
    color: #333;
    font-family: AppleSDGothicNeo;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .notification__time {
    margin-left: 0.5rem;

    color: #bfbfbf;
    font-family: AppleSDGothicNeo;
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
    font-family: AppleSDGothicNeo;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  &:hover {
    cursor: pointer;
  }
`;

const FriendRequest = ({ accountId, profileName, profileImageUrl, time }) => {
  const [friendshipAccepted, setFriendshipAccepted] = useState([]);

  const handleFriendRequest = async (action) => {
    const accessToken = localStorage.getItem('accessToken');

    try {
      const size = 10;
      const lastId = '';

      const response = await axios.get(
        `/api/notification?size=${size}&lastId=${lastId}`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );

      const friendshipAcceptedData = response.data.filter(
        (notification) => notification.type === 'FRIENDSHIP_ACCEPTED'
      );

      setFriendshipAccepted(friendshipAcceptedData);
    } catch (error) {
      console.error('Error fetching friend requests:', error);
    }

    try {
      if (action === 'accept') {
        await axios.put(
          `/api/friend/add/accept`,

          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );
        setFriendshipAccepted([...friendshipAccepted, {}]);
      } else if (action === 'decline') {
        await axios.delete(
          `/api/friend/add/decline`,

          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );
      }
    } catch (error) {
      console.error('Error handling friend request:', error);
    }
  };

  return (
    <Layout>
      {profileImageUrl !== false ? (
        <ProfileImage src={profileImageUrl} />
      ) : (
        <ProfileImage />
      )}

      <Content>
        <span className="notification__name">{profileName}</span>
        <span className="notification__content">
          님에게서 친구신청이 왔습니다
        </span>
        <span className="notification__time">{time}</span>
      </Content>

      <ButtonContainer>
        <Button
          className="notification__button__approve"
          onClick={() => handleFriendRequest('accept')}
        >
          <span>수락</span>
        </Button>
        <Button
          className="notification__button__decline"
          onClick={() => handleFriendRequest('decline')}
        >
          <span>거절</span>
        </Button>
      </ButtonContainer>
    </Layout>
  );
};

export default FriendRequest;

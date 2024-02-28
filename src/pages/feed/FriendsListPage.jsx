import React, { useState } from 'react';
import styled from 'styled-components';
import { useLoaderData } from 'react-router-dom';

import NavigationHeader from '@components/common/NavigationHeader';
import UserProfileBox from '@components/common/UserProfileBox';
import FriendDeleteModal from '@components/feed/FriendDeleteModal';

const Layout = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentArea = styled.div`
  position: relative;
  width: 100%;
  flex-grow: 1;
  padding: 1.75rem 1.5rem;

  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  overflow-x: hidden;
  overflow-y: auto;
`;

const List = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 5.1875rem;
  height: 1.6875rem;
  border-radius: 0.5rem;
  padding: 0.4rem 0.8rem;

  cursor: pointer;
  background-color: #f0f0f0;
  flex-shrink: 0;

  span {
    color: #1f1f1f;
    text-align: center;
    font-family: 'Apple SD Gothic Neo';
    font-size: 0.78rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const FriendsListPage = () => {
  const { friendListData } = useLoaderData();
  const [selectedFriendId, setSelectedFriendId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleFriendDelete = (friendId) => {
    setSelectedFriendId(friendId);
    setShowModal(true);
  };

  return (
    <Layout>
      {showModal && (
        <FriendDeleteModal
          friendId={selectedFriendId}
          onCloseModal={() => {
            setShowModal(false);
            setSelectedFriendId(null);
          }}
        />
      )}

      <NavigationHeader title="친구 목록" optionType="icon" />

      <ContentArea>
        {friendListData.map((friend, idx) => (
          <List key={idx}>
            <UserProfileBox
              key={idx}
              profileImage={friend.profileImageUrl}
              nickname={friend.nickname}
              accountId={friend.accountId}
            />
            <Button onClick={() => handleFriendDelete(friend.accountId)}>
              <span>친구 삭제</span>
            </Button>
          </List>
        ))}
      </ContentArea>
    </Layout>
  );
};

export default FriendsListPage;

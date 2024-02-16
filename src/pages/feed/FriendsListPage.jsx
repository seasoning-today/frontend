import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useLoaderData } from 'react-router-dom';

import UserProfileBox from '@components/common/UserProfileBox';

const Top = styled.div`
  position: relative;
  width: 100%;
  height: 3.3125rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #fff;

  h1 {
    margin: 0;
    padding: 0;

    color: #000;
    text-align: center;
    font-family: 'Apple SD Gothic Neo';
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .friends-list__backbutton {
    position: absolute;
    left: 1.12rem;
  }
`;

const ContentArea = styled.div`
  position: relative;
  width: 100%;
  height: calc(100% - 3.3125rem);
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
  background-color: var(--F0, #f0f0f0);
  flex-shrink: 0;

  span {
    color: var(--1F, #1f1f1f);
    text-align: center;
    font-family: 'Apple SD Gothic Neo';
    font-size: 0.78rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const FriendsListPage = () => {
  const { response } = useLoaderData();

  const deleteFriendRequest = async (friendId) => {
    const accessToken = localStorage.getItem('accessToken');

    try {
      const response = await axios.delete(`/api/friend/unfriend`, {
        data: {
          id: friendId,
        },
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      if (response.status === 200) {
        console.log('Friend request successfully deleted.');
      } else {
        // console.error('Unexpected response:', response);
      }
    } catch (error) {
      console.error('Error sending friend request:', error);
    }
  };

  return (
    <>
      <Top>
        <h1>친구 목록</h1>

        <div className="friends-list__backbutton">
          <Link to={`/feed`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9.17308 18.6635L2.5 11.9904L9.17308 5.31738L10.2173 6.36158L5.35377 11.2405H21.5096V12.7404H5.3634L10.2423 17.6193L9.17308 18.6635Z"
                fill="#333333"
              />
            </svg>
          </Link>
        </div>
      </Top>

      <ContentArea>
        {response.data.map((friend, idx) => (
          <List key={idx}>
            <UserProfileBox
              key={idx}
              profileImage={friend.profileImageUrl}
              nickname={friend.nickname}
              accountId={friend.accountId}
            />
            <Button onClick={() => deleteFriendRequest(friend.id)}>
              <span>친구 삭제</span>
            </Button>
          </List>
        ))}
      </ContentArea>
    </>
  );
};

export default FriendsListPage;

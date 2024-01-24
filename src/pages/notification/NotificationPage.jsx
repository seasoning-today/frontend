import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';

import FriendRequest from '@components/notification/FriendRequest';
import FriendReaction from '@components/notification/FriendReaction';
import SeasonalNotify from '@components/notification/SeasonalNotify';
import TabBar from '@components/common/TabBar';

const Top = styled.div`
  position: relative;
  width: 100%;
  height: 3.3125rem;

  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 0 1.31rem; */

  background-color: #fff;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.2);

  h1 {
    margin: 0;
    padding: 0;

    color: #000;
    text-align: center;

    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .friends-list__backbutton {
    position: absolute;
    left: 1.12rem;
  }
`;

const NotificationContainer = styled.div`
  width: 100%;
  height: calc(100% - 3.3125rem);

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.75rem 1.31rem;
  row-gap: 1.38rem;
  overflow-y: scroll;

  .line {
    width: calc(100% - 2.26rem);
    height: 0.0625rem;

    background-color: #e3e3e3;
  }
`;

const NotificationPage = () => {
  const { response } = useLoaderData();
  console.log(response);

  const mockRequest = [
    {
      nickname: '최어진',
      profileImageUrl:
        'https://mblogthumb-phinf.pstatic.net/MjAxNzA4MjJfMjcw/MDAxNTAzMzU1NTI5Mjg0.OBV0OZkJQHRZzIWAtVDM60JLl9wq5WwiwnRTwgYqDq4g.II9maLicfuatQ8bxN7F6uUt1ZVa_95hP2OVB0Ig4uf8g.JPEG.doghter4our/IMG_0907.jpg?type=w800',
    },
  ];
  const mockNotis = [
    {
      nickname: '이세민',
      profileImageUrl:
        'https://mblogthumb-phinf.pstatic.net/MjAxNzA4MjJfMjcw/MDAxNTAzMzU1NTI5Mjg0.OBV0OZkJQHRZzIWAtVDM60JLl9wq5WwiwnRTwgYqDq4g.II9maLicfuatQ8bxN7F6uUt1ZVa_95hP2OVB0Ig4uf8g.JPEG.doghter4our/IMG_0907.jpg?type=w800',
    },
    {
      nickname: '최어진',
      profileImageUrl: false,
    },
    {
      nickname: '이세민',
      profileImageUrl:
        'https://mblogthumb-phinf.pstatic.net/MjAxNzA4MjJfMjcw/MDAxNTAzMzU1NTI5Mjg0.OBV0OZkJQHRZzIWAtVDM60JLl9wq5WwiwnRTwgYqDq4g.II9maLicfuatQ8bxN7F6uUt1ZVa_95hP2OVB0Ig4uf8g.JPEG.doghter4our/IMG_0907.jpg?type=w800',
    },
    {
      nickname: '최어진',
      profileImageUrl: false,
    },
  ];

  const [friendRequests, setFriendRequests] = useState(mockRequest);
  const [notifications, setNotifications] = useState(mockNotis);

  return (
    <>
      <Top>
        <h1>알림</h1>

        <div className="friends-list__backbutton">
          <Link to={`/home`}>
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

      <NotificationContainer>
        {friendRequests.map((req, idx) => (
          <FriendRequest
            key={idx}
            profileName={req.nickname}
            profileImageUrl={req.profileImageUrl}
          />
        ))}

        {friendRequests.length > 0 && notifications.length > 0 ? (
          <div className="line" />
        ) : undefined}

        {notifications.map((noti, idx) => (
          <FriendReaction
            key={idx}
            profileName={noti.nickname}
            profileImageUrl={noti.profileImageUrl}
          />
        ))}
        <SeasonalNotify seasonName={`입춘`} />
      </NotificationContainer>

      <TabBar />
    </>
  );
};

export default NotificationPage;

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import { useLoaderData } from 'react-router-dom';

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
  background-color: yellow;
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

const ContentArea = styled.div`
  position: relative;
  width: 100%;
  height: calc(100% - 3.3125rem);
  padding: 0rem 1.31rem 3.8125rem;

  display: flex;
  flex-direction: column;
  row-gap: 1.75rem;
  overflow-x: hidden;
  overflow-y: auto;

  background-color: blue;
`;

const FriendsListPage = () => {
  // const { response } = useLoaderData();
  // console.log(response);

  const mockData = [
    {
      nickname: '이세민',
      accountId: '@devvra1n',
      image:
        'https://mblogthumb-phinf.pstatic.net/MjAxNzA4MjJfMjcw/MDAxNTAzMzU1NTI5Mjg0.OBV0OZkJQHRZzIWAtVDM60JLl9wq5WwiwnRTwgYqDq4g.II9maLicfuatQ8bxN7F6uUt1ZVa_95hP2OVB0Ig4uf8g.JPEG.doghter4our/IMG_0907.jpg?type=w800',
    },
    {
      nickname: '최어진',
      accountId: '@poodlepoodle',
      image: false,
    },
    {
      nickname: '이세민',
      accountId: '@devvra1n',
      image:
        'https://mblogthumb-phinf.pstatic.net/MjAxNzA4MjJfMjcw/MDAxNTAzMzU1NTI5Mjg0.OBV0OZkJQHRZzIWAtVDM60JLl9wq5WwiwnRTwgYqDq4g.II9maLicfuatQ8bxN7F6uUt1ZVa_95hP2OVB0Ig4uf8g.JPEG.doghter4our/IMG_0907.jpg?type=w800',
    },
    {
      nickname: '최어진',
      accountId: '@poodlepoodle',
      image: false,
    },
    {
      nickname: '이세민',
      accountId: '@devvra1n',
      image:
        'https://mblogthumb-phinf.pstatic.net/MjAxNzA4MjJfMjcw/MDAxNTAzMzU1NTI5Mjg0.OBV0OZkJQHRZzIWAtVDM60JLl9wq5WwiwnRTwgYqDq4g.II9maLicfuatQ8bxN7F6uUt1ZVa_95hP2OVB0Ig4uf8g.JPEG.doghter4our/IMG_0907.jpg?type=w800',
    },
    {
      nickname: '최어진',
      accountId: '@poodlepoodle',
      image: false,
    },
  ];

  const [list, setList] = useState(mockData);

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

      <ContentArea></ContentArea>

      <TabBar />
    </>
  );

  return (
    <>
      <Title>친구 목록</Title>
      <Back>
        <Link to="/feed">
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
      </Back>
      <Hr />
      <Border>
        {list.map((friend) => (
          <ProfileBorder key={friend.accountId}>
            <Pic
              style={{ backgroundImage: `url(${friend.profileImageUrl})` }}
            />
            <PersonalData>
              <span style={{ fontSize: '0.875rem', color: '#333' }}>
                {`@${friend.nickname}`}
              </span>
              <br />
              <span
                style={{ fontSize: '0.75rem', color: '#C3C3C3' }}
              >{`@${friend.accountId}`}</span>
            </PersonalData>
          </ProfileBorder>
        ))}
      </Border>
    </>
  );
};

export default FriendsListPage;

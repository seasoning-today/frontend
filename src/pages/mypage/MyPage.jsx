import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import { useLoaderData } from 'react-router-dom';

import TabBar from '@components/common/TabBar';

const Layout = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  row-gap: 1.25rem;

  section {
    display: flex;
    padding: 0 1rem;
  }
`;

const ProfileBox = styled.div`
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 2.5rem;

  width: 100%;
  background: #fff;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.1);

  .mypage__personal-data {
    position: relative;

    display: flex;
    flex-direction: column;
    row-gap: 0.15rem;
  }

  h2 {
    color: #333;

    font-family: AppleSDGothicNeoEB00;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  span {
    color: #333;

    font-family: AppleSDGothicNeoM00;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  img {
    position: relative;

    width: 5.125rem;
    height: 5.125rem;
    background: #d9d9d9;
    border-radius: 50%;
  }
`;

const MenuBox = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  border-radius: 1.6875rem;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const Menu = styled(Link)`
  position: relative;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.25rem 1rem 1.5rem;

  font-family: AppleSDGothicNeoSB00;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #333;

  background-color: #fff;
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }

  &:not(:first-child) {
    border-top: 0.03125rem solid #f0f0f0;
  }

  span {
    color: #333;

    font-family: AppleSDGothicNeoSB00;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const Hr = styled.div`
  position: relative;

  width: 100%;
  height: 0.05rem;
  background: #f0f0f0;
`;

const MyPage = () => {
  // const { response } = useLoaderData();
  // console.log(response.data);

  const mockData = {
    nickname: '김수영',
    accountId: '@kimsuyoung',
    profileImageUrl:
      'https://mblogthumb-phinf.pstatic.net/MjAxNzA4MjJfMjcw/MDAxNTAzMzU1NTI5Mjg0.OBV0OZkJQHRZzIWAtVDM60JLl9wq5WwiwnRTwgYqDq4g.II9maLicfuatQ8bxN7F6uUt1ZVa_95hP2OVB0Ig4uf8g.JPEG.doghter4our/IMG_0907.jpg?type=w800',
  };
  const [userData, setUserData] = useState(mockData);

  return (
    <Layout>
      <ProfileBox>
        <div className="mypage__personal-data">
          <h2>{userData.nickname}</h2>
          <span>{userData.accountId}</span>
        </div>

        {userData.profileImageUrl !== false ? (
          <img src={userData.profileImageUrl} />
        ) : (
          <img />
        )}
      </ProfileBox>

      <section>
        <MenuBox>
          <Menu>
            <span>공지사항</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12.9462 11.9995L8.34619 7.39953L9.40002 6.3457L15.0538 11.9995L9.40002 17.6534L8.34619 16.5995L12.9462 11.9995Z"
                fill="#BFBFBF"
              />
            </svg>
          </Menu>
          <Menu to="/mypage/edit">
            <span>정보수정</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12.9462 11.9995L8.34619 7.39953L9.40002 6.3457L15.0538 11.9995L9.40002 17.6534L8.34619 16.5995L12.9462 11.9995Z"
                fill="#BFBFBF"
              />
            </svg>
          </Menu>
        </MenuBox>
      </section>

      <section>
        <MenuBox>
          <Menu>
            <span>아이디 검색 허용</span>
          </Menu>
        </MenuBox>
      </section>

      <TabBar />
    </Layout>
  );
};

export default MyPage;

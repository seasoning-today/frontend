import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';

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
  background-color: #fff;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.2);

  .mypage__personal-data {
    position: relative;

    display: flex;
    flex-direction: column;
    row-gap: 0.25rem;
  }

  h2 {
    color: #333;
    font-family: AppleSDGothicNeo;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  span {
    color: #333;
    font-family: AppleSDGothicNeo;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  img {
    position: relative;
    object-fit: cover;
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

  border-radius: 1rem;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

const LinkMenu = styled(Link)`
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

  cursor: pointer;

  &:not(:first-child) {
    border-top: 0.03125rem solid #f0f0f0;
  }

  span {
    font-family: AppleSDGothicNeo;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .mypage__logout__menu {
    color: #cc0025;
  }
`;

const ActionMenu = styled.div`
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

  cursor: pointer;

  &:not(:first-child) {
    border-top: 0.03125rem solid #f0f0f0;
  }

  span {
    font-family: AppleSDGothicNeo;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .mypage__logout__menu {
    color: #cc0025;
  }
`;

const MyPage = () => {
  const { response } = useLoaderData();
  const [userData, setUserData] = useState(response.data);
  const navigate = useNavigate();

  const onClickLogout = () => {
    localStorage.clear();
    navigate(`/login`);
  };

  return (
    <Layout>
      <ProfileBox>
        <div className="mypage__personal-data">
          <h2>{userData.nickname}</h2>
          <span>{`@${userData.accountId}`}</span>
        </div>

        {userData.profileImageUrl !== false ? (
          <img src={userData.profileImageUrl} />
        ) : (
          <img />
        )}
      </ProfileBox>

      <section>
        <MenuBox>
          <LinkMenu to={`/mypage/edit`}>
            <span>프로필 수정</span>
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
          </LinkMenu>
          <LinkMenu>
            <span>계정 설정</span>
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
          </LinkMenu>
        </MenuBox>
      </section>

      <section>
        <MenuBox>
          <LinkMenu>
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
          </LinkMenu>
        </MenuBox>
      </section>

      <section>
        <MenuBox>
          <ActionMenu onClick={onClickLogout}>
            <span className="mypage__logout__menu">로그아웃</span>
          </ActionMenu>
        </MenuBox>
      </section>

      <TabBar />
    </Layout>
  );
};

export default MyPage;

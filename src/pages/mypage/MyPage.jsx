import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';

const MyProfile = styled.div`
  position: relative;
  display: flex;
  margin-top: 3rem;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  width: 24.375rem;
  height: 9.125rem;
  background: #fff;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.1);
`;

const PersonalData = styled.div`
  position: relative;
  text-align: left;
  margin: 1rem;

  font-family: AppleSDGothicNeoEB00;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #333;
`;

const Pic = styled.div`
  position: relative;
  margin: 1rem;

  width: 6rem;
  height: 6rem;
  background: #d9d9d9;
  border-radius: 5rem;
`;

const MenuBox = styled.div`
  position: relative;
  display: flex;
  margin: 3rem auto;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  width: 22.375rem;
  height: 6.75rem;
  border-radius: 1.6875rem;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.1);
`;

const Menu = styled(Link)`
  position: relative;
  display: flex;
  margin: auto;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  font-family: AppleSDGothicNeoSB00;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #333;

  :hover {
    cursor: pointer;
  }

  text-decoration: none;
`;

const Hr = styled.div`
  position: relative;

  width: 19.875rem;
  height: 0.05rem;
  background: #f0f0f0;
`;

const MyPage = () => {
  //const { response } = useLoaderData();
  //console.log(response.data);
  //const [userData, setUserData] = useState(response.data);

  return (
    <>
      <MyProfile>
        <PersonalData>
          <span style={{ fontSize: '1.25rem' }}>{userData.nickname}</span>
          <br />
          <span
            style={{ fontSize: '0.875rem' }}
          >{`@${userData.accountId}`}</span>
        </PersonalData>
        <Pic style={{ backgroundImage: `url(${userData.profileImageUrl})` }} />
      </MyProfile>
      <MenuBox>
        <Menu>
          <div
            style={{
              marginRight: '13rem',
            }}
          >
            공지사항
          </div>
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
        <Hr></Hr>
        <Menu to="/mypage/edit">
          <div
            style={{
              marginRight: '13rem',
            }}
          >
            정보수정
          </div>

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
    </>
  );
};

export default MyPage;

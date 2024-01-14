import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import { useLoaderData } from 'react-router-dom';

const Back = styled.div`
  position: relative;
  display: flex;
  margin-top: -1.5rem;
  margin-left: 1.5rem;

  :hover {
    cursor: pointer;
  }
`;

const Title = styled.div`
  position: relative;
  text-align: center;
  margin-top: 2rem;

  font-family: 'AppleSDGothicNeoEB00';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #000;
`;

const Hr = styled.div`
  position: relative;
  margin: 1rem auto;

  width: 23.125rem;
  height: 0.03125rem;
  background: #d7d7d7;
`;

const Border = styled.div`
  position: relative;
  margin: 1rem auto;
  overflow-x: hidden;
  overflow-y: auto;

  width: 22.625rem;
  height: 40.375rem;
  //border: 1px solid #000;
`;

const ProfileBorder = styled.div`
  position: relative;
  display: flex;
  margin: 1rem auto;
  flex-direction: row;
  align-items: center;

  width: 21.75rem;
  height: 3.75rem;
  //border: 1px solid #000;
`;

const Pic = styled.div`
  position: relative;
  margin-left: 0.5rem;

  width: 3rem;
  height: 3rem;
  background: #d9d9d9;
  border-radius: 3rem;
`;

const PersonalData = styled.div`
  position: relative;
  margin: 1rem;
  text-align: left;

  font-family: AppleSDGothicNeoEB00;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #333;
`;

const FriendsListPage = () => {
  // const { response } = useLoaderData();
  // console.log(response);

  const [list, setList] = useState([]);

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

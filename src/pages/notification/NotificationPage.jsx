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

  width: 23.375rem;
  height: 40.375rem;
  // border: 1px solid #000;
`;

const FriendRequest = styled.div`
  position: relative;
  display: flex;
  margin: 0.7rem auto;
  flex-direction: row;
  align-items: center;

  width: 22.75rem;
  height: 4.25rem;
  // border: 1px solid #000;
`;

const Pic = styled.div`
  position: relative;
  margin-left: 0.5rem;

  width: 3rem;
  height: 3rem;
  background: #d9d9d9;
  border-radius: 3rem;
`;

const FContent = styled.div`
  position: relative;
  margin: 0.5rem;
  text-align: left;

  font-family: AppleSDGothicNeoEB00;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #333;

  max-width: 9.8rem;
  word-wrap: break-word;
`;

const AcceptOrNot = styled.div`
  position: relative;
  justify-content: center;
  display: flex;
  align-items: center;
  margin: 0.3rem;

  width: 3.4375rem;
  height: 1.6875rem;
  border-radius: 0.5rem;

  font-family: AppleSDGothicNeoM00;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;

  :hover {
    cursor: pointer;
  }
`;

const Notification = styled.div`
  position: relative;
  display: flex;
  margin: 0.7rem auto;
  flex-direction: row;
  align-items: center;

  width: 22.75rem;
  height: 4.25rem;
  //border: 1px solid #000;
`;

const NContent = styled.div`
  position: relative;
  margin: 0.5rem;
  text-align: left;

  font-family: AppleSDGothicNeoEB00;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #333;
`;

const NotificationPage = () => {
  // const { response } = useLoaderData();
  // console.log(response);

  const [Requests, setRequests] = useState([]);
  const [notifications, setNotifications] = useState([]);

  return (
    <>
      <Title>알림</Title>
      <Back>
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
      </Back>
      <Hr />
      <Border>
        {Requests.map((request, index) => (
          <FriendRequest key={index}>
            <Pic style={{ backgroundImage: `url(${request.image})` }} />
            <FContent>
              <span>{`${request.nickname} 님에게서 친구신청이 왔습니다`}</span>

              <span style={{ fontSize: '0.75rem', color: '#BFBFBF' }}>
                <br />
                12시간 전
              </span>
            </FContent>
            <AcceptOrNot style={{ color: '#fff', background: '#0d6b38' }}>
              <div>수락</div>
            </AcceptOrNot>
            <AcceptOrNot style={{ color: '#333', background: '#f0f0f0' }}>
              <div>거절</div>
            </AcceptOrNot>
          </FriendRequest>
        ))}
        <Hr />

        {notifications.map((notification, index) => (
          <Notification key={index}>
            <Pic style={{ backgroundImage: `url(${notification.image})` }} />
            <NContent>
              <span>{`${notification.text}`}</span>
              <span style={{ fontSize: '0.75rem', color: '#BFBFBF' }}>
                <br />
                12시간 전
              </span>
            </NContent>
          </Notification>
        ))}
      </Border>
    </>
  );
};

export default NotificationPage;

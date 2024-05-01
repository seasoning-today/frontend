import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Textarea from 'react-textarea-autosize';
import { useLoaderData } from 'react-router-dom';

import NavigationHeader from '@components/common/NavigationHeader';

const Layout = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonContainer = styled.div`
  width: 100%;
  height: 4rem;
  padding: 0.5rem 0.75rem;

  .new-notice {
    width: 100%;
    height: 100%;
    border: 1px solid #ccc;
    border-radius: 0.75rem;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    color: #333;
    background-color: white;
  }
`;

const NoticeContainer = styled.div`
  width: 100%;
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.12rem 0.63rem;
  row-gap: 0.63rem;
  overflow-y: scroll;
`;

const NoticeLayout = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: space-between;
  row-gap: 1rem;
  padding: 1rem;
  border-radius: 0.75rem;
  border: 1px solid #ccc;

  .notice-top {
    position: relative;

    display: flex;
    flex-direction: column;
  }

  .notice-date {
    margin-top: 0.75rem;

    text-align: left;
    color: #8c8c8c;
    font-family: 'Apple SD Gothic Neo';
    font-size: 0.6875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  svg {
    position: absolute;
    top: 0.25rem;
    right: 0.15rem;
  }

  .notice-bottom {
    position: relative;
    width: 100%;

    display: flex;
    column-gap: 1rem;
  }
`;

const Text = styled(Textarea)`
  width: 100%;
  min-height: 1.2rem;
  flex-shrink: 0;

  border: none;
  outline: none;
  resize: none;
  background-color: ${({ readOnly }) => (!readOnly ? `#ececec` : `white`)};

  text-align: left;
  color: #333;
  font-family: 'Apple SD Gothic Neo';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  white-space: pre-wrap;
`;

const Button = styled.div`
  width: 100%;
  padding: 0.75rem 1.25rem;
  border-radius: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ active }) => (active ? `skyblue` : `#dfdfdf`)};

  color: #333;
  font-family: 'Apple SD Gothic Neo';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const parseDate = (dateString) => {
  const noticeDate = new Date(dateString);
  const year = noticeDate.getFullYear();
  const month = `0${noticeDate.getMonth() + 1}`.slice(-2);
  const day = `0${noticeDate.getDate()}`.slice(-2);

  return `${year}/${month}/${day}`;
};

const Notice = ({ id, content, date }) => {
  const [folded, setFolded] = useState(false);
  const [contentChanged, setContentChanged] = useState(false);

  const toggleNotice = (event) => {
    if (!folded) {
      setFolded((folded) => !folded);
    } else {
      if (event.target === event.currentTarget) {
        setFolded((folded) => !folded);
      }
    }
  };

  const clickButton = () => {
    if (!contentChanged) {
      return;
    }

    alert('수정되었습니다.');
    setFolded(false);
  };

  return (
    <NoticeLayout onClick={toggleNotice}>
      <div className="notice-top">
        <Text
          readOnly={!folded}
          onChange={(e) => handleTextChange(e.target.value)}
        >
          {content}
        </Text>
        <span className="notice-date">{parseDate(date)}</span>
        {!folded && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9"
            height="5"
            viewBox="0 0 9 5"
            fill="none"
          >
            <mask
              id="mask0_2024_1182"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="9"
              height="5"
            >
              <mask id="path-1-inside-1_2024_1182" fill="white">
                <path d="M8.3871 0L4.19355 5L0 0H8.3871Z" />
              </mask>
              <path d="M8.3871 0L4.19355 5L0 0H8.3871Z" fill="#02211D" />
              <path
                d="M8.3871 0L11.4519 2.57045C12.4507 1.37951 12.6692 -0.282235 12.0121 -1.69089C11.3551 -3.09954 9.94146 -4 8.3871 -4V0ZM4.19355 5L1.12878 7.57045C1.88879 8.47662 3.01086 9 4.19355 9C5.37624 9 6.4983 8.47662 7.25831 7.57045L4.19355 5ZM0 0V-4C-1.55436 -4 -2.96798 -3.09954 -3.62504 -1.69089C-4.2821 -0.282235 -4.06362 1.37951 -3.06477 2.57045L0 0ZM5.32233 -2.57045L1.12878 2.42955L7.25831 7.57045L11.4519 2.57045L5.32233 -2.57045ZM7.25831 2.42955L3.06477 -2.57045L-3.06477 2.57045L1.12878 7.57045L7.25831 2.42955ZM0 4H8.3871V-4H0V4Z"
                fill="white"
                mask="url(#path-1-inside-1_2024_1182)"
              />
            </mask>
            <g mask="url(#mask0_2024_1182)">
              <path
                d="M-4.19336 -7.91602H12.5808V12.084H-4.19336V-7.91602Z"
                fill="#02211D"
              />
            </g>
          </svg>
        )}
      </div>

      {folded && (
        <div className="notice-bottom">
          <Button onClick={clickButton} active={contentChanged}>
            확인
          </Button>
          <Button>삭제</Button>
        </div>
      )}
    </NoticeLayout>
  );
};

const NoticeAdminPage = () => {
  const { noticeData } = useLoaderData();
  console.log(noticeData);
  const sampleNoticeData = [
    {
      date: '2024-02-19T23:28:46',
      content: '공지사항입니다.',
    },
    {
      date: '2024-02-19T23:28:46',
      content: '공지사항입니다.',
    },
    {
      date: '2024-02-19T23:28:46',
      content: '공지사항입니다.',
    },
  ];
  const [notices, setNotices] = useState(noticeData);
  // const [notices, setNotices] = useState(sampleNoticeData);

  const issueNewNotice = async () => {
    const accessToken = localStorage.getItem('accessToken');

    try {
      const acceptResponse = await axios.post(
        `/api/notice`,
        '새 공지사항 테스트',
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );

      alert('새 공지사항이 발행되었습니다.');
      // setNotifications(notificationResponse.data);
    } catch (error) {
      console.error('Error handling fetch notices:', error);
    }
  };

  return (
    <Layout>
      <NavigationHeader title="공지사항 관리" optionType="icon" />

      <ButtonContainer>
        <div className="new-notice" onClick={issueNewNotice}>
          새 공지사항 발행
        </div>
      </ButtonContainer>

      <NoticeContainer>
        {notices.map((notice, idx) => (
          <Notice
            key={idx}
            id={notice.id}
            content={notice.content}
            date={parseDate(notice.date)}
          />
        ))}
      </NoticeContainer>
    </Layout>
  );
};

export default NoticeAdminPage;

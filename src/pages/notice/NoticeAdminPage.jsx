import React from 'react';
import styled from 'styled-components';
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
  row-gap: 1.56rem;
  overflow-y: scroll;

  background-color: yellow;
`;

const Notice = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  .notice__content {
    width: 100%;

    padding: 0 0.63rem;

    text-align: left;
    color: #333;
    font-family: 'Apple SD Gothic Neo';
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    white-space: pre-wrap;
  }

  .notice__date {
    width: 100%;

    padding: 0 0.63rem;
    margin-top: 0.75rem;

    text-align: left;
    color: #8c8c8c;
    font-family: 'Apple SD Gothic Neo';
    font-size: 0.6875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .notice__line {
    width: 100%;
    min-height: 0.03125rem;

    margin-top: 1rem;

    background-color: #a9a9a9;
  }
`;

const NoticeAdminPage = () => {
  const { noticeData } = useLoaderData();
  console.log(noticeData);

  const parseDate = (dateString) => {
    const noticeDate = new Date(dateString);
    const year = noticeDate.getFullYear();
    const month = `0${noticeDate.getMonth() + 1}`.slice(-2);
    const day = `0${noticeDate.getDate()}`.slice(-2);

    return `${year}/${month}/${day}`;
  };

  const issueNewNotice = () => {
    alert('새 공지사항이 발행되었습니다.');
    return;
  };

  return (
    <Layout>
      <NavigationHeader title="공지사항 관리" optionType="icon" />

      <ButtonContainer>
        <div className="new-notice" onClick={issueNewNotice}>
          새 공지사항 발행
        </div>
      </ButtonContainer>

      <NoticeContainer></NoticeContainer>
    </Layout>
  );
};

export default NoticeAdminPage;

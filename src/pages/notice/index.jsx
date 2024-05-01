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

const NoticeContainer = styled.div`
  width: 100%;
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.12rem 0.63rem;
  row-gap: 1.56rem;
  overflow-y: scroll;

  .notice__empty {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    color: #8c8c8c;
    text-align: center;
    font-family: 'Apple SD Gothic Neo';
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
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

    overflow: auto;
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

const NoticePage = () => {
  const { noticeData } = useLoaderData();

  const parseDate = (dateString) => {
    const noticeDate = new Date(dateString);
    const year = noticeDate.getFullYear();
    const month = `0${noticeDate.getMonth() + 1}`.slice(-2);
    const day = `0${noticeDate.getDate()}`.slice(-2);

    return `${year}/${month}/${day}`;
  };

  return (
    <Layout>
      <NavigationHeader title="공지사항" optionType="icon" />

      <NoticeContainer>
        {noticeData.length > 0 ? (
          noticeData.map((notice, idx) => (
            <Notice key={idx}>
              <span className="notice__content">{notice.content}</span>
              <span className="notice__date">{parseDate(notice.date)}</span>
              <div className="notice__line" />
            </Notice>
          ))
        ) : (
          <div className="notice__empty">
            <span>현재 공지사항이 없습니다.</span>
          </div>
        )}
      </NoticeContainer>
    </Layout>
  );
};

export default NoticePage;

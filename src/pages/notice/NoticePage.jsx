import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';

const Top = styled.div`
  position: relative;
  width: 100%;
  height: 3.3125rem;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1.31rem;

  background-color: #fff;

  h1 {
    margin: 0;
    padding: 0;

    color: #000;
    text-align: center;

    font-family: 'Apple SD Gothic Neo';
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .notice__backbutton {
    position: absolute;
    left: 1.12rem;
  }
`;

const NoticeContainer = styled.div`
  width: 100%;
  height: calc(100% - 3.3125rem);

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
    font-size: 0.6875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 135%;
  }

  .notice__date {
    width: 100%;

    padding: 0 0.63rem;
    margin-top: 0.62rem;

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

    margin-top: 1.12rem;

    background-color: #a9a9a9;
  }
`;

const NoticePage = () => {
  const { noticeData } = useLoaderData();

  return (
    <>
      <Top>
        <h1>공지사항</h1>

        <div className="notice__backbutton">
          <Link to={`/mypage`}>
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

      <NoticeContainer>
        {noticeData.length > 0 ? (
          noticeData.map((notice, idx) => (
            <Notice key={idx}>
              <span className="notice__content">{notice.content}</span>
              <span className="notice__date">{notice.date}</span>
              <div className="notice__line" />
            </Notice>
          ))
        ) : (
          <div className="notice__empty">
            <span>현재 공지사항이 없습니다.</span>
          </div>
        )}
      </NoticeContainer>
    </>
  );
};

export default NoticePage;

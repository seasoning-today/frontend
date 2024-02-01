import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';

import TabBar from '@components/common/TabBar';

const Top = styled.div`
  position: relative;
  width: 100%;
  height: 3.3125rem;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1.31rem;

  background-color: #fff;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.2);

  h1 {
    margin: 0;
    padding: 0;

    color: #000;
    text-align: center;

    font-family: AppleSDGothicNeo;
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
  padding: 0 1.31rem 3.8125rem;
  row-gap: 1.38rem;
  overflow-y: scroll;

  .line {
    width: calc(100% - 2.26rem);
    height: 0.0625rem;

    background-color: #e3e3e3;
  }

  .notice__empty {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    color: #8c8c8c;
    text-align: center;
    font-family: AppleSDGothicNeo;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const NoticePage = () => {
  const { response } = useLoaderData();
  console.log(response);

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
        <div className="notice__empty">
          <span>현재 공지사항이 없습니다.</span>
        </div>
      </NoticeContainer>

      <TabBar />
    </>
  );
};

export default NoticePage;

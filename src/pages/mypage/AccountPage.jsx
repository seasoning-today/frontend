import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';

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

  .account__backbutton {
    position: absolute;
    left: 1.12rem;
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

const ActionMenu = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.25rem 1rem 1.5rem;

  font-family: AppleSDGothicNeo;
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

  .important__menu {
    color: #cc0025;
  }
`;

const AccountPage = () => {
  const { response } = useLoaderData();
  console.log(response);

  const onClickWithdraw = () => {
    alert('탈퇴 기능 구현 중...');
  };

  return (
    <Layout>
      <Top>
        <h1>계정 설정</h1>

        <div className="account__backbutton">
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

      <section>
        <MenuBox>
          <ActionMenu>
            <span>아이디 검색 허용</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="20"
              viewBox="0 0 36 20"
              fill="none"
            >
              <g filter="url(#filter0_i_1311_4124)">
                <rect width="36" height="20" rx="10" fill="#D9D9D9" />
              </g>
              <circle cx="10" cy="10" r="8" fill="white" />
              <defs>
                <filter
                  id="filter0_i_1311_4124"
                  x="0"
                  y="0"
                  width="36"
                  height="22"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="2" />
                  <feGaussianBlur stdDeviation="1" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow_1311_4124"
                  />
                </filter>
              </defs>
            </svg>
          </ActionMenu>
        </MenuBox>
      </section>

      <section>
        <MenuBox>
          <ActionMenu onClick={onClickWithdraw}>
            <span className="important__menu">회원 탈퇴</span>
          </ActionMenu>
        </MenuBox>
      </section>

      <TabBar />
    </Layout>
  );
};

export default AccountPage;

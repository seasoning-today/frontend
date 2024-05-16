import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

  font-family: 'Apple SD Gothic Neo';
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
    font-family: 'Apple SD Gothic Neo';
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .important__menu {
    color: #cc0025;
  }
`;

const DevelopPage = () => {
  const copyAccessToken = () => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken === null) {
      alert('토큰이 존재하지 않습니다.');
      return;
    }

    navigator.clipboard
      .writeText(accessToken)
      .then(() => {
        alert('토큰이 복사되었습니다.');
      })
      .catch((err) => {
        alert('토큰이 존재하나, 제대로 복사되지 않았습니다.', err);
      });
  };

  return (
    <Layout>
      <Top>
        <h1>개발자 페이지</h1>

        <div className="account__backbutton">
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
        </div>
      </Top>

      <section>
        <MenuBox>
          <ActionMenu onClick={copyAccessToken}>
            <span className="important__menu">액세스 토큰 복사하기</span>
          </ActionMenu>
        </MenuBox>
      </section>
    </Layout>
  );
};

export default DevelopPage;

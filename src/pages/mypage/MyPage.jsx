import React from 'react';
import styled from 'styled-components';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';

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

  .mypage__line {
    width: calc(100% - 2.5rem);
    height: 0.03125rem;

    background-color: #f0f0f0;
  }
`;

const ProfileBox = styled.div`
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 2.5rem;

  width: 100%;
  background-color: #fff;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.2);

  .mypage__personal-data {
    position: relative;

    display: flex;
    flex-direction: column;
    row-gap: 0.25rem;
  }

  h2 {
    color: #333;
    font-family: 'Apple SD Gothic Neo';
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  span {
    color: #333;
    font-family: 'Apple SD Gothic Neo';
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  img {
    position: relative;
    object-fit: cover;
    width: 5.125rem;
    height: 5.125rem;
    background: #d9d9d9;
    border-radius: 50%;
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

const LinkMenu = styled(Link)`
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

const Footer = styled.footer`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 0.5rem;
  padding-top: 1rem;

  .row {
    display: flex;
    align-items: center;
    column-gap: 0.2rem;
  }

  svg {
    width: 0.8rem;
    height: 0.8rem;
    vertical-align: center;
  }

  span {
    color: #8c8c8c;
    font-family: 'Apple SD Gothic Neo';
    font-size: 0.625rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const MyPage = () => {
  const { userData } = useLoaderData();
  const navigate = useNavigate();

  const onClickLogout = () => {
    localStorage.clear();
    navigate(`/login`);
  };

  return (
    <Layout>
      <ProfileBox>
        <div className="mypage__personal-data">
          <h2>{userData.nickname}</h2>
          <span>{`@${userData.accountId}`}</span>
        </div>

        <img src={userData.image} />
      </ProfileBox>

      <section>
        <MenuBox>
          <LinkMenu to={`/mypage/edit`}>
            <span>프로필 수정</span>
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
          </LinkMenu>
          <div className="mypage__line" />
          <LinkMenu to={`/mypage/account`}>
            <span>계정 설정</span>
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
          </LinkMenu>
        </MenuBox>
      </section>

      <section>
        <MenuBox>
          <LinkMenu to={`/notice`}>
            <span>공지사항</span>
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
          </LinkMenu>
        </MenuBox>
      </section>

      <section>
        <MenuBox>
          <ActionMenu onClick={onClickLogout}>
            <span className="important__menu">로그아웃</span>
          </ActionMenu>
        </MenuBox>
      </section>

      <Footer>
        <span>
          대표자 : 김동철 | 사업자등록번호 : 228-30-01619 | 호스팅제공자 :
          메가존(주)
        </span>
        <div className="row">
          <div className="row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M11.667 2.33398H2.33366C1.69199 2.33398 1.17283 2.85898 1.17283 3.50065L1.16699 10.5007C1.16699 11.1423 1.69199 11.6673 2.33366 11.6673H11.667C12.3087 11.6673 12.8337 11.1423 12.8337 10.5007V3.50065C12.8337 2.85898 12.3087 2.33398 11.667 2.33398ZM11.4337 4.81315L7.30949 7.39148C7.12283 7.50815 6.87783 7.50815 6.69116 7.39148L2.56699 4.81315C2.5085 4.78032 2.45728 4.73595 2.41643 4.68275C2.37558 4.62954 2.34595 4.5686 2.32933 4.50362C2.31271 4.43863 2.30945 4.37095 2.31975 4.30466C2.33005 4.23838 2.35369 4.17488 2.38924 4.11799C2.42479 4.06111 2.47151 4.01203 2.52658 3.97373C2.58165 3.93543 2.64392 3.9087 2.70961 3.89516C2.77531 3.88162 2.84307 3.88155 2.9088 3.89495C2.97452 3.90836 3.03685 3.93496 3.09199 3.97315L7.00033 6.41732L10.9087 3.97315C10.9638 3.93496 11.0261 3.90836 11.0919 3.89495C11.1576 3.88155 11.2253 3.88162 11.291 3.89516C11.3567 3.9087 11.419 3.93543 11.4741 3.97373C11.5291 4.01203 11.5759 4.06111 11.6114 4.11799C11.647 4.17488 11.6706 4.23838 11.6809 4.30466C11.6912 4.37095 11.6879 4.43863 11.6713 4.50362C11.6547 4.5686 11.6251 4.62954 11.5842 4.68275C11.5434 4.73595 11.4922 4.78032 11.4337 4.81315Z"
                fill="#A9A9A9"
              />
            </svg>
            <span>seasoningtoday@gmail.com</span>
          </div>

          <div className="row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.75 6.41667C1.75 4.21692 1.75 3.11675 2.43367 2.43367C3.11675 1.75 4.21692 1.75 6.41667 1.75H7.58333C9.78308 1.75 10.8832 1.75 11.5663 2.43367C12.25 3.11675 12.25 4.21692 12.25 6.41667V7.58333C12.25 9.78308 12.25 10.8832 11.5663 11.5663C10.8832 12.25 9.78308 12.25 7.58333 12.25H6.41667C4.21692 12.25 3.11675 12.25 2.43367 11.5663C1.75 10.8832 1.75 9.78308 1.75 7.58333V6.41667ZM10.5 4.375C10.5 4.60706 10.4078 4.82962 10.2437 4.99372C10.0796 5.15781 9.85706 5.25 9.625 5.25C9.39294 5.25 9.17038 5.15781 9.00628 4.99372C8.84219 4.82962 8.75 4.60706 8.75 4.375C8.75 4.14294 8.84219 3.92038 9.00628 3.75628C9.17038 3.59219 9.39294 3.5 9.625 3.5C9.85706 3.5 10.0796 3.59219 10.2437 3.75628C10.4078 3.92038 10.5 4.14294 10.5 4.375ZM8.16667 7.58333C8.16667 7.89275 8.04375 8.1895 7.82496 8.40829C7.60616 8.62708 7.30942 8.75 7 8.75C6.69058 8.75 6.39383 8.62708 6.17504 8.40829C5.95625 8.1895 5.83333 7.89275 5.83333 7.58333C5.83333 7.27391 5.95625 6.97717 6.17504 6.75838C6.39383 6.53958 6.69058 6.41667 7 6.41667C7.30942 6.41667 7.60616 6.53958 7.82496 6.75838C8.04375 6.97717 8.16667 7.27391 8.16667 7.58333ZM9.33333 7.58333C9.33333 8.20217 9.0875 8.79566 8.64992 9.23325C8.21233 9.67083 7.61884 9.91667 7 9.91667C6.38116 9.91667 5.78767 9.67083 5.35008 9.23325C4.9125 8.79566 4.66667 8.20217 4.66667 7.58333C4.66667 6.96449 4.9125 6.371 5.35008 5.93342C5.78767 5.49583 6.38116 5.25 7 5.25C7.61884 5.25 8.21233 5.49583 8.64992 5.93342C9.0875 6.371 9.33333 6.96449 9.33333 7.58333Z"
                fill="#A9A9A9"
              />
            </svg>
            <span>@seasoning_today</span>
          </div>
        </div>
      </Footer>

      <TabBar />
    </Layout>
  );
};

export default MyPage;

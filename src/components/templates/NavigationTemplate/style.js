import styled from 'styled-components';

export const Layout = styled.div`
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

export const ProfileBox = styled.div`
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

export const MenuBox = styled.div`
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

export const LinkMenu = styled(Link)`
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

export const ActionMenu = styled.div`
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

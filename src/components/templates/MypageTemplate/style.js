import styled from 'styled-components';

export const Layout = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  padding-top: 9.125rem;
  padding-bottom: 3.8125rem;
`;

export const ProfileContainer = styled.div`
  position: fixed;
  top: 0;

  width: 100%;
  max-width: 26.875rem;
  height: 9.125rem;

  display: flex;
  justify-content: space-between;
  padding: 2rem 2.5rem;

  background-color: #fff;
`;

export const ProfileColumn = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  row-gap: 0.25rem;
`;

export const MenuContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  padding: 1.25rem 1rem;
  row-gap: 1.25rem;
`;

export const Footer = styled.footer`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 0.5rem;
  padding: 1rem 1rem 4rem;

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

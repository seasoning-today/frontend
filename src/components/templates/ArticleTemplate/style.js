import styled from 'styled-components';

export const Layout = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5.8125rem;
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: auto;
  min-height: calc(100svh - 5.8125rem - 3.875rem);

  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1.25rem;
  padding: 1rem 1.31rem 2.25rem;
`;

export const Footer = styled.footer`
  position: relative;
  width: 100%;
  height: 3.875rem;
  flex-shrink: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.31rem;

  background-color: #fff;
  box-shadow: 0px -0.5px 1px 0px rgba(0, 0, 0, 0.1);
`;

export const EmojiButton = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0.15rem 0.3rem 0.15rem 0.2rem;
  column-gap: 0.32rem;

  cursor: pointer;
  border-radius: 0.3125rem;
  background-color: #f0f0f0;
`;

export const ProfileContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  column-gap: 1rem;

  .profile-column {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
  }
`;

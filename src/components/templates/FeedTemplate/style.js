import styled from 'styled-components';

export const Layout = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  padding-top: 3.3125rem;
  padding-bottom: 3.8125rem;
`;

export const MenuContainer = styled.div`
  position: fixed;
  top: 0;

  width: 100%;
  max-width: 26.875rem;
  height: 3.3125rem;
  flex-shrink: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.31rem;

  z-index: 50;
  background-color: #fff;
`;

export const MenuBox = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
  gap: 0.88rem;
`;

export const FeedList = styled.ul`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1.75rem;
  padding: 1.5rem 1.31rem 5.3125rem;
`;

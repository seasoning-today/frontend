import styled from 'styled-components';

export const Layout = styled.div`
  width: 100%;
  height: 100%;
`;

export const MyFeedList = styled.ul`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1.5rem;
  padding: 0.5rem 1.31rem 1.5rem;
`;

export const EmptyContent = styled.li`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 1rem;
`;

import styled from 'styled-components';

export const Layout = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FriendsList = styled.ul`
  width: 100%;

  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  padding: 1.75rem 1.5rem;
`;

export const FriendsListItem = styled.li`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const EmptyContent = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 5rem;
`;

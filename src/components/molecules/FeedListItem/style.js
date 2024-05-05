import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Layout = styled(Link)`
  width: 100%;

  display: flex;
  flex-direction: column;

  background-color: yellow;
`;

export const ProfileContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;

  section {
    display: flex;
    align-items: flex-end;
    column-gap: 0.35rem;
  }
`;

export const ContentContainer = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 1rem;
`;

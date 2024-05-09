import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Layout = styled(Link)`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 0.63rem;
`;

export const ProfileContainer = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  justify-content: space-between;

  section {
    display: flex;
    align-items: flex-end;
    column-gap: 0.35rem;
  }
`;

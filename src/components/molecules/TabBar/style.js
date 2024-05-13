import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Layout = styled.div`
  position: fixed;
  bottom: 0;

  width: 100%;
  max-width: 26.875rem;
  height: 3.8125rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.88rem;

  background-color: white;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);

  z-index: 30;
`;

export const TabBarItem = styled(Link)`
  width: 4rem;
  min-width: 2rem;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

import styled from 'styled-components';

export const Layout = styled.header`
  position: fixed;
  top: 0;

  width: 100%;
  max-width: 26.875rem;
  height: 3.125rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;

  z-index: 50;
  background-color: #fff;
`;

export const LogoContainer = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
  column-gap: 0.2rem;
`;

export const MenuContainer = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
  column-gap: 0.88rem;
`;

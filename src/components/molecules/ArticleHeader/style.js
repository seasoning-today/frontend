import styled from 'styled-components';

export const Layout = styled.header`
  position: fixed;
  top: 0;

  width: 100%;
  max-width: 26.875rem;
  height: 5.8125rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #fff;
`;

export const MenuContainer = styled.div`
  position: absolute;
  top: 1.69rem;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.31rem;

  div {
    cursor: pointer;
  }
`;

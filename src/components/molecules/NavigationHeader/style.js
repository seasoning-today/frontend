import styled from 'styled-components';

export const Layout = styled.header`
  position: fixed;
  top: 0;

  width: 100%;
  max-width: 26.875rem;
  height: 3.3125rem;
  flex-shrink: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #fff;
`;

export const Back = styled.button`
  position: absolute;
  left: 1.12rem;

  border: 0;
  background-color: transparent;
  cursor: pointer;
`;

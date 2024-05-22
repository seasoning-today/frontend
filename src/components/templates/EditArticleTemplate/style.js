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
  min-height: calc(100svh - 5.8125rem - 3.25rem);

  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1.25rem;
  padding: 1rem 1.31rem 2.25rem;
`;

export const ToolBar = styled.footer`
  width: 100%;
  height: 3.25rem;

  display: flex;
  align-items: center;
  column-gap: 1.5rem;
  padding: 0 1.38rem;

  background-color: #fff;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.2);
  opacity: 1;

  svg:hover {
    opacity: 0.3;
  }
`;

import styled from 'styled-components';

export const Layout = styled.section`
  position: relative;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 24.375rem;
  height: 100%;

  display: flex;
  flex-direction: column;
  row-gap: 1.6rem;
  padding: 1rem 0;
`;

export const ContentRow = styled.div`
  z-index: 11;

  display: flex;
  justify-content: center;
  column-gap: 1.31rem;

  &:last-child {
    margin-right: 5.5rem;
    justify-content: right;
  }
`;

export const Background = styled.div`
  position: absolute;
  top: 0.25rem;
  width: 100%;
  max-width: 24.375rem;
  height: 100%;
  z-index: 10;

  background-color: white;
`;

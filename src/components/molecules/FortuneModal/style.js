import styled from 'styled-components';

export const Layout = styled.div`
  position: relative;
  width: 17.6875rem;

  display: flex;
  flex-direction: column;
  padding: 1.63rem 2rem 2rem;

  border-radius: 1.25rem;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: #fff;

  z-index: 1000;
`;

export const InfoContainer = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 0.5rem;

  .row {
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
`;

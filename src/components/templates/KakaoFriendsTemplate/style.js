import styled from 'styled-components';

export const Layout = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1.25rem;
`;

export const InfoContainer = styled.div`
  width: 100%;
  height: 11.25rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  row-gap: 1rem;
`;

export const Descriptions = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  row-gap: 0.5rem;
  padding: 0 1.25rem;
`;

export const MenuContainer = styled.div`
  width: 100%;

  padding: 0 1rem;
`;

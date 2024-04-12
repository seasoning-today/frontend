import styled from 'styled-components';

export const Layout = styled.div`
  width: fit-content;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: ${({ spacing }) => spacing};
`;

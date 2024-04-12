import styled from 'styled-components';

export const Layout = styled.div`
  width: fit-content;
  height: auto;

  display: flex;
  align-items: center;
  column-gap: ${({ spacing }) => spacing};
`;

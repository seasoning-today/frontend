import styled from 'styled-components';

export const Layout = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  align-items: center;
  column-gap: ${({ spacing }) => spacing};
  padding: ${({ padding }) => padding};
`;

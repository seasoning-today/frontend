import styled from 'styled-components';

export const Layout = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: ${({ spacing }) => spacing};
  padding: ${({ padding }) => padding};
`;

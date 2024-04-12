import styled from 'styled-components';

export const Layout = styled.div`
  width: ${({ width }) => `${width}rem`};
  height: ${({ height }) => `${height}rem`};

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

import styled from 'styled-components';

export const Layout = styled.hr`
  width: ${({ margin }) => `calc(100% - ${margin}rem * 2)`};
  border-width: ${({ borderWidth }) => `${borderWidth}rem 0 0 0`};

  border-color: ${({ color }) => `${color}`};
`;

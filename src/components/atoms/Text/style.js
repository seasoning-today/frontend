import styled from 'styled-components';

export const Layout = styled.span`
  width: fit-content;
  height: auto;

  font-family: 'Apple SD Gothic Neo';
  font-size: ${({ size }) => `${size}rem`};
  font-weight: ${({ weight }) => weight};
  font-style: normal;
  line-height: normal;
  text-align: left;

  color: ${({ color }) => color};
`;

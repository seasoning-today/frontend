import styled from 'styled-components';

interface LayoutProps {
  notoserif?: boolean;
  size?: number;
  weight?: number;
  color?: string;
}

export const Layout = styled.span<LayoutProps>`
  width: fit-content;
  height: auto;

  font-family: ${({ notoserif }) =>
    notoserif ? 'Noto Serif KR' : 'Apple SD Gothic Neo'};
  font-size: ${({ size }) => `${size}rem`};
  font-weight: ${({ weight }) => weight};
  font-style: normal;
  line-height: normal;
  text-align: left;

  color: ${({ color }) => color};
`;

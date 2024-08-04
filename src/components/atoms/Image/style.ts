import styled from 'styled-components';

interface LayoutProps {
  width: number;
  height: number;
  circle?: boolean;
  radius?: number;
}

export const Layout = styled.div<LayoutProps>`
  position: relative;

  width: ${({ width }) => `${width}rem`};
  height: ${({ height }) => `${height}rem`};
  border-radius: ${({ circle, radius }) => (circle ? `50%` : `${radius}rem`)};
  flex-shrink: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const Image = styled.img`
  position: relative;

  width: 100%;
  height: 100%;

  object-fit: cover;
`;

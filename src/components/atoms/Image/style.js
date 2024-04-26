import styled from 'styled-components';

export const Layout = styled.div`
  position: relative;

  width: ${({ width }) => `${width}rem`};
  height: ${({ height }) => `${height}rem`};
  border-radius: ${({ circle, radius }) => (circle ? `50%` : `${radius}`)};
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

import styled from 'styled-components';

export const Layout = styled.ul`
  position: relative;
  width: 100%;
  border-radius: 0.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

export const Carousel = styled.ul`
  position: relative;
  width: 100%;
  height: 16.3125rem;

  display: flex;
  align-items: center;
  column-gap: 1.5rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
`;

export const Indicator = styled.ul`
  position: absolute;
  bottom: 1rem;
  width: 100%;
  z-index: 11;

  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 0.4rem;
`;

export const IndicatorItem = styled.li`
  position: relative;
  width: ${({ active }) => (active ? '0.3125rem' : '0.25rem')};
  height: ${({ active }) => (active ? '0.3125rem' : '0.25rem')};
  border-radius: 50%;

  background-color: ${({ active }) =>
    active ? '#fff' : 'rgba(255, 255, 255, 0.40)'};

  transition: all 0.2s ease-in-out;
`;

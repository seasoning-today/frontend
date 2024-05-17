import styled from 'styled-components';

export const Layout = styled.ul`
  position: relative;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Carousel = styled.ul`
  position: relative;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  column-gap: 1.5rem;
  padding-bottom: 1.5rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
`;

export const Indicator = styled.ul`
  position: absolute;
  bottom: 1.5rem;
  width: 100%;
  z-index: 11;

  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 0.5rem;
`;

export const IndicatorItem = styled.li`
  position: relative;
  width: ${({ active }) => (active ? '0.5rem' : '0.4375rem')};
  height: ${({ active }) => (active ? '0.5rem' : '0.4375rem')};
  border-radius: 50%;

  background-color: ${({ active }) => (active ? '#195A53' : '#d9d9d9')};

  transition: all 0.2s ease-in-out;
`;

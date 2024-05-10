import styled from 'styled-components';

export const Layout = styled.div`
  position: relative;
  width: 6rem;
  height: 6rem;
  z-index: 10;
  border-radius: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${({ status }) =>
    status === `written` || status === `written-countdown`
      ? `#fff`
      : `#1f1f1f`};
  cursor: ${({ status }) =>
    status === `written` ||
    status === `written-countdown` ||
    status === `countdown`
      ? `pointer`
      : `default`};
`;

export const TopContainer = styled.div`
  flex: 5.75;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export const BottomContainer = styled.div`
  flex: 4.25;
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const DonutContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 7rem;
  height: 7rem;
  z-index: 11;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const OuterCircle = styled.circle`
  fill: none;
  stroke: transparent;
  stroke-width: 11;
`;

export const ProgressCircle = styled.circle`
  fill: none;
  stroke: #496559;
  stroke-width: 11;
  stroke-dasharray: ${() => 2 * Math.PI * 90};
  stroke-dashoffset: ${(props) => 2 * Math.PI * 90 * (1 - props.percentage)};
  stroke-linecap: round;
  transform: rotate(-90deg);
  transform-origin: center;
`;

export const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 6rem;
  height: 6rem;
  z-index: -10;
  border-radius: 50%;
`;

export const BackgroundColor = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 6rem;
  height: 6rem;
  z-index: -1;
  border-radius: 50%;

  background-color: ${({ status }) =>
    status === `written` || status === `written-countdown`
      ? `rgba(2, 33, 29, 0.65)`
      : `rgba(255, 255, 255, 0.65)`};

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.45));
`;

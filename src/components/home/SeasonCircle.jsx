import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { SeasonBackgrounds } from '@utils/image/SeasonBackgrounds';
import { TermsToChinese } from '@utils/seasoning/TermsToChinese';
import { TermsToKorean } from '@utils/seasoning/TermsToKorean';

const Container = styled(Link)`
  position: relative;
  width: 6rem;
  height: 6rem;
  z-index: 10;

  border-radius: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  cursor: ${(props) => (props.to === '/write' ? 'pointer' : 'default')};
  color: ${(props) =>
    props.status === 'activated' ? `rgba(255, 255, 255, 0.75)` : `#1f1f1f`};

  .circle__background__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 6rem;
    height: 6rem;
    z-index: -10;
    border-radius: 50%;
  }

  .circle__background__color {
    position: absolute;
    top: 0;
    left: 0;
    width: 6rem;
    height: 6rem;
    z-index: -1;
    border-radius: 50%;

    background-color: ${(props) =>
      props.status === 'activated'
        ? `rgba(2, 33, 29, 0.75)`
        : `rgba(255, 255, 255, 0.7)`};

    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;

const Top = styled.div`
  flex: 6;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  svg {
    margin-bottom: 0.25rem;
  }

  .circle__countdown-day {
    text-align: center;
    font-family: 'Noto Serif KR';
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    z-index: 10;
  }

  .circle__countdown-number {
    margin-bottom: 0.25rem;

    text-align: center;
    font-family: 'Noto Serif KR';
    font-size: 1.0625rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    z-index: 10;
  }

  .circle__chinese {
    text-align: center;
    font-family: 'Noto Serif KR';
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    z-index: 10;
  }
`;

const Bottom = styled.div`
  flex: 4;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  .circle__korean {
    text-align: center;
    font-family: 'Noto Serif KR';
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    z-index: 10;
  }
`;

const DonutContainer = styled.div`
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

const OuterCircle = styled.circle`
  fill: none;
  stroke: transparent;
  stroke-width: 10;
`;

const ProgressCircle = styled.circle`
  fill: none;
  stroke: #496559;
  stroke-width: 10;
  stroke-dasharray: ${(props) => 2 * Math.PI * 90};
  stroke-dashoffset: ${(props) => 2 * Math.PI * 90 * (1 - props.percentage)};
  stroke-linecap: round;
  transform: rotate(-90deg);
  transform-origin: center;
`;

const SeasonCircle = (props) => {
  const { term, termData } = props;
  const { recordable, currentTerm, nextTerm } = termData;

  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const Timer = setInterval(() => {
      setNow(new Date());
    }, 1000);
    console.log('mount!');

    return () => {
      clearInterval(Timer);
      console.log('unmount!');
    };
  }, []);

  const status =
    term === nextTerm.sequence
      ? `countdown` // 현재 카운트다운 중인 다음 절기
      : term < nextTerm.sequence
      ? `activated` // 이미 열린 절기
      : `deactivated`; // 아직 열리지 않은 절기

  const nextTermDate = new Date(nextTerm.date);
  const remainingTime = nextTermDate - now;
  const nextPercentage = 1 - remainingTime / 1314864000;
  const seconds = Math.floor(remainingTime / 1000) % 60;
  const minutes = Math.floor(remainingTime / 1000 / 60) % 60;
  const hours = Math.floor(remainingTime / (1000 * 60 * 60)) % 24;
  const days = Math.floor(remainingTime / (1000 * 60 * 60) / 24);

  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  return (
    <Container
      status={status}
      to={recordable && term === currentTerm.sequence ? `/write` : `#`}
    >
      <Top>
        {status === `countdown` ? (
          <>
            {days > 0 ? (
              <span className="circle__countdown-day">{`${days}일`}</span>
            ) : undefined}
            <span className="circle__countdown-number">{formattedTime}</span>
          </>
        ) : status === `activated` ? (
          <span className="circle__chinese">{TermsToChinese[props.term]}</span>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M16 3C12.155 3 9 6.155 9 10V13H6V29H26V13H23V10C23 6.155 19.845 3 16 3ZM16 5C18.755 5 21 7.245 21 10V13H11V10C11 7.245 13.245 5 16 5ZM8 15H24V27H8V15Z"
              fill="#595959"
            />
          </svg>
        )}
      </Top>

      <Bottom>
        <span className="circle__korean">{TermsToKorean[props.term]}</span>
      </Bottom>

      {status === `countdown` ? (
        <DonutContainer>
          <svg viewBox="0 0 200 200">
            <OuterCircle cx="100" cy="100" r="90" />
            <ProgressCircle
              cx="100"
              cy="100"
              r="90"
              percentage={nextPercentage}
            />
          </svg>
        </DonutContainer>
      ) : undefined}

      <img
        className="circle__background__image"
        src={SeasonBackgrounds[props.term]}
      />
      <div className="circle__background__color" />
    </Container>
  );
};

export default SeasonCircle;

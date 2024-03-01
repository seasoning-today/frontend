import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { SeasonBackgrounds } from '@utils/image/SeasonBackgrounds';
import { TermsToChinese } from '@utils/seasoning/TermsToChinese';
import { TermsToKorean } from '@utils/seasoning/TermsToKorean';

const Container = styled.div`
  position: relative;
  width: 6rem;
  height: 6rem;
  z-index: 10;

  border-radius: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${({ status }) => (status === `written` ? `#fff` : `#1f1f1f`)};
  cursor: ${({ status }) =>
    status === `written` || status === `countdown` ? `pointer` : `default`};
`;

const Top = styled.div`
  flex: 5.75;
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
    text-align: center;
    font-family: 'Noto Serif KR';
    font-size: 1.0625rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    z-index: 10;
  }

  .circle__chinese {
    text-align: center;
    font-family: 'Noto Serif KR';
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    z-index: 10;
  }
`;

const Bottom = styled.div`
  flex: 4.25;
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

const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 6rem;
  height: 6rem;
  z-index: -10;
  border-radius: 50%;
`;

const BackgroundColor = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 6rem;
  height: 6rem;
  z-index: -1;
  border-radius: 50%;

  background-color: ${({ status }) =>
    status === `written`
      ? `rgba(2, 33, 29, 0.65)`
      : `rgba(255, 255, 255, 0.65)`};

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.45));
`;

const DonutContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 7.1rem;
  height: 7.1rem;
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
  stroke-width: 11;
`;

const ProgressCircle = styled.circle`
  fill: none;
  stroke: #496559;
  stroke-width: 11;
  stroke-dasharray: ${(props) => 2 * Math.PI * 90};
  stroke-dashoffset: ${(props) => 2 * Math.PI * 90 * (1 - props.percentage)};
  stroke-linecap: round;
  transform: rotate(-90deg);
  transform-origin: center;
`;

const SeasonCircle = ({ term, statusData }) => {
  const { status } = statusData; // [`deactivated`,`written`,`countdown`, `open`]
  const navigate = useNavigate();

  const handleClick = () => {
    if (status === `written`) {
      navigate(`/article/${statusData.articleId}`);
    } else if (status === `countdown`) {
      navigate(`/write`);
    } else {
      alert('현재 절기 기록장 오픈 기간이 아닙니다.');
    }
  };

  const countDownTermDate = new Date(statusData.dueDate);
  const remainingTime = countDownTermDate - statusData.now;
  const nextPercentage = 1 - remainingTime / 1314864000;
  const seconds = Math.floor(remainingTime / 1000) % 60;
  const minutes = Math.floor(remainingTime / 1000 / 60) % 60;
  const hours = Math.floor(remainingTime / (1000 * 60 * 60)) % 24;
  const days = Math.floor(remainingTime / (1000 * 60 * 60) / 24);

  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  return (
    <Container status={status} onClick={handleClick}>
      <Top>
        {status === `deactivated` ? (
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
        ) : status === `countdown` ? (
          <>
            {days > 0 ? (
              <span className="circle__countdown-day">{`${days}일`}</span>
            ) : undefined}
            <span className="circle__countdown-number">{formattedTime}</span>
          </>
        ) : (
          <span className="circle__chinese">{TermsToChinese[term]}</span>
        )}
      </Top>

      <Bottom>
        <span className="circle__korean">{TermsToKorean[term]}</span>
      </Bottom>

      {status === `countdown` && (
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
      )}

      <BackgroundImage src={SeasonBackgrounds[term]} />
      <BackgroundColor status={status} />
    </Container>
  );
};

export default SeasonCircle;

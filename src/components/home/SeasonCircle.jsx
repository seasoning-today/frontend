import styled from 'styled-components';
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
  padding-top: 0.375rem;

  cursor: default;
  color: ${(props) =>
    props.status === 'activated' ? `rgba(255, 255, 255, 0.75)` : `#1f1f1f`};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

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
  }

  .circle__countdown {
    text-align: center;
    font-family: Noto Serif KR;
    font-size: 1.0625rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    z-index: 10;
  }

  .circle__chinese {
    text-align: center;
    font-family: Noto Serif KR;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    z-index: 10;
  }

  .circle__korean {
    text-align: center;
    font-family: Noto Serif KR;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    z-index: 10;
  }
`;

const SeasonCircle = (props) => {
  const { term, termData } = props;
  const { recordable, currentTerm, nextTerm } = termData;

  const status =
    term === nextTerm.sequence
      ? `countdown` // 현재 카운트다운 중인 다음 절기
      : term < nextTerm.sequence
      ? `activated` // 이미 열린 절기
      : `deactivated`; // 아직 열리지 않은 절기

  return (
    <Container
      status={status}
      to={recordable && term === currentTerm.sequence ? `/write` : `#`}
    >
      {status === `countdown` ? (
        <span className="circle__countdown">카운트</span>
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
      <span className="circle__korean">{TermsToKorean[props.term]}</span>
      <img
        className="circle__background__image"
        src={SeasonBackgrounds[props.term]}
      />
      <div className="circle__background__color" />
    </Container>
  );
};

export default SeasonCircle;

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

  color: #fff;
  /* background-color: ${(props) =>
    props.status === 'activated'
      ? '#333'
      : props.status === 'countdown'
      ? '#888'
      : '#ddd'}; */

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

    background-color: rgba(2, 33, 29, 0.75);
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
  return (
    <Container status={props.status} season={props.season} to={`/write`}>
      {props.status === 'countdown' ? (
        <span className="circle__countdown">{props.countDown}</span>
      ) : (
        <span className="circle__chinese">{TermsToChinese[props.season]}</span>
      )}
      <span className="circle__korean">{TermsToKorean[props.season]}</span>
      <img
        className="circle__background__image"
        src={SeasonBackgrounds[props.season]}
      />
      <div className="circle__background__color" />
    </Container>
  );
};

export default SeasonCircle;

import styled from 'styled-components';

import { SeasonBackgrounds } from '@utils/image/SeasonBackgrounds';
import { TermsToChinese } from '@utils/seasoning/TermsToChinese';
import { TermsToKorean } from '@utils/seasoning/TermsToKorean';

const Container = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.55rem;

  cursor: pointer;

  .season__menu__chinese {
    color: #fff;
    text-align: center;
    font-family: 'Noto Serif KR';
    font-size: 1.1875rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    z-index: 12;
  }

  .season__menu__korean {
    color: #8c8c8c;
    text-align: center;

    font-family: 'Noto Serif KR';
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .season__background__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 4.0625rem;
    height: 4.0625rem;
    z-index: 10;
    border-radius: 1.5rem;
  }

  .season__background__color {
    position: absolute;
    top: 0;
    left: 0;
    width: 4.0625rem;
    height: 4.0625rem;
    z-index: 11;
    border-radius: 1.5rem;

    background-color: ${({ term, selectedTerm }) =>
      term === selectedTerm
        ? `rgba(2, 33, 29, 0.75)`
        : `rgba(255, 255, 255, 0.7)`};
    transition: background-color 0.2s ease-in-out;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;

const Square = styled.div`
  width: 4.0625rem;
  height: 4.0625rem;
  border-radius: 1.5625rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #333;
`;

const SeasonMenu = ({ term, selectedTerm, onClick }) => {
  return (
    <Container term={term} selectedTerm={selectedTerm} onClick={onClick}>
      <Square>
        <span className="season__menu__chinese">{TermsToChinese[term]}</span>
      </Square>
      <img
        className="season__background__image"
        src={SeasonBackgrounds[term]}
      />
      <div className="season__background__color" />
      <span className="season__menu__korean">{TermsToKorean[term]}</span>
    </Container>
  );
};

export default SeasonMenu;

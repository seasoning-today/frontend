import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { SeasonBackgrounds } from '@utils/image/SeasonBackgrounds';
import { TermsToKorean } from '@utils/seasoning/TermsToKorean';

const Container = styled.div`
  position: relative;
  min-width: 4.25rem;
  height: 2.25rem;
  border-radius: 1.125rem;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  overflow: hidden;

  .season__menu__korean {
    color: #fff;
    text-align: center;
    text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);

    font-family: 'Noto Serif KR';
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    z-index: 12;
  }

  .season__background__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 4.25rem;
    height: 2.25rem;
    z-index: 10;
  }

  .season__background__color {
    position: absolute;
    top: 0;
    left: 0;
    width: 4.25rem;
    height: 2.25rem;
    z-index: 11;

    background-color: ${({ term, selectedTerm }) =>
      term === selectedTerm
        ? `rgba(2, 33, 29, 0.65)`
        : `rgba(255, 255, 255, 0.65)`};
    transition: background-color 0.2s ease-in-out;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;

const SeasonMenu = ({ term, selectedTerm }) => {
  const navigate = useNavigate();

  const onClickMenu = () => {
    if (term !== selectedTerm) {
      navigate(`/home?category=term&term=${term}`);
    } else {
      navigate(`/home?category=term`);
    }
  };

  return (
    <Container term={term} selectedTerm={selectedTerm} onClick={onClickMenu}>
      <span className="season__menu__korean">{TermsToKorean[term]}</span>
      <img
        className="season__background__image"
        src={SeasonBackgrounds[term]}
      />
      <div className="season__background__color" />
    </Container>
  );
};

export default SeasonMenu;

import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { SeasonBackgrounds } from '@utils/image/SeasonBackgrounds';
import { TermsToChinese } from '@utils/seasoning/TermsToChinese';
import { TermsToKorean } from '@utils/seasoning/TermsToKorean';

const Card = styled.div`
  position: relative;
  width: auto;
  height: 6.1875rem;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;

  background-size: cover;
  background-position: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }

  .user-image {
    z-index: 13;
  }

  .default-image {
    z-index: 10;
  }

  .empty-image {
    width: 100%;
    height: 100%;
    z-index: 10;

    background-color: #fafafa;
  }

  cursor: ${({ active }) => (active ? `pointer` : `default`)};
`;

const Blur = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 11;

  background: linear-gradient(
    198deg,
    rgba(25, 90, 82, 0.15) 0%,
    rgba(2, 33, 29, 0.15) 100%
  );
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
`;

const LabelBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 20;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ backgroundEnabled }) =>
    backgroundEnabled ? `rgba(255, 255, 255, 0.7)` : `rgba(2, 33, 29, 0.75)`};
  filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25));

  .labelbox-chinese {
    text-align: center;
    font-family: 'Noto Serif KR';
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .labelbox-korean {
    text-align: center;
    font-family: 'Noto Serif KR';
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const CollageCard = ({
  term,
  image,
  articleId,
  imageEnabled,
  labelEnabled,
}) => {
  const navigate = useNavigate();

  const onClickCard = () => {
    if (articleId) {
      navigate(`/article/${articleId}`);
    }
  };

  return (
    <Card active={articleId ? true : false} onClick={onClickCard}>
      {imageEnabled && labelEnabled && <Blur />}

      {image ? (
        <img className="user-image" src={image} />
      ) : imageEnabled ? (
        <img className="default-image" src={SeasonBackgrounds[term]} />
      ) : (
        <div className="empty-image" />
      )}

      {labelEnabled && (
        <LabelBox backgroundEnabled={image || imageEnabled}>
          <span className="labelbox-chinese">{TermsToChinese[term]}</span>
          <span className="labelbox-korean">{TermsToKorean[term]}</span>
        </LabelBox>
      )}
    </Card>
  );
};

export default CollageCard;

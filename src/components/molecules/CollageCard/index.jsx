import * as S from './style';

import Image from '@components/atoms/Image';
import Text from '@components/atoms/Text';

import { useNavigate } from 'react-router-dom';

import { SeasonBackgrounds } from '@utils/image/SeasonBackgrounds';
import { TermsToChinese } from '@utils/seasoning/TermsToChinese';
import { TermsToKorean } from '@utils/seasoning/TermsToKorean';

export default function CollageCard({
  term,
  image,
  articleId,
  imageEnabled,
  labelEnabled,
}) {
  const navigate = useNavigate();

  const handleClickCard = () => {
    if (articleId) {
      navigate(`/article/${articleId}`);
    }
  };

  return (
    <S.Layout active={articleId ? true : false} onClick={handleClickCard}>
      {imageEnabled && labelEnabled && <S.Blur />}

      {image ? (
        <Image
          src={image}
          height="6.1875"
          style={{ width: '100%', zIndex: '13' }}
        />
      ) : imageEnabled ? (
        <Image
          src={SeasonBackgrounds[term]}
          height="6.1875"
          style={{ width: '100%', zIndex: '10' }}
        />
      ) : (
        <S.EmptyImage />
      )}

      {labelEnabled && (
        <S.LabelContainer>
          <Text
            notoserif
            size="1.25"
            color={
              image || imageEnabled
                ? `rgba(255, 255, 255, 0.7)`
                : `rgba(2, 33, 29, 0.75)`
            }
          >
            {TermsToChinese[term]}
          </Text>
          <Text
            notoserif
            size="0.75"
            color={
              image || imageEnabled
                ? `rgba(255, 255, 255, 0.7)`
                : `rgba(2, 33, 29, 0.75)`
            }
          >
            {TermsToKorean[term]}
          </Text>
        </S.LabelContainer>
      )}
    </S.Layout>
  );
}

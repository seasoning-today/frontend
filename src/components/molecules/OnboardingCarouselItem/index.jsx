import * as S from './style';

import Image from '@components/atoms/Image';
import Text from '@components/atoms/Text';

export default function OnboardingCarouselItem({
  mainText,
  subText,
  imageUrl,
}) {
  return (
    <S.Layout>
      <S.TextContainer>
        <Text
          size="1.5625"
          weight="600"
          style={{ lineHeight: '2.5rem', textAlign: 'center' }}
        >
          {mainText}
        </Text>
        <Text
          size="0.9375"
          color="#8e8c86"
          style={{ lineHeight: '1.25rem', textAlign: 'center' }}
        >
          {subText}
        </Text>
      </S.TextContainer>

      <S.ImageContainer>
        <Image
          src={imageUrl}
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            objectFit: 'contain',
          }}
        />
      </S.ImageContainer>
    </S.Layout>
  );
}

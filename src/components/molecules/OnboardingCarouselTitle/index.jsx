import * as S from './style';

import Text from '@components/atoms/Text';

export default function OnboardingCarouselTitle({ mainText, subText }) {
  return (
    <S.Layout>
      <Text
        size="2.25"
        weight="600"
        style={{ lineHeight: '3rem', textAlign: 'left' }}
      >
        {mainText}
      </Text>
      <Text size="1" style={{ lineHeight: '1.25rem', textAlign: 'left' }}>
        {subText}
      </Text>
    </S.Layout>
  );
}

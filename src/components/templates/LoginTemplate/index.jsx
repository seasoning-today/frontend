import * as S from './style';
import kakao_btn from '@assets/login/kakao_btn.webp';

import Image from '@components/atoms/Image';
import OnboardingCarousel from '@components/organisms/OnboardingCarousel';

import { useLoginContext } from '@contexts/LoginContext';

export default function LoginTemplate() {
  const { onboardingData, handleKakaoLogin } = useLoginContext();

  return (
    <S.Layout>
      <S.OnboardingCarouselContainer>
        <OnboardingCarousel onboardingData={onboardingData} />
      </S.OnboardingCarouselContainer>

      <S.ButtonContainer onClick={handleKakaoLogin}>
        <Image
          src={kakao_btn}
          width="22"
          height="3.2"
          style={{ cursor: 'pointer' }}
        />
      </S.ButtonContainer>
    </S.Layout>
  );
}

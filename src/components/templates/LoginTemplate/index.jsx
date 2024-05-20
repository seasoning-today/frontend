import * as S from './style';

import Image from '@components/atoms/Image';
import OnboardingCarousel from '@components/organisms/OnboardingCarousel';

import kakao_btn from '@assets/login/kakao_btn.webp';

export default function LoginTemplate({ onboardingData }) {
  const KAKAO_REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
  const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;

  const handleKakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

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

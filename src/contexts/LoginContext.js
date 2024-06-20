import { createContext, useContext } from 'react';

import onboarding_1 from '@assets/login/onboarding-1.webp';
import onboarding_2 from '@assets/login/onboarding-2.webp';
import onboarding_3 from '@assets/login/onboarding-3.webp';
import onboarding_4 from '@assets/login/onboarding-4.webp';

export const LoginContext = createContext();

export function useLoginContext() {
  return useContext(LoginContext);
}

export function createLoginContext() {
  const KAKAO_REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
  const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;

  const onboardingData = [
    {
      mainText: '한 해를 기록하는\n나만의 방식',
      subText: '24절기로 나의 1년을 모아 볼 수 있어요',
    },
    {
      mainText: '매 절기마다\n기록장이 열려요',
      subText: '절기의 앞뒤로 이틀의 기간 동안만\n기록장을 쓸 수 있어요',
      imageUrl: onboarding_1,
    },
    {
      mainText: '절기마다 다양한\n질문에 답하면서 기록해봐요',
      subText: '어떤 내용을 써야할 지 모르겠다면\n‘질문’을 추가해봐요',
      imageUrl: onboarding_2,
    },
    {
      mainText: '나만의 24절기를\n한 눈에 모아봐요',
      subText: '기록장에 올리는 사진들이 모여\n자동으로 콜라주가 만들어져요',
      imageUrl: onboarding_3,
    },
    {
      mainText: '친구들과 기록을\n공유해봐요',
      subText: '친구 추가 후\n서로의 기록장을 볼 수 있어요',
      imageUrl: onboarding_4,
    },
  ];

  const handleKakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return { onboardingData, handleKakaoLogin };
}

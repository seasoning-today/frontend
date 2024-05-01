import React, { useState, useRef } from 'react';
import styled from 'styled-components';

import OnboardingTitle from '@components/login/OnboardingTitle';
import OnboardingItem from '@components/login/OnboardingItem';

import kakao_btn from '@assets/login/kakao_btn.webp';
import onboarding_1 from '@assets/login/onboarding-1.webp';
import onboarding_2 from '@assets/login/onboarding-2.webp';
import onboarding_3 from '@assets/login/onboarding-3.webp';
import onboarding_4 from '@assets/login/onboarding-4.webp';

const Layout = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  overflow: hidden;
`;

const OnboardingContainer = styled.div`
  position: relative;
  width: 100%;
  flex-grow: 1;

  display: flex;
  align-items: center;
  overflow-x: auto;

  scroll-snap-type: x mandatory;
`;

const DotsContainer = styled.div`
  position: relative;
  width: 100%;
  height: 10svw;
  max-height: 4rem;
  flex-shrink: 0;
  column-gap: 0.5rem;
  padding-top: 1rem;

  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const Dots = styled.div`
  width: 0.4375rem;
  height: 0.4375rem;
  flex-shrink: 0;
  display: flex;

  border-radius: 0.5rem;
  background-color: ${({ active }) =>
    active ? '#195A53;' : 'var(--D9, #D9D9D9)'};

  transition: all 0.2s ease-in-out;
  cursor: pointer;
`;

const ButtonRow = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 2.5rem;

  display: flex;
  justify-content: center;

  img {
    width: 22rem;
    height: 3.2rem;
  }

  :hover {
    cursor: pointer;
  }
`;

function LoginPage() {
  /* 로그인 */
  const KAKAO_REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
  const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;

  const handleKakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  /* 온보딩 */
  const [activeDotIndex, setActiveDotIndex] = useState(0);
  const imageScrollRef = useRef();

  const onboardingItemData = [
    {
      mainText: '한 해를 기록하는\n나만의 방식',
      subText: '24절기로 나의 1년을 모아 볼 수 있어요',
    },
    {
      mainText: '매 절기마다\n기록장이 열려요',
      subText: '절기의 앞뒤로 이틀의 기간 동안만\n기록장을 쓸 수 있어요',
      imageURL: onboarding_1,
    },
    {
      mainText: '절기마다 다양한\n질문에 답하면서 기록해봐요',
      subText: '어떤 내용을 써야할 지 모르겠다면\n‘질문’을 추가해봐요',
      imageURL: onboarding_2,
    },
    {
      mainText: '나만의 24절기를\n한 눈에 모아봐요',
      subText: '기록장에 올리는 사진들이 모여\n자동으로 콜라주가 만들어져요',
      imageURL: onboarding_3,
    },
    {
      mainText: '친구들과 기록을\n공유해봐요',
      subText: '친구 추가 후\n서로의 기록장을 볼 수 있어요',
      imageURL: onboarding_4,
    },
  ];

  const handleDotClick = (index) => {
    const imageWidth = imageScrollRef.current.firstChild.offsetWidth;
    imageScrollRef.current.scrollTo({
      left: index * imageWidth,
      behavior: 'smooth',
    });
  };

  const handleImageScroll = () => {
    const containerWidth = imageScrollRef.current.offsetWidth;
    const scrollLeft = imageScrollRef.current.scrollLeft + containerWidth / 2;
    const index = Math.floor(scrollLeft / containerWidth);

    setActiveDotIndex(index);
  };

  return (
    <Layout>
      <OnboardingContainer ref={imageScrollRef} onScroll={handleImageScroll}>
        {onboardingItemData.map(({ mainText, subText, imageURL }, index) =>
          index === 0 ? (
            <OnboardingTitle
              key={index}
              mainText={mainText}
              subText={subText}
            />
          ) : (
            <OnboardingItem
              key={index}
              mainText={mainText}
              subText={subText}
              imageURL={imageURL}
            />
          )
        )}
      </OnboardingContainer>

      <DotsContainer>
        {onboardingItemData.map((_, index) => (
          <Dots
            key={index}
            onClick={() => handleDotClick(index)}
            active={index === activeDotIndex}
          />
        ))}
      </DotsContainer>

      <ButtonRow onClick={handleKakaoLogin}>
        <img src={kakao_btn} />
      </ButtonRow>
    </Layout>
  );
}

export default LoginPage;

import React, { useState, useRef } from 'react';
import styled from 'styled-components';

import kakao_btn from '@assets/login/kakao_btn.webp';
import login_background from '@assets/login/login-background.webp';
import onboarding0 from '@assets/login/onboarding0.webp';
import onboarding1 from '@assets/login/onboarding1.webp';
import onboarding2 from '@assets/login/onboarding2.webp';
import onboarding3 from '@assets/login/onboarding3.webp';
import onboarding4 from '@assets/login/onboarding4.webp';

const Background = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  overflow: hidden;
`;

const OnboardingContainer = styled.div`
  position: relative;
  width: 100%;
  height: 37rem;
  flex-shrink: 0;

  display: flex;
  align-items: center;
  margin-top: 2rem;
  overflow-x: auto;
  column-gap: 1.5rem;
  padding: 0 0.5rem;

  scroll-snap-type: x mandatory;
`;

const OnboardingImages = styled.img`
  width: 100%;
  height: 36.6875rem;
  flex-shrink: 0;

  scroll-snap-align: center;
`;

const DotsContainer = styled.div`
  width: 100%;
  height: 1rem;
  flex-shrink: 0;
  column-gap: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Dots = styled.div`
  display: flex;
  flex-shrink: 0;

  width: 0.4375rem;
  height: 0.4375rem;
  border-radius: 0.5rem;
  background-color: ${({ active }) =>
    active ? '#195A53;' : 'var(--D9, #D9D9D9)'};

  transition: all 0.2s ease-in-out;
  cursor: pointer;
`;

const ButtonRow = styled.div`
  position: absolute;
  bottom: 0;
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
  const KAKAO_REST_API_KEY = `c574e4572cdf6171c9cb1fe3af45bf75`;
  const REDIRECT_URI = 'https://seasoning.today/callback/kakao/login';
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;

  const handleKakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  /* 온보딩 */
  const [activeDotIndex, setActiveDotIndex] = useState(0);
  const imageScrollRef = useRef();

  const onboardingImageURLs = [
    onboarding0,
    onboarding1,
    onboarding2,
    onboarding3,
    onboarding4,
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
    <Background>
      <OnboardingContainer ref={imageScrollRef} onScroll={handleImageScroll}>
        {onboardingImageURLs.map((imageURL, index) => (
          <OnboardingImages key={index} src={imageURL} />
        ))}
      </OnboardingContainer>

      <DotsContainer>
        {onboardingImageURLs.map((_, index) => (
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
    </Background>
  );
}

export default LoginPage;

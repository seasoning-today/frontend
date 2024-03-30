import React from 'react';
import styled from 'styled-components';

import ImageSlider from '@components/write/ImageSlider';
import kakao_btn from '@assets/login/kakao_btn.webp';
import login_background from '@assets/login/login-background.webp';

const Background = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  background-image: url(${login_background});
  /* background-repeat: no-repeat; */
  /* background-position: top center; */
  background-size: cover;
  /* background-attachment: fixed; */

  overflow: hidden;
`;

const ButtonRow = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  margin-bottom: 6.38rem;

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
  const KAKAO_REST_API_KEY = `c574e4572cdf6171c9cb1fe3af45bf75`;
  const REDIRECT_URI = 'https://seasoning.today/callback/kakao/login';
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;

  const handleKakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <Background>
      <ButtonRow onClick={handleKakaoLogin}>
        <img src={kakao_btn} />
      </ButtonRow>
    </Background>
  );
}

export default LoginPage;

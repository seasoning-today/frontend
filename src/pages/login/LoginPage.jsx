import React from 'react';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

import kakao_btn from '@assets/login/kakao_btn.png';

const Background = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  background-image: url(./src/assets/login/background.png);
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
  const KAKAO_AUTH_URL = `https://api.seasoning.today/kakao/login`;

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

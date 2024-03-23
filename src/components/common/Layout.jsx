import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import { Outlet } from 'react-router-dom';

import logo_text from '@assets/layout/logo-text.webp';
import background_spring from '@assets/layout/background-spring.jpg';
import background_summer from '@assets/layout/background-summer.jpg';
import background_autumn from '@assets/layout/background-autumn.jpg';
import background_winter from '@assets/layout/background-winter.jpg';

const Container = styled.div`
  position: relative;
  width: 100svw;
  height: 100svh;

  display: flex;
  justify-content: space-evenly;
`;

const LogoContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .logo__header {
    position: relative;
    width: 75%;

    padding: 0;
    margin-top: 1.5rem;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .logo__description {
    position: relative;

    padding: 0;
    margin-top: 1rem;

    color: #bfbfbf;
    text-align: center;
    font-family: 'Apple SD Gothic Neo';
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const Logo = styled.div`
  position: relative;
  width: 7.5rem;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const ContentContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 26.875rem;
  height: 100%;

  overflow-y: auto;

  background-color: white;
`;

const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;

  background-color: black;

  z-index: -1;

  img {
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

function Layout() {
  // const isMobile = useMediaQuery({ maxWidth: 768 });
  const isMobile = useMediaQuery({ maxWidth: 900 });

  const getBackground = () => {
    const currentMonth = new Date().getMonth() + 1;

    switch (currentMonth) {
      case 3:
      case 4:
      case 5:
        return background_spring;
      case 6:
      case 7:
      case 8:
        return background_summer;
      case 9:
      case 10:
        return background_autumn;
      case 11:
      case 12:
      case 1:
      case 2:
        return background_winter;

      default:
        break;
    }
  };

  return (
    <Container>
      {!isMobile && (
        <LogoContainer>
          <Logo>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="159"
              height="277"
              viewBox="0 0 159 277"
              fill="none"
            >
              <path
                d="M158 209.864C158 246.661 128.239 276.5 91.5019 276.5H1C5.84111 267.53 95.99 96.7728 106.042 77.7473C102.235 75.5997 98.1248 73.7552 93.7292 72.273C66.3466 63.0339 38.9473 69.9485 32.795 89.4877C28.6431 102.685 35.5266 120.245 50.8063 132.221C28.9373 120.397 19.5744 103.881 19.5744 73.132C19.5744 33.0261 52.0334 0.5 92.0566 0.5C109.614 0.5 128.676 6.84183 143.535 22.0184C137.232 33.7504 45.1079 208.298 40.1828 217.638H92.1911C112.69 217.638 129.323 200.979 129.323 180.429C129.323 164.082 123.549 154.211 105.252 144.829C136.929 151.415 158 178.046 158 209.856V209.864Z"
                fill="url(#paint0_linear_669_2925)"
                stroke="url(#paint1_linear_669_2925)"
                strokeWidth="0.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_669_2925"
                  x1="79.5"
                  y1="0.5"
                  x2="79.5"
                  y2="276.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#959595" />
                  <stop
                    offset="0.479167"
                    stopColor="#EDEDED"
                    stopOpacity="0.92"
                  />
                  <stop offset="1" stopColor="white" stopOpacity="0.6" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_669_2925"
                  x1="79.5"
                  y1="0.5"
                  x2="79.5"
                  y2="276.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#959595" />
                  <stop
                    offset="0.479167"
                    stopColor="#EDEDED"
                    stopOpacity="0.92"
                  />
                  <stop offset="1" stopColor="white" stopOpacity="0.6" />
                </linearGradient>
              </defs>
            </svg>
          </Logo>
          <div className="logo__header">
            <img src={logo_text} />
          </div>
          <h3 className="logo__description">24개의 계절을 나의 입맛에 맞게</h3>
        </LogoContainer>
      )}

      <ContentContainer>
        <Outlet />
      </ContentContainer>

      <Background>
        <img src={getBackground()} />
      </Background>
    </Container>
  );
}

export default Layout;

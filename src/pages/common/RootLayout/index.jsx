import * as S from './style';
import { Outlet } from 'react-router-dom';

import Text from '@components/atoms/Text';

import { useMediaQuery } from 'react-responsive';

import Logo from '@assets/svg/Logo';
import logo_text from '@assets/layout/logo-text.webp';
import background_spring from '@assets/layout/background-spring.jpg';
import background_summer from '@assets/layout/background-summer.jpg';
import background_autumn from '@assets/layout/background-autumn.jpg';
import background_winter from '@assets/layout/background-winter.jpg';

export default function RootLayout() {
  const isPadSize = useMediaQuery({ maxWidth: 900 });
  const isMobileSize = useMediaQuery({ maxWidth: 430 });

  const getSeasonalBackground = () => {
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
    <S.Layout>
      {!isPadSize && (
        <S.LogoContainer>
          <section>
            <S.LogoWrapper>
              <Logo />
            </S.LogoWrapper>
            <div className="logo__header">
              <img src={logo_text} />
            </div>
            <Text size="1" color="#bfbfbf" style={{ marginTop: '1rem' }}>
              24개의 절기를 나의 입맛에 맞게
            </Text>
          </section>
        </S.LogoContainer>
      )}

      <S.ContentContainer isPadSize={isPadSize}>
        <Outlet />
      </S.ContentContainer>

      {!isMobileSize && (
        <S.BackgroundContainer>
          <img src={getSeasonalBackground()} />
        </S.BackgroundContainer>
      )}
    </S.Layout>
  );
}

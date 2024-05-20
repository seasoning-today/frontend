import * as S from './style';

import OnboardingCarouselItem from '@components/molecules/OnboardingCarouselItem';
import OnboardingCarouselTitle from '@components/molecules/OnboardingCarouselTitle';

import { useRef, useState } from 'react';

export default function OnboardingCarousel({ onboardingData }) {
  const [activeDotIndex, setActiveDotIndex] = useState(0);
  const imageScrollRef = useRef();

  const handleImageScroll = () => {
    const containerWidth = imageScrollRef.current.offsetWidth;
    const scrollLeft = imageScrollRef.current.scrollLeft + containerWidth / 2;
    const index = Math.floor(scrollLeft / containerWidth);

    setActiveDotIndex(index);
  };

  return (
    <S.Layout>
      {onboardingData && onboardingData.length > 0 && (
        <S.Carousel ref={imageScrollRef} onScroll={handleImageScroll}>
          {onboardingData.map(({ mainText, subText, imageUrl }, index) =>
            index === 0 ? (
              <OnboardingCarouselTitle
                key={index}
                mainText={mainText}
                subText={subText}
              />
            ) : (
              <OnboardingCarouselItem
                key={index}
                mainText={mainText}
                subText={subText}
                imageUrl={imageUrl}
              />
            )
          )}
        </S.Carousel>
      )}

      {onboardingData && onboardingData.length > 1 && (
        <S.Indicator>
          {onboardingData.map((_, index) => (
            <S.IndicatorItem key={index} active={index === activeDotIndex} />
          ))}
        </S.Indicator>
      )}
    </S.Layout>
  );
}

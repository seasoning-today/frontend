import * as S from './style';

import Icon from '@components/atoms/Icon';
import Image from '@components/atoms/Image';

import { useRef, useState } from 'react';

export default function ImageCarousel({
  readOnly,
  images,
  setImages,
  imageInputRef,
  setReplacingImageIndex,
  handleImageUpload,
}) {
  const [activeDotIndex, setActiveDotIndex] = useState(0);
  const imageScrollRef = useRef();

  const handleImageScroll = () => {
    const containerWidth = imageScrollRef.current.offsetWidth;
    const scrollLeft = imageScrollRef.current.scrollLeft + containerWidth / 2;
    const index = Math.floor(scrollLeft / containerWidth);

    setActiveDotIndex(index);
  };

  const handleImageChange = (index) => {
    imageInputRef.current.click();

    setReplacingImageIndex(index);
  };

  const handleImageDelete = (index) => {
    setImages((prevselectedImages) => {
      const newImages = [...prevselectedImages];
      newImages.splice(index, 1);
      return newImages;
    });
  };

  return (
    <S.Layout>
      {images.length > 0 && (
        <S.Carousel ref={imageScrollRef} onScroll={handleImageScroll}>
          {images.map((image, index) => (
            <S.CarouselItem key={index} readOnly={readOnly}>
              <Image
                src={image}
                radius="0.5"
                onClick={!readOnly ? () => handleImageChange(index) : undefined}
                style={{
                  width: '100%',
                  height: '100%',
                  pointer: readOnly ? 'default' : 'pointer',
                }}
              />
              {!readOnly && (
                <Icon
                  width="1.5"
                  height="1.5"
                  type="quit"
                  onClick={() => handleImageDelete(index)}
                />
              )}
            </S.CarouselItem>
          ))}
        </S.Carousel>
      )}
      {images.length > 1 && (
        <S.Indicator>
          {images.map((_, index) => (
            <S.IndicatorItem key={index} active={index === activeDotIndex} />
          ))}
        </S.Indicator>
      )}

      {!readOnly && (
        <input
          type="file"
          accept="image/*"
          ref={imageInputRef}
          onChange={handleImageUpload}
        />
      )}
    </S.Layout>
  );
}

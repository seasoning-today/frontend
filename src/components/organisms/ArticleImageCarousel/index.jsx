import * as S from './style';

import ArticleImageCarouselItem from '@components/molecules/ArticleImageCarouselItem';

import { useRef, useState } from 'react';

export default function ArticleImageCarousel({
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

  return (
    <S.Layout>
      {images && images.length > 0 && (
        <S.Carousel ref={imageScrollRef} onScroll={handleImageScroll}>
          {images.map((image, index) => (
            <ArticleImageCarouselItem
              key={index}
              readOnly={readOnly}
              imageIndex={index}
              image={image}
              imageInputRef={imageInputRef}
              setImages={setImages}
              setReplacingImageIndex={setReplacingImageIndex}
            />
          ))}
        </S.Carousel>
      )}
      {images && images.length > 1 && (
        <S.Indicator>
          {images.map((_, index) => (
            <S.IndicatorItem key={index} active={index === activeDotIndex} />
          ))}
        </S.Indicator>
      )}

      <input
        type="file"
        accept="image/*"
        ref={imageInputRef}
        onChange={handleImageUpload}
      />
    </S.Layout>
  );
}

import { useRef, useState } from 'react';
import styled from 'styled-components';

const Layout = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    display: none;
  }
`;

const ImagesContainer = styled.div`
  position: relative;
  width: 100%;
  height: 16.3125rem;

  display: flex;
  align-items: center;
  overflow-x: scroll;
  column-gap: 1.5rem;

  section {
    display: flex;
    width: 100%;
    height: 100%;
    flex-shrink: 0;

    svg {
      position: relative;
      flex-shrink: 0;
      top: 0.5rem;
      right: 2rem;

      cursor: pointer;
    }
  }
`;

const Image = styled.img`
  width: 100%;
  height: 16.3125rem;
  flex-shrink: 0;
  border-radius: 0.5rem;

  object-fit: cover;
  cursor: ${({ editable }) => (editable ? `pointer` : `default`)};
`;

const DotsContainer = styled.div`
  position: absolute;
  top: 15.25rem;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 0.4rem;

  z-index: 11;
`;

const Dots = styled.div`
  display: flex;

  width: ${({ active }) => (active ? '0.3125rem' : '0.25rem')};
  height: ${({ active }) => (active ? '0.3125rem' : '0.25rem')};
  border-radius: 50%;

  cursor: pointer;
  background-color: ${({ active }) =>
    active ? '#FFF' : 'rgba(255, 255, 255, 0.40)'};

  transition: all 0.2s ease-in-out;
`;

const ImageSlider = ({
  editable,
  images,
  setImages,
  imageInputRef,
  setReplacingImageIndex,
  handleImageUpload,
}) => {
  const [activeDotIndex, setActiveDotIndex] = useState(0);

  const imageScrollRef = useRef();

  const handleDotClick = (index) => {
    if (index === 0) {
      imageScrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    } else if (index === 1) {
      const scrollRight =
        imageScrollRef.current.scrollWidth - imageScrollRef.current.clientWidth;
      imageScrollRef.current.scrollTo({
        left: scrollRight,
        behavior: 'smooth',
      });
    }
  };

  const handleImageScroll = () => {
    const scrollLeft = imageScrollRef.current.scrollLeft;
    const imageWidth =
      imageScrollRef.current.firstChild.offsetWidth +
      parseFloat(getComputedStyle(imageScrollRef.current).gap);
    const index = Math.round(scrollLeft / imageWidth);

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
    <Layout>
      {images.length > 0 && (
        <ImagesContainer ref={imageScrollRef} onScroll={handleImageScroll}>
          {images.map((image, index) => (
            <section key={index}>
              <Image
                editable={editable}
                src={image}
                onClick={editable ? () => handleImageChange(index) : undefined}
              />
              {editable && (
                <svg
                  onClick={() => handleImageDelete(index)}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M6.39953 18.6534L5.3457 17.5995L10.9457 11.9995L5.3457 6.39953L6.39953 5.3457L11.9995 10.9457L17.5995 5.3457L18.6534 6.39953L13.0534 11.9995L18.6534 17.5995L17.5995 18.6534L11.9995 13.0534L6.39953 18.6534Z"
                    fill="white"
                    fillOpacity="0.4"
                  />
                </svg>
              )}
            </section>
          ))}
        </ImagesContainer>
      )}
      {images.length > 1 && (
        <DotsContainer>
          {images.map((_, index) => (
            <Dots
              key={index}
              onClick={() => handleDotClick(index)}
              active={index === activeDotIndex}
            />
          ))}
        </DotsContainer>
      )}

      {editable && (
        <input
          type="file"
          accept="image/*"
          ref={imageInputRef}
          onChange={handleImageUpload}
        />
      )}
    </Layout>
  );
};

export default ImageSlider;

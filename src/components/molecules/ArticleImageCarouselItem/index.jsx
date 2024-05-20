import * as S from './style';

import Icon from '@components/atoms/Icon';
import Image from '@components/atoms/Image';

export default function ArticleImageCarouselItem({
  readOnly = false,
  imageIndex,
  image,
  imageInputRef,
  setImages,
  setReplacingImageIndex,
}) {
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
    <S.Layout readOnly={readOnly}>
      <Image
        src={image}
        radius="0.5"
        onClick={!readOnly ? () => handleImageChange(imageIndex) : undefined}
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
          onClick={() => handleImageDelete(imageIndex)}
          style={{
            position: 'absolute',
            top: '0.62rem',
            right: '0.62rem',
            cursor: 'pointer',
          }}
        />
      )}
    </S.Layout>
  );
}

import * as S from './style';

import Icon from '@components/atoms/Icon';
import Image from '@components/atoms/Image';

export default function ArticleImageCarouselItem({
  readOnly = false,
  imageIndex,
  image,
  handleImageReplace,
  handleImageDelete,
}) {
  return (
    <S.Layout readOnly={readOnly}>
      <Image
        src={image}
        radius="0.5"
        onClick={!readOnly ? () => handleImageReplace(imageIndex) : undefined}
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

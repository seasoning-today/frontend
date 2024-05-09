import * as S from './style';

import Image from '@components/atoms/Image';
import Text from '@components/atoms/Text';

export default function FeedListItemBody({ image, preview }) {
  return (
    <S.Layout>
      {image && (
        <Image
          src={image}
          height="16.3125"
          style={{
            width: '100%',
            backgroundColor: '#d9d9d9',
          }}
        />
      )}

      <S.PreviewContainer>
        <Text size="0.875">{preview}</Text>
      </S.PreviewContainer>
    </S.Layout>
  );
}

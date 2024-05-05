import * as S from './style';

import Image from '@components/atoms/Image';
import Text from '@components/atoms/Text';

import useFallBackImage from '@utils/hooks/useFallBackImage';

export default function UserProfile({ imageUrl, nickname, accountId }) {
  const { onLoadFallBackImage } = useFallBackImage();

  return (
    <S.Layout>
      <Image
        src={imageUrl}
        width="2.5"
        height="2.5"
        circle
        onError={onLoadFallBackImage}
      />

      <S.InfoContainer>
        <Text size="0.875">{nickname}</Text>
        <Text size="0.75" color="#c3c3c3">{`@${accountId}`}</Text>
      </S.InfoContainer>
    </S.Layout>
  );
}

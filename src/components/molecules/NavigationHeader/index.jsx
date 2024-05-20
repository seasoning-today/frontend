import * as S from './style';

import Icon from '@components/atoms/Icon';
import Text from '@components/atoms/Text';

import { useNavigate } from 'react-router-dom';

export default function NavigationHeader({ title, CustomBackButton }) {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <S.Layout>
      <Text size="1.25" weight="600" color="#000">
        {title}
      </Text>

      <S.Back onClick={handleBack}>
        {CustomBackButton ? (
          CustomBackButton
        ) : (
          <Icon width="1.5" height="1.5" type="back" />
        )}
      </S.Back>
    </S.Layout>
  );
}

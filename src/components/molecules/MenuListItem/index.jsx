import * as S from './style';

import Icon from '@components/atoms/Icon';
import Text from '@components/atoms/Text';

export default function MenuListItem({ type, to, action, children, ...props }) {
  return type === 'link' ? (
    <S.LinkLayout to={to} {...props}>
      <Text size="1" color="#333">
        {children}
      </Text>
      <Icon type="more" width="1.5" height="1.5" />
    </S.LinkLayout>
  ) : (
    <S.ActionLayout onClick={action} {...props}>
      <Text size="1" color="#cc0025">
        {children}
      </Text>
    </S.ActionLayout>
  );
}

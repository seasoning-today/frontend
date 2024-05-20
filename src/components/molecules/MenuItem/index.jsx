import * as S from './style';

import Icon from '@components/atoms/Icon';
import Text from '@components/atoms/Text';

import Toggle from '@components/molecules/Toggle';

export default function MenuItem({
  type,
  to,
  value,
  action,
  children,
  ...props
}) {
  return (
    <>
      {type === 'link' && (
        <S.LinkLayout to={to} {...props}>
          <Text size="1" color="#333">
            {children}
          </Text>
          <Icon type="more" width="1.5" height="1.5" />
        </S.LinkLayout>
      )}
      {type === 'action' && (
        <S.ActionLayout onClick={action} {...props}>
          <Text size="1" color="#cc0025">
            {children}
          </Text>
        </S.ActionLayout>
      )}
      {type === 'toggle' && (
        <S.ActionLayout onClick={action} {...props}>
          <Text size="1" color="#333">
            {children}
          </Text>
          <Toggle on={value} />
        </S.ActionLayout>
      )}
    </>
  );
}

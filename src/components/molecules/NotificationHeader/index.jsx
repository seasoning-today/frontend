import * as S from './style';

import { Link } from 'react-router-dom';

import Icon from '@components/atoms/Icon';

import LogoSymbol from '@assets/svg/LogoSymbol';
import LogoText from '@assets/svg/LogoText';

export default function NotificationHeader({ isNewNotification }) {
  return (
    <S.Layout>
      <S.LogoContainer>
        <LogoSymbol />
        <LogoText />
      </S.LogoContainer>

      <S.MenuContainer>
        <Link to={`/notification`}>
          {isNewNotification ? (
            <Icon width="1.5" height="1.5" type="notification-on" />
          ) : (
            <Icon width="1.5" height="1.5" type="notification-off" />
          )}
        </Link>
      </S.MenuContainer>
    </S.Layout>
  );
}

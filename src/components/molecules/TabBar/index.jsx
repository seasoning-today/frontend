import * as S from './style';

import { Link, useLocation } from 'react-router-dom';

import Icon from '@components/atoms/Icon';

export default function TabBar() {
  const { pathname } = useLocation();

  return (
    <S.Layout>
      <Link to={`/home`}>
        <Icon
          type="home"
          width={2}
          height={2}
          style={{
            opacity: pathname === `/` || pathname === `/home` ? '1' : '0.3',
          }}
        />
      </Link>
      <Link to={`/collage`}>
        <Icon
          type="collage"
          width={2}
          height={2}
          style={{
            opacity: pathname === `/collage` ? '1' : '0.3',
          }}
        />
      </Link>
      <Link to={`/feed`}>
        <Icon
          type="feed"
          width={2}
          height={2}
          style={{
            opacity: pathname === `/feed` ? '1' : '0.3',
          }}
        />
      </Link>
      <Link to={`/mypage`}>
        <Icon
          type="setting"
          width={2}
          height={2}
          style={{
            opacity: pathname === `/mypage` ? '1' : '0.3',
          }}
        />
      </Link>
    </S.Layout>
  );
}

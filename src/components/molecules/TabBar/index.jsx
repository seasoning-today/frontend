import * as S from './style';

import { Link, useLocation } from 'react-router-dom';

import SVGIcon from '@components/atoms/SVGIcon';

import HomeIcon from '@assets/svg/HomeIcon';
import CollageIcon from '@assets/svg/CollageIcon';
import FeedIcon from '@assets/svg/FeedIcon';
import SettingsIcon from '@assets/svg/SettingsIcon';

export default function TabBar() {
  const { pathname } = useLocation();

  return (
    <S.Layout>
      <Link to={`/home`}>
        <SVGIcon
          width={2}
          height={2}
          style={{
            opacity: pathname === `/` || pathname === `/home` ? '1' : '0.3',
          }}
        >
          <HomeIcon />
        </SVGIcon>
      </Link>
      <Link to={`/collage`}>
        <SVGIcon
          width={2}
          height={2}
          style={{
            opacity: pathname === `/collage` ? '1' : '0.3',
          }}
        >
          <CollageIcon />
        </SVGIcon>
      </Link>
      <Link to={`/feed`}>
        <SVGIcon
          width={2}
          height={2}
          style={{
            opacity: pathname === `/feed` ? '1' : '0.3',
          }}
        >
          <FeedIcon />
        </SVGIcon>
      </Link>
      <Link to={`/mypage`}>
        <SVGIcon
          width={2}
          height={2}
          style={{
            opacity: pathname === `/mypage` ? '1' : '0.3',
          }}
        >
          <SettingsIcon />
        </SVGIcon>
      </Link>
    </S.Layout>
  );
}

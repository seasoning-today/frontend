import * as S from './style';

import BackIcon from '@assets/svg/BackIcon';
import CollageIcon from '@assets/svg/CollageIcon';
import FeedIcon from '@assets/svg/FeedIcon';
import HomeIcon from '@assets/svg/HomeIcon';
import MoreIcon from '@assets/svg/MoreIcon';
import SettingIcon from '@assets/svg/SettingIcon';

export default function Icon({
  type = 'home',
  width = 1,
  height = 1,
  ...props
}) {
  return (
    <S.Layout width={width} height={height} {...props}>
      {type === 'back' && <BackIcon />}
      {type === 'collage' && <CollageIcon />}
      {type === 'feed' && <FeedIcon />}
      {type === 'home' && <HomeIcon />}
      {type === 'more' && <MoreIcon />}
      {type === 'setting' && <SettingIcon />}
    </S.Layout>
  );
}

import * as S from './style';

import BackIcon from '@assets/svg/BackIcon';
import CameraIcon from '@assets/svg/CameraIcon';
import CollageIcon from '@assets/svg/CollageIcon';
import DropDownIcon from '@assets/svg/DropDownIcon';
import FeedIcon from '@assets/svg/FeedIcon';
import FortuneIcon from '@assets/svg/FortuneIcon';
import FriendsListIcon from '@assets/svg/FriendsListIcon';
import HeartIcon from '@assets/svg/HeartIcon';
import HomeIcon from '@assets/svg/HomeIcon';
import LockIcon from '@assets/svg/LockIcon';
import MoreIcon from '@assets/svg/MoreIcon';
import NotificationIcon from '@assets/svg/NotificationIcon';
import OptionIcon from '@assets/svg/OptionIcon';
import SearchMenuIcon from '@assets/svg/SearchMenuIcon';
import SettingIcon from '@assets/svg/SettingIcon';
import ToggleIcon from '@assets/svg/ToggleIcon';
import QuitIcon from '@assets/svg/QuitIcon';

export default function Icon({
  type = 'home',
  width = 1,
  height = 1,
  ...props
}) {
  return (
    <S.Layout width={width} height={height} {...props}>
      {type === 'back' && <BackIcon />}
      {type === 'camera' && <CameraIcon />}
      {type === 'collage' && <CollageIcon />}
      {type === 'drop-down' && <DropDownIcon />}
      {type === 'feed' && <FeedIcon />}
      {type === 'fortune' && <FortuneIcon />}
      {type === 'friends-list' && <FriendsListIcon />}
      {type === 'heart-on' && <HeartIcon on />}
      {type === 'heart-off' && <HeartIcon />}
      {type === 'home' && <HomeIcon />}
      {type === 'lock' && <LockIcon />}
      {type === 'more' && <MoreIcon />}
      {type === 'notification-on' && <NotificationIcon on />}
      {type === 'notification-off' && <NotificationIcon />}
      {type === 'option' && <OptionIcon />}
      {type === 'search-menu' && <SearchMenuIcon />}
      {type === 'setting' && <SettingIcon />}
      {type === 'toggle-on' && <ToggleIcon on />}
      {type === 'toggle-off' && <ToggleIcon />}
      {type === 'quit' && <QuitIcon />}
    </S.Layout>
  );
}

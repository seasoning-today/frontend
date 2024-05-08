import * as S from './style';

import BackIcon from '@assets/svg/BackIcon';
import CameraIcon from '@assets/svg/CameraIcon';
import CollageIcon from '@assets/svg/CollageIcon';
import DropDownIcon from '@assets/svg/DropDownIcon';
import FeedIcon from '@assets/svg/FeedIcon';
import FriendsListIcon from '@assets/svg/FriendsListIcon';
import HomeIcon from '@assets/svg/HomeIcon';
import MoreIcon from '@assets/svg/MoreIcon';
import NotificationIcon from '@assets/svg/NotificationIcon';
import SearchMenuIcon from '@assets/svg/SearchMenuIcon';
import SettingIcon from '@assets/svg/SettingIcon';
import ToggleIcon from '@assets/svg/ToggleIcon';

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
      {type === 'friends-list' && <FriendsListIcon />}
      {type === 'home' && <HomeIcon />}
      {type === 'more' && <MoreIcon />}
      {type === 'notification-on' && <NotificationIcon on />}
      {type === 'notification-off' && <NotificationIcon />}
      {type === 'search-menu' && <SearchMenuIcon />}
      {type === 'setting' && <SettingIcon />}
      {type === 'toggle-on' && <ToggleIcon on />}
      {type === 'toggle-off' && <ToggleIcon />}
    </S.Layout>
  );
}

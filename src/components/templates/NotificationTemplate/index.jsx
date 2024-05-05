import * as S from './style';

import Divider from '@components/atoms/Divider';
import NotificationListItem from '@components/molecules/NotificationListItem';
import withNavigation from '@components/hoc/withNavigation';

function NotificationTemplate({
  friendRequests,
  notifications,
  focusElementRef,
}) {
  return (
    <S.Layout>
      <S.NotificationList>
        {friendRequests.map((notification) => (
          <NotificationListItem
            key={notification.id}
            type={notification.type}
            message={notification.profile.id}
            imageUrl={notification.profile.image}
            profileName={notification.profile.nickname}
            date={notification.created}
          />
        ))}

        {friendRequests.length > 0 && notifications.length > 0 ? (
          <Divider borderWidth="0.0625" color="#e3e3e3" />
        ) : undefined}

        {notifications.map((notification) => (
          <NotificationListItem
            key={notification.id}
            type={notification.type}
            message={notification.message}
            imageUrl={notification.profile.image}
            profileName={notification.profile.nickname}
            date={notification.created}
          />
        ))}

        <div ref={focusElementRef} />
      </S.NotificationList>
    </S.Layout>
  );
}

export default withNavigation('알림', NotificationTemplate);

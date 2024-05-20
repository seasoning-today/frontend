import * as S from './style';

import Divider from '@components/atoms/Divider';

import NotificationList from '@components/organisms/NotificationList';
import withNavigation from '@components/hoc/withNavigation';

function NotificationTemplate({
  friendRequests,
  notifications,
  focusElementRef,
}) {
  return (
    <S.Layout>
      <S.NotificationListContainer>
        <NotificationList notificationData={friendRequests} />

        {friendRequests.length > 0 && notifications.length > 0 ? (
          <Divider borderWidth="0.0625" color="#e3e3e3" />
        ) : undefined}

        <NotificationList notificationData={notifications} />

        <div ref={focusElementRef} />
      </S.NotificationListContainer>
    </S.Layout>
  );
}

export default withNavigation('알림', NotificationTemplate);

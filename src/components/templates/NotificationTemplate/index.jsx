import * as S from './style';

import Divider from '@components/atoms/Divider';
import NotificationList from '@components/organisms/NotificationList';
import withNavigation from '@components/hoc/withNavigation';

import { useNotificationContext } from '@contexts/NotificationContext';

function NotificationTemplate() {
  const { friendRequests, notifications, observerRef } =
    useNotificationContext();

  return (
    <S.Layout>
      <S.NotificationListContainer>
        <NotificationList notificationData={friendRequests} />

        {friendRequests.length > 0 && notifications.length > 0 && (
          <Divider borderWidth="0.0625" color="#e3e3e3" />
        )}

        <NotificationList notificationData={notifications} />

        <div ref={observerRef} />
      </S.NotificationListContainer>
    </S.Layout>
  );
}

export default withNavigation('알림', NotificationTemplate);

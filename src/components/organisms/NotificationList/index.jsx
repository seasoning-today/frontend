import * as S from './style';

import NotificationListItem from '@components/molecules/NotificationListItem';

export default function NotificationList({ notificationData }) {
  return (
    <S.Layout>
      {notificationData.map(({ id, type, message, profile, created }) => (
        <NotificationListItem
          key={id}
          type={type}
          message={type === `FRIENDSHIP_REQUEST` ? profile.id : message}
          imageUrl={profile.image}
          profileName={profile.nickname}
          date={created}
        />
      ))}
    </S.Layout>
  );
}

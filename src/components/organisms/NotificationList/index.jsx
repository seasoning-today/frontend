import * as S from './style';

import NotificationItem from '@components/molecules/NotificationItem';

export default function NotificationList({ notificationData }) {
  return (
    <S.Layout>
      {notificationData.map(({ id, type, message, profile, created }) => (
        <NotificationItem
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

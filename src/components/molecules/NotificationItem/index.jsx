import * as S from './style';
import axios from 'axios';

import Button from '@components/atoms/Button';
import Image from '@components/atoms/Image';
import Text from '@components/atoms/Text';
import LogoSymbol from '@assets/svg/LogoSymbol';

import { TermsToKorean } from '@utils/seasoning/TermsToKorean';
import { useNavigate } from 'react-router-dom';
import useFallBackImage from '@utils/hooks/useFallBackImage';

const formatNotificationTime = (timestamp) => {
  const currentTime = new Date();
  const notificationTime = new Date(timestamp);
  const timeDifference = currentTime - notificationTime;

  const minutes = Math.floor(timeDifference / 1000 / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    return `${days}일 전`;
  } else if (hours > 0) {
    return `${hours}시간 전`;
  } else if (minutes > 0) {
    return `${minutes}분 전`;
  } else {
    return '방금 전';
  }
};

export default function NotificationItem({
  type,
  message,
  imageUrl,
  profileName,
  date,
}) {
  const { onLoadFallBackImage } = useFallBackImage();
  const navigate = useNavigate();

  const handleClickNotification = () => {
    if (type === 'ARTICLE_OPEN') {
      navigate(`/write`);
    } else if (type === 'ARTICLE_FEEDBACK') {
      navigate(`/article/${message}`);
    }
  };

  const handleFriendRequest = async (action) => {
    const accessToken = localStorage.getItem('accessToken');

    try {
      if (action === 'accept') {
        const response = await axios.post(
          `/api/friend/add/accept`,
          {
            id: message,
          },
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );
      } else if (action === 'decline') {
        const response = await axios.delete(`/api/friend/add/decline`, {
          data: {
            id: message,
          },
          headers: { Authorization: `Bearer ${accessToken}` },
        });
      }

      navigate(`/notification`, { replace: true });
      window.location.reload();
    } catch (error) {
      console.error('Error handling friend request:', error);
    }
  };

  return (
    <S.Layout type={type} onClick={handleClickNotification}>
      {type === 'ARTICLE_OPEN' ? (
        <S.DefaultLogo>
          <LogoSymbol />
        </S.DefaultLogo>
      ) : (
        <Image
          src={imageUrl}
          width="2.9375"
          height="2.9375"
          circle
          onError={onLoadFallBackImage}
        />
      )}

      <S.Content>
        {type === 'ARTICLE_OPEN' && (
          <>
            <Text size="0.875" weight="600" style={{ marginRight: '0.25rem' }}>
              {TermsToKorean[message]}
            </Text>
            <Text size="0.875">노트가 열렸습니다</Text>
            <br />
          </>
        )}
        {type === 'ARTICLE_FEEDBACK' && (
          <>
            <Text size="0.875" weight="600" style={{ marginRight: '0.25rem' }}>
              {profileName}
            </Text>
            <Text size="0.875">님이 이모지를 남기셨습니다</Text>
            <br />
          </>
        )}
        {type === 'FRIENDSHIP_ACCEPTED' && (
          <>
            <Text size="0.875" weight="600" style={{ marginRight: '0.25rem' }}>
              {profileName}
            </Text>
            <Text size="0.875">님과 친구가 되셨습니다</Text>
            <br />
          </>
        )}
        {type === 'FRIENDSHIP_REQUEST' && (
          <>
            <Text size="0.875" weight="600" style={{ marginRight: '0.25rem' }}>
              {profileName}
            </Text>
            <Text size="0.875" style={{ marginRight: '0.5rem' }}>
              님에게서 친구신청이 왔습니다
            </Text>
          </>
        )}

        <Text size="0.75" color="#bfbfbf">
          {formatNotificationTime(date)}
        </Text>
      </S.Content>

      {type === 'FRIENDSHIP_REQUEST' && (
        <S.ButtonContainer>
          <Button
            text="수락"
            color="#fff"
            backgroundColor="#0d6b38"
            onClick={() => {
              handleFriendRequest('accept');
            }}
          />
          <Button
            text="거절"
            color="#000"
            backgroundColor="#f0f0f0"
            onClick={() => {
              handleFriendRequest('decline');
            }}
          />
        </S.ButtonContainer>
      )}
    </S.Layout>
  );
}

import * as S from './style';
import axios from 'axios';

import Text from '@components/atoms/Text';

import { useNavigate } from 'react-router-dom';
import withModalBackground from '@components/hoc/withModalBackground';

function FriendsDeleteModal({ friendId, onCloseModal }) {
  const navigate = useNavigate();

  const unfriendRequest = async () => {
    const accessToken = localStorage.getItem('accessToken');

    try {
      const unfriendResponse = await axios.delete(`/api/friend/unfriend`, {
        data: {
          id: friendId,
        },
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      if (unfriendResponse.status === 200) {
        navigate(`/feed/friends-list`, { replace: true });
        onCloseModal();
      } else {
        console.error('Unexpected response:', response);
      }
    } catch (error) {
      navigate(`/login`);
      console.error('Error sending friend request:', error);
    }
  };

  return (
    <S.Layout>
      <Text size="1">정말로 친구 삭제를 하시겠습니까?</Text>

      <S.ButtonContainer>
        <S.Button warning onClick={unfriendRequest}>
          <Text size="0.875" weight="500" color="#fff">
            삭제하기
          </Text>
        </S.Button>
        <S.Button onClick={onCloseModal}>
          <Text size="0.875" weight="500" color="#000">
            취소
          </Text>
        </S.Button>
      </S.ButtonContainer>
    </S.Layout>
  );
}

export default withModalBackground(FriendsDeleteModal);

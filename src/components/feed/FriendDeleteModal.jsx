import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import withModalBackground from '@components/hoc/withModalBackground';

const ModalOverlay = styled.div`
  position: relative;
  max-width: calc(100% - 6rem);

  display: flex;
  flex-direction: column;
  row-gap: 1.69rem;
  padding: 2.5rem 2.37rem 1.87rem;

  border-radius: 0.625rem;
  background-color: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  z-index: 1000;
`;

const Title = styled.div`
  position: relative;
  width: 100%;

  color: #333;
  font-family: 'Apple SD Gothic Neo';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const ButtonContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.div`
  width: 5.75rem;
  height: 2.1875rem;
  flex-shrink: 0;
  border-radius: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  background-color: ${(props) => (props.warning ? `#C23952` : `#EAEAEA`)};

  span {
    color: ${(props) => (props.warning ? `#fff` : `#000`)};
    font-family: 'Apple SD Gothic Neo';
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

const FriendDeleteModal = ({ friendId, onCloseModal }) => {
  const navigate = useNavigate();

  const unfriendRequest = async () => {
    const accessToken = localStorage.getItem('accessToken');
    console.log(friendId);
    try {
      const unfriendResponse = await axios.delete(`/api/friend/unfriend`, {
        data: {
          id: friendId,
        },
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      if (unfriendResponse.status === 200) {
        navigate();
      } else {
        // console.error('Unexpected response:', response);
      }
    } catch (error) {
      console.error('Error sending friend request:', error);
    }
  };

  return (
    <ModalOverlay>
      <Title>정말로 친구 삭제를 하시겠습니까?</Title>
      <ButtonContainer>
        <Button warning onClick={unfriendRequest}>
          <span>삭제하기</span>
        </Button>
        <Button onClick={onCloseModal}>
          <span>취소</span>
        </Button>
      </ButtonContainer>
    </ModalOverlay>
  );
};

export default withModalBackground(FriendDeleteModal);

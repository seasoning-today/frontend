import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ModalBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 2000;
  background-color: rgba(0, 0, 0, 0.5);
`;

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

const WithdrawModal = ({ setShowModal }) => {
  const navigate = useNavigate();

  const handleWithdraw = async () => {
    const accessToken = localStorage.getItem('accessToken');

    alert('탈퇴 시도');
    return;

    try {
      const response = await axios.delete(`/api/user`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      localStorage.clear();
      navigate(`/login`);
    } catch (error) {
      console.error('Error trying withdrawal:', error);
    }
  };

  return (
    <ModalBackground>
      <ModalOverlay>
        <Title>정말로 회원 탈퇴 하시겠습니까?</Title>
        <ButtonContainer>
          <Button warning onClick={handleWithdraw}>
            <span>탈퇴하기</span>
          </Button>
          <Button onClick={() => setShowModal(false)}>
            <span>취소</span>
          </Button>
        </ButtonContainer>
      </ModalOverlay>
    </ModalBackground>
  );
};

export default WithdrawModal;

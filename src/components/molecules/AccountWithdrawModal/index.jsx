import * as S from './style';
import axios from 'axios';

import Text from '@components/atoms/Text';
import withModalBackground from '@components/hoc/withModalBackground';

import { useNavigate } from 'react-router-dom';

const WithdrawModal = ({ onCloseModal }) => {
  const navigate = useNavigate();

  const handleWithdraw = async () => {
    const accessToken = localStorage.getItem('accessToken');

    try {
      const withdrawResponse = await axios.delete(`/api/user`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      localStorage.clear();
      navigate(`/login`);
    } catch (error) {
      console.error('Error trying withdrawal:', error);
    }
  };

  return (
    <S.Layout>
      <Text size="1">정말로 회원 탈퇴 하시겠습니까?</Text>

      <S.ButtonContainer>
        <S.Button warning onClick={handleWithdraw}>
          <Text size="0.875" weight="500" color="#fff">
            탈퇴하기
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
};

export default withModalBackground(WithdrawModal);

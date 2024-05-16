import * as S from './style';
import axios from 'axios';

import Text from '@components/atoms/Text';
import withModalBackground from '@components/hoc/withModalBackground';

import { useNavigate } from 'react-router-dom';

function ArticleDeleteModal({ articleId, onCloseModal }) {
  const navigate = useNavigate();

  const handleDelete = async () => {
    const accessToken = localStorage.getItem('accessToken');

    try {
      const articleDeleteResponse = await axios.delete(
        `/api/article/${articleId}`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );

      navigate(`/home`, { replace: true });
    } catch (error) {
      console.error('Error trying delete article:', error);
    }
  };

  return (
    <S.Layout>
      <Text size="1">삭제한 기록장은 복구되지 않습니다.</Text>

      <S.ButtonContainer>
        <S.Button warning onClick={handleDelete}>
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

export default withModalBackground(ArticleDeleteModal);

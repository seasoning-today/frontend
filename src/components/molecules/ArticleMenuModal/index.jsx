import * as S from './style';

import Text from '@components/atoms/Text';
import withModalBackground from '@components/hoc/withModalBackground';

import { useNavigate } from 'react-router-dom';

const ArticleMenuModal = ({
  editable,
  articleId,
  onCloseModal,
  setShowDeleteModal,
}) => {
  const navigate = useNavigate();

  const handleArticleDelete = () => {
    onCloseModal();
    setShowDeleteModal(true);
  };

  return (
    <S.Layout>
      {editable && (
        <S.Menu
          onClick={() => {
            navigate(`/article/edit/${articleId}`);
          }}
        >
          <Text size="1">수정하기</Text>
        </S.Menu>
      )}

      <S.Menu warning onClick={handleArticleDelete}>
        <Text size="1" color="#c23952">
          삭제하기
        </Text>
      </S.Menu>
    </S.Layout>
  );
};

export default withModalBackground(ArticleMenuModal);

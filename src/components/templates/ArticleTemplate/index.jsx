import * as S from './style';

import Icon from '@components/atoms/Icon';
import Image from '@components/atoms/Image';
import Text from '@components/atoms/Text';
import ArticleDeleteModal from '@components/molecules/ArticleDeleteModal';
import ArticleHeader from '@components/molecules/ArticleHeader';
import ArticleMenuModal from '@components/molecules/ArticleMenuModal';
import ContentEditor from '@components/molecules/ContentEditor';
import ArticleImageCarousel from '@components/organisms/ArticleImageCarousel';

import { ArticleContext } from '@contexts/ArticleContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import useFallBackImage from '@utils/hooks/useFallBackImage';

export default function ArticleTemplate() {
  const navigate = useNavigate();
  const {
    articleId,
    articleData,
    showMenuModal,
    showDeleteModal,
    isAuthor,
    isEditable,
    isClickedEmoji,
    emojiCount,
    setShowMenuModal,
    setShowDeleteModal,
    handleEmojiClick,
  } = useContext(ArticleContext);
  const { onLoadFallBackImage } = useFallBackImage();
  const { year, term, images, contents, profile } = articleData;

  return (
    <S.Layout>
      {showMenuModal && (
        <ArticleMenuModal
          editable={isEditable}
          articleId={articleId}
          onCloseModal={() => setShowMenuModal(false)}
          setShowDeleteModal={setShowDeleteModal}
        />
      )}
      {showDeleteModal && (
        <ArticleDeleteModal
          articleId={articleId}
          onCloseModal={() => {
            setShowMenuModal(false);
            setShowDeleteModal(false);
          }}
        />
      )}

      <ArticleHeader
        year={year}
        term={term}
        firstOptionItem={<Icon width="1.5" height="1.5" type="quit" />}
        firstOptionAction={() => navigate(-1)}
        secondOptionItem={
          isAuthor && <Icon width="1.5" height="1.5" type="option" />
        }
        secondOptionAction={() => setShowMenuModal(true)}
      />

      <S.ContentContainer>
        <ArticleImageCarousel
          readOnly
          images={images.map((image) => image.url)}
        />

        <ContentEditor readOnly contents={JSON.parse(contents)} />
      </S.ContentContainer>

      <S.Footer>
        <S.EmojiButton onClick={handleEmojiClick}>
          {isClickedEmoji ? (
            <Icon width="1.5" height="1.5" type="heart-on" />
          ) : (
            <Icon width="1.5" height="1.5" type="heart-off" />
          )}
          <Text size="0.9">{emojiCount}</Text>
        </S.EmojiButton>

        <S.ProfileContainer>
          <div className="profile-column">
            <Text size="0.9" color="#000">
              {profile.nickname}
            </Text>
            <Text size="0.6875" color="#c3c3c3">{`@${profile.accountId}`}</Text>
          </div>
          <Image
            src={profile.image}
            width="2.625"
            height="2.625"
            circle
            onError={onLoadFallBackImage}
          />
        </S.ProfileContainer>
      </S.Footer>
    </S.Layout>
  );
}

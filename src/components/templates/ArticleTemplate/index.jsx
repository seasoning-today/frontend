import * as S from './style';
import axios from 'axios';

import ArticleMenuModal from '@components/article/ArticleMenuModal';
import ArticleDeleteModal from '@components/article/ArticleDeleteModal';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useFallBackImage from '@utils/hooks/useFallBackImage';

import Icon from '@components/atoms/Icon';
import Image from '@components/atoms/Image';
import Text from '@components/atoms/Text';
import ArticleHeader from '@components/molecules/ArticleHeader';
import ImageCarousel from '@components/molecules/ImageCarousel';
import ContentEditor from '@components/molecules/ContentEditor';

export default function ArticleTemplate({
  articleId,
  articleData,
  userData,
  termData,
}) {
  const navigate = useNavigate();
  const [showMenuModal, setShowMenuModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [emojiCount, setEmojiCount] = useState(articleData.likesCount);
  const [isClickedEmoji, setIsClickedEmoji] = useState(articleData.userLikes);
  const { onLoadFallBackImage } = useFallBackImage();

  const contents = JSON.parse(articleData.contents);
  const isAuthor = userData.id === articleData.profile.id;

  const handleMenu = () => {
    setShowMenuModal(true);
  };

  const handleEmojiClick = async () => {
    const accessToken = localStorage.getItem('accessToken');

    try {
      if (!isClickedEmoji) {
        const likeResponse = await axios.post(
          `/api/article/${articleId}/like`,
          {},
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );
        setEmojiCount(emojiCount + 1);
        setIsClickedEmoji(true);
      } else {
        const unlikeResponse = await axios.delete(
          `/api/article/${articleId}/like`,
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );
        setEmojiCount(emojiCount - 1);
        setIsClickedEmoji(false);
      }
    } catch (error) {
      console.error('Error while handling emoji click:', error);
    }
  };

  return (
    <S.Layout>
      {showMenuModal && (
        <ArticleMenuModal
          editable={
            termData.recordable &&
            articleData.year ===
              parseInt(termData.recordTerm.date.split('-')[0]) &&
            articleData.term === termData.recordTerm.sequence
          }
          articleId={articleId}
          onCloseModal={() => {
            setShowMenuModal(false);
          }}
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
        year={articleData.year}
        term={articleData.term}
        firstOptionItem={<Icon width="1.5" height="1.5" type="quit" />}
        firstOptionAction={() => {
          navigate(-1);
        }}
        secondOptionItem={
          isAuthor && <Icon width="1.5" height="1.5" type="option" />
        }
        secondOptionAction={handleMenu}
      />

      <S.ContentContainer>
        <ImageCarousel
          readOnly
          images={articleData.images.map((image) => image.url)}
        />

        <ContentEditor readOnly contents={contents} />
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
              {articleData.profile.nickname}
            </Text>
            <Text
              size="0.6875"
              color="#c3c3c3"
            >{`@${articleData.profile.accountId}`}</Text>
          </div>
          <Image
            src={articleData.profile.image}
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

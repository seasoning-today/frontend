import { useState, createContext } from 'react';
import axios from 'axios';

export const ArticleContext = createContext();

export function useArticleContext(loaderData) {
  const { articleId, articleData, userData, termData } = loaderData;

  const [showMenuModal, setShowMenuModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [emojiCount, setEmojiCount] = useState(articleData.likesCount);
  const [isClickedEmoji, setIsClickedEmoji] = useState(articleData.userLikes);

  const isAuthor = userData.id === articleData.profile.id;
  const isEditable =
    termData.recordable &&
    articleData.year === parseInt(termData.recordTerm.date.split('-')[0]) &&
    articleData.term === termData.recordTerm.sequence;

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
        setEmojiCount((emojiCount) => emojiCount + 1);
        setIsClickedEmoji(true);
      } else {
        const unlikeResponse = await axios.delete(
          `/api/article/${articleId}/like`,
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );
        setEmojiCount((emojiCount) => emojiCount - 1);
        setIsClickedEmoji(false);
      }
    } catch (error) {
      console.error('Error while handling emoji click:', error);
    }
  };

  return {
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
  };
}

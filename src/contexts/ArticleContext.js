import { useState, createContext } from 'react';
import api from '@utils/api/APIService';

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
    if (!isClickedEmoji) {
      await api.post(`article/${articleId}/like`, {});
      setEmojiCount((emojiCount) => emojiCount + 1);
      setIsClickedEmoji(true);
    } else {
      await api.delete(`/article/${articleId}/like`);
      setEmojiCount((emojiCount) => emojiCount - 1);
      setIsClickedEmoji(false);
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

import { useState, useEffect, createContext, useContext } from 'react';
import { SeasonalQuestions } from '@utils/seasoning/SeasonalQuestions';
import useArticleForm from '@utils/hooks/useArticleForm';

export const WriteContext = createContext();

export function useWriteContext() {
  return useContext(WriteContext);
}

export function createWriteContext(loaderData) {
  const { termData } = loaderData;
  const currentYear = termData.recordTerm.date.split('-')[0];
  const currentTerm = termData.recordTerm.sequence;

  const { handleImageForm, handleArticleForm } = useArticleForm({
    mode: 'write',
    initialContents: [{ type: 'single', text: '' }],
    initialQuestions: SeasonalQuestions[currentTerm],
    initialPublished: true,
  });
  const {
    images,
    imageInputRef,
    handleImageUpload,
    handleImageReplace,
    handleImageDelete,
    handleImageChange,
  } = handleImageForm;
  const {
    contents,
    questions,
    published,
    setContents,
    setQuestions,
    togglePublished,
    handleQuestion,
    handleSave,
  } = handleArticleForm;
  const [showChatBubble, setShowChatBubble] = useState(false);

  useEffect(() => {
    const isChatBubbleShown = localStorage.getItem('isChatBubbleShown');

    if (!isChatBubbleShown || isChatBubbleShown === 'false') {
      setShowChatBubble(true);
    }
  }, []);

  const handleChatBubbleClick = () => {
    localStorage.setItem('isChatBubbleShown', true);
    setShowChatBubble(false);
  };

  return {
    currentYear,
    currentTerm,
    images,
    contents,
    questions,
    published,
    showChatBubble,
    imageInputRef,
    setContents,
    setQuestions,
    togglePublished,
    handleImageUpload,
    handleImageReplace,
    handleImageDelete,
    handleImageChange,
    handleQuestion,
    handleSave,
    handleChatBubbleClick,
  };
}

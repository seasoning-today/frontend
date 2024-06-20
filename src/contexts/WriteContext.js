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

  const { imageForm, articleForm } = useArticleForm({
    mode: 'write',
    initialContents: [{ type: 'single', text: '' }],
    initialQuestions: SeasonalQuestions[currentTerm],
    initialPublished: true,
  });
  const {
    images,
    setImages,
    setReplacingImageIndex,
    handleImageUpload,
    imageInputRef,
  } = imageForm;
  const {
    contents,
    questions,
    published,
    setContents,
    setQuestions,
    togglePublished,
    handleQuestion,
    handleSave,
  } = articleForm;
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
    selectedImages: images,
    contents,
    questions,
    published,
    showChatBubble,
    imageInputRef,
    setSelectedImages: setImages,
    setReplacingImageIndex,
    setContents,
    setQuestions,
    togglePublished,
    handleImageUpload,
    handleQuestion,
    handleSave,
    handleChatBubbleClick,
  };
}

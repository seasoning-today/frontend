import { useState, useEffect, createContext, useContext } from 'react';
import { SeasonalQuestions } from '@utils/seasoning/SeasonalQuestions';
import useArticleForm from '@utils/hooks/useArticleForm';

export const EditArticleContext = createContext();

export function useEditArticleContext() {
  return useContext(EditArticleContext);
}

export function createEditArticleContext(loaderData) {
  const { articleId, articleData } = loaderData;
  const currentYear = articleData.year;
  const currentTerm = articleData.term;

  const { handleImageForm, handleArticleForm } = useArticleForm({
    mode: 'edit',
    initialContents: JSON.parse(articleData.contents),
    initialQuestions: SeasonalQuestions[currentTerm],
    initialPublished: articleData.published,
    articleId: articleId,
  });
  const {
    images,
    setImages,
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
    const convertToBase64 = async (url) => {
      const modifiedUrl = url.replace(
        'https://d2k8hhpgefvtqq.cloudfront.net',
        '/article-images'
      );
      const response = await fetch(modifiedUrl);
      const blob = await response.blob();

      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
    };

    const processImages = async () => {
      const promises = articleData.images.map(async (img) => {
        const base64String = await convertToBase64(img.url);
        const fileName = img.url.split('/').pop();
        const fileExtension = fileName.split('.').pop();
        const fileType = img.type;

        return {
          imageName: fileName,
          imageExtension: fileExtension,
          imageType: fileType,
          imageData: base64String,
        };
      });

      const imageObjects = await Promise.all(promises);
      setImages(imageObjects);
    };

    processImages();
  }, []);

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

import api from '@utils/api/APIService';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useImageForm from '@utils/hooks/useImageForm';
import useToggleState from '@utils/hooks/useToggleState';

export default function useArticleForm({
  mode, // 'write' || 'edit'
  initialContents,
  initialQuestions,
  initialPublished,
  articleId = null,
}) {
  const navigate = useNavigate();
  const {
    images,
    setImages,
    setReplacingImageIndex,
    handleImageUpload,
    imageInputRef,
  } = useImageForm();

  const [contents, setContents] = useState(initialContents);
  const [questions, setQuestions] = useState(
    mode === 'edit'
      ? initialQuestions.filter(
          (question) =>
            !contents.some(
              (content) =>
                content.type === 'question' && content.text === question.text
            )
        )
      : initialQuestions
  );
  const [published, togglePublished] = useToggleState(initialPublished);

  const handleQuestion = () => {
    if (questions.length === 0) {
      return;
    }

    const initialContents = [{ type: 'single', text: '' }];
    setContents((contents) =>
      contents !== initialContents
        ? [
            ...contents,
            {
              type: 'question',
              text: questions[0].text,
              number: questions[0].number,
            },
            { type: 'answer', text: '' },
          ]
        : [
            {
              type: 'question',
              text: questions[0].text,
              number: questions[0].number,
            },
            { type: 'answer', text: '' },
          ]
    );
    setQuestions(questions.filter((_, index) => index !== 0));
  };

  const convertBase64ToBlob = (base64, mimeType) => {
    const byteCharacters = atob(base64);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], { type: mimeType });
  };

  const handleSave = async () => {
    if (!images.length && !contents.some((item) => item.text.trim())) {
      alert('내용을 입력하세요.');
      return;
    }

    try {
      const formData = new FormData();

      if (images.length > 0) {
        images.forEach(({ imageData, imageType, imageExtension }, index) => {
          const base64Data = imageData.split(',')[1];
          const imageBlob = convertBase64ToBlob(base64Data, imageType);
          formData.append(
            `images`,
            imageBlob,
            `image-${index}.${imageExtension}`
          );
        });
      } else {
        formData.append('images', null);
      }

      const contentsJson =
        mode === 'edit'
          ? JSON.stringify({
              image_modified: true,
              published: published,
              contents: JSON.stringify(contents),
            })
          : JSON.stringify({
              published: published,
              contents: JSON.stringify(contents),
            });
      formData.append(
        'request',
        new Blob([contentsJson], { type: 'application/json' })
      );

      if (mode === 'write') {
        const writeResponse = await api({
          method: 'POST',
          url: `/article`,
          data: formData,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        navigate(`/article/${writeResponse.data}`, { replace: true });
      } else if (mode === 'edit') {
        const putResponse = await api({
          method: 'PUT',
          url: `/article/${articleId}`,
          data: formData,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        navigate(`/article/${articleId}`, { replace: true });
      }
    } catch (error) {
      console.error('Error details:', error);
    }
  };

  return {
    imageForm: {
      images,
      setImages,
      setReplacingImageIndex,
      handleImageUpload,
      imageInputRef,
    },
    articleForm: {
      contents,
      questions,
      published,
      setContents,
      setQuestions,
      togglePublished,
      handleQuestion,
      handleSave,
    },
  };
}

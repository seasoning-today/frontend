import axios from 'axios';
import { useState, useEffect, useRef, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SeasonalQuestions } from '@utils/seasoning/SeasonalQuestions';
import useToggleState from '@utils/hooks/useToggleState';

export const WriteContext = createContext();

export function useWriteContext(loaderData) {
  const { termData } = loaderData;
  const initialContent = [{ type: 'single', text: '' }];
  const currentYear = termData.recordTerm.date.split('-')[0];
  const currentTerm = termData.recordTerm.sequence;

  const [replacingImageIndex, setReplacingImageIndex] = useState(null);
  const [selectedImages, setSelectedImages] = useState([]);
  const [contents, setContents] = useState(initialContent);
  const [questions, setQuestions] = useState(SeasonalQuestions[currentTerm]);
  const [published, togglePublished] = useToggleState(true);
  const [showChatBubble, setShowChatBubble] = useState(false);
  const imageInputRef = useRef(null);
  const navigate = useNavigate();

  const handleImageUpload = (event) => {
    const file = event.target.files && event.target.files[0];

    if (file && file.size > 10 * 1024 * 1024) {
      alert('이미지 파일 크기는 10MB를 초과할 수 없습니다.');
      event.target.value = null;
      return;
    }

    const fileName = file ? file.name : null;
    const fileExtension = fileName ? fileName.split('.').pop() : null;
    const fileType = fileName ? file.type : null;

    if (replacingImageIndex !== null) {
      /* 첨부된 사진 변경 */
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setSelectedImages((prev) =>
            prev.map((image, index) =>
              index === replacingImageIndex
                ? {
                    imageName: fileName,
                    imageExtension: fileExtension,
                    imageType: fileType,
                    imageData: e.target.result,
                  }
                : image
            )
          );
        };
        reader.readAsDataURL(file);
      }
      setReplacingImageIndex(null);
    } else if (selectedImages.length < 2) {
      /* 사진 첨부 */
      imageInputRef.current.click();
      const file = event.target.files && event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setSelectedImages((prev) => [
            ...prev,
            {
              imageName: fileName,
              imageExtension: fileExtension,
              imageType: fileType,
              imageData: e.target.result,
            },
          ]);
        };
        reader.readAsDataURL(file);
      }
    }

    event.target.value = null;
  };

  /* 질문 추가 */
  const handleQuestion = () => {
    if (questions.length === 0) {
      return;
    }

    setContents((contents) =>
      contents !== initialContent
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

  /* 콘텐츠 저장 */
  const handleSave = async () => {
    if (!selectedImages.length && !contents.some((item) => item.text.trim())) {
      alert('내용을 입력하세요.');
      return;
    }

    const accessToken = localStorage.getItem('accessToken');

    try {
      const formData = new FormData();

      if (selectedImages.length > 0) {
        selectedImages.forEach((selectedImage, idx) => {
          const base64Data = selectedImage.imageData.split(',')[1];
          const imageBlob = base64ToBlob(base64Data, selectedImage.imageType);
          formData.append(
            `images`,
            imageBlob,
            `image-${idx}.${selectedImage.imageExtension}`
          );
        });
      } else {
        formData.append('images', null);
      }

      const contentsJson = JSON.stringify({
        published: published,
        contents: JSON.stringify(contents),
      });
      formData.append(
        'request',
        new Blob([contentsJson], { type: 'application/json' })
      );

      const response = await axios({
        method: 'POST',
        url: `/api/article`,
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.status === 200) {
        navigate(`/article/${response.data}`, { replace: true });
      } else {
        console.error('Failed to save article.');
      }
    } catch (error) {
      console.error('Error details:', error);
    }
  };

  /* base64를 Blob으로 변환 */
  const base64ToBlob = (base64, mimeType) => {
    const byteCharacters = atob(base64);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], { type: mimeType });
  };

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
    selectedImages,
    contents,
    questions,
    published,
    showChatBubble,
    imageInputRef,
    setReplacingImageIndex,
    setSelectedImages,
    setContents,
    setQuestions,
    togglePublished,
    handleImageUpload,
    handleQuestion,
    handleSave,
    handleChatBubbleClick,
  };
}

import * as S from './style';
import axios from 'axios';

import Icon from '@components/atoms/Icon';
import Image from '@components/atoms/Image';
import Text from '@components/atoms/Text';
import ArticleHeader from '@components/molecules/ArticleHeader';
import ContentEditor from '@components/molecules/ContentEditor';
import ArticleImageCarousel from '@components/organisms/ArticleImageCarousel';

import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { SeasonalQuestions } from '@utils/seasoning/SeasonalQuestions';

import chat_bubble from '@assets/write/chat-bubble.webp';

export default function WriteTemplate({ recordTerm }) {
  const currentTerm = recordTerm.sequence;
  const currentYear = recordTerm.date;

  const navigate = useNavigate();

  const [selectedImages, setSelectedImages] = useState([]);
  const [replacingImageIndex, setReplacingImageIndex] = useState(null);
  const imageInputRef = useRef(null);

  const initialContent = [{ type: 'single', text: '' }];
  const [contents, setContents] = useState(initialContent);
  const [questions, setQuestions] = useState(SeasonalQuestions[currentTerm]);

  const [published, setPublished] = useState(true);

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

  /* 공개 비공개 설정 */
  const togglePublished = () => {
    setPublished((prevPrivacy) => !prevPrivacy);
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
  function base64ToBlob(base64, mimeType) {
    const byteCharacters = atob(base64);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], { type: mimeType });
  }

  /* 질문 추가 도움말 */
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

  return (
    <S.Layout>
      <ArticleHeader
        year={currentYear.split('-')[0]}
        term={currentTerm}
        firstOptionItem={<Icon width="1.5" height="1.5" type="quit" />}
        firstOptionAction={() => {
          navigate(-1);
        }}
        secondOptionItem={
          <Text size="1" color="#000">
            저장
          </Text>
        }
        secondOptionAction={handleSave}
      />

      <S.ContentContainer>
        <ArticleImageCarousel
          images={selectedImages.map((image) => image.imageData)}
          setImages={setSelectedImages}
          imageInputRef={imageInputRef}
          setReplacingImageIndex={setReplacingImageIndex}
          handleImageUpload={handleImageUpload}
        />

        <ContentEditor
          contents={contents}
          setContents={setContents}
          setQuestions={setQuestions}
        />
      </S.ContentContainer>

      <S.ToolBar>
        <Icon
          width="1.5"
          height="1.5"
          type="picture"
          onClick={handleImageUpload}
          style={{ opacity: selectedImages.length === 2 ? '0.3' : '1' }}
        />
        <Icon
          width="1.5"
          height="1.5"
          type={published === true ? 'privacy-off' : 'privacy-on'}
          onClick={togglePublished}
        />
        <Icon
          width="1.5"
          height="1.5"
          type="question-stack"
          onClick={handleQuestion}
          style={{ opacity: questions.length === 0 ? '0.3' : '1' }}
        />
      </S.ToolBar>

      {showChatBubble && (
        <Image
          src={chat_bubble}
          width="16.25"
          height="2.7"
          onClick={handleChatBubbleClick}
          style={{
            position: 'absolute',
            left: '3.7rem',
            bottom: '2.65rem',
            zIndex: '10',
            cursor: 'pointer',
          }}
        />
      )}
    </S.Layout>
  );
}

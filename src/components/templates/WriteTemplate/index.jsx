import * as S from './style';

import Icon from '@components/atoms/Icon';
import Image from '@components/atoms/Image';
import Text from '@components/atoms/Text';
import ArticleHeader from '@components/molecules/ArticleHeader';
import ContentEditor from '@components/molecules/ContentEditor';
import ArticleImageCarousel from '@components/organisms/ArticleImageCarousel';

import { WriteContext } from '@contexts/WriteContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import chat_bubble from '@assets/write/chat-bubble.webp';

export default function WriteTemplate() {
  const {
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
  } = useContext(WriteContext);
  const navigate = useNavigate();

  return (
    <S.Layout>
      <ArticleHeader
        year={currentYear}
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

import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import Textarea from 'react-textarea-autosize';

import AddQuestion from '@components/write/AddQuestion';

import chat_bubble from '@assets/ChatBubble.png';

const Layout = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Top = styled.div`
  position: relative;
  width: 100%;
  flex-shrink: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.81rem 1.31rem 0 1.62rem;

  .write__save {
    color: #000;
    text-align: right;
    font-family: AppleSDGothicNeo;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    cursor: pointer;
  }
`;

const Title = styled.div`
  position: relative;
  width: 100%;
  flex-shrink: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 0.87rem;

  .write__title__chinese {
    color: #000;
    text-align: center;
    font-family: Noto Serif KR;
    font-size: 2rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .write__title__korean {
    color: #000;
    text-align: center;

    font-family: Noto Serif KR;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const ContentContainer = styled.div`
  position: relative;
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  padding: 1rem 1.31rem 4.81rem 1.31rem;

  overflow-y: auto;
`;

const ImagesContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  gap: 1.5rem;
  align-items: center;
  height: 17rem;

  padding: 0.3rem;
`;

const Images = styled.img`
  width: 100%;
  height: 16.3125rem;
  object-fit: cover;
  border-radius: 0.5rem;

  cursor: pointer;
`;

const Text = styled(Textarea)`
  width: 100%;
  min-height: 1.2rem;
  color: #333;
  text-align: justify;
  font-family: AppleSDGothicNeoR00;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  flex-shrink: 0;

  border: none;
  outline: none;
  resize: none;
`;

const ChatBubble = styled.img`
  position: fixed;
  bottom: 2.5rem;
  display: flex;

  z-index: 2;

  width: 17.75rem;
  height: 2.75rem;
`;

const ToolBar = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 3.25rem;

  display: flex;
  align-items: center;
  column-gap: 1.5rem;
  padding: 0 1.38rem;

  background-color: #fff;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.2);

  div:hover {
    opacity: 0.3;
    cursor: pointer;
  }

  .write__button__addimg.disabled {
    opacity: 0.3;
    cursor: default;
  }

  .write__button__question.disabled {
    opacity: 0.3;
    cursor: default;
  }
`;

const WritePage = () => {
  const Qdata = [
    {
      data: '오늘의 날씨는?',
    },
    {
      data: 'tmi',
    },
    {
      data: '기분은 어떤가요?',
    },
  ];

  const [selectedImages, setSelectedImages] = useState([]);
  const [replacingImageIndex, setReplacingImageIndex] = useState(null);
  const [BaseText, setBaseText] = useState([]);
  const [Question, setQuestion] = useState([]);
  const [Answer, setAnswer] = useState([]);
  const [showChatBubble, setShowChatBubble] = useState(true);
  const imageInputRef = useRef(null);
  const scrollRef = useRef();
  const textareasRefs = useRef(Qdata.map(() => useRef()));
  const navigate = useNavigate();

  /* 사진 업로드 */
  const handleImageChange = (index) => {
    imageInputRef.current.click();

    setReplacingImageIndex(index);
  };

  const handleImageUpload = (event) => {
    /* 첨부된 사진 변경 */
    if (replacingImageIndex !== null) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setSelectedImages((prev) => {
            const newImages = [...prev];
            newImages[replacingImageIndex] = e.target.result;
            return newImages;
          });
        };
        reader.readAsDataURL(file);
      }
      setReplacingImageIndex(null);
    } else if (selectedImages.length < 2) {
      /* 사진 첨부 */
      imageInputRef.current.click();
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setSelectedImages((prev) => [...prev, e.target.result]);
        };
        reader.readAsDataURL(file);
      }
    }
  };

  /* 질문 추가 말풍선 */
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowChatBubble(false);
    }, 5000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  /* 질문 추가 */
  const handleQuestion = () => {
    if (Question.length < 3) {
      const newQuestion = Qdata[Question.length].data;

      console.log(`Added question: ${newQuestion}`);

      setQuestion((prev) => [...prev, { question: newQuestion }]);
      setAnswer((prev) => [...prev, '']);

      setTimeout(() => {
        textareasRefs.current[Question.length].current.focus();
      }, 0);
    }
  };

  /* 질문 삭제 */
  const handleDeleteQuestion = (index) => {
    if (index >= 0 && index < Question.length && Answer[index].trim() === '') {
      console.log(`Deleted question: ${Question[index].question}`);
      setQuestion((prevQuestion) => {
        const newQuestion = [...prevQuestion];
        newQuestion.splice(index, 1);
        return newQuestion;
      });

      setAnswer((prevAnswer) => {
        const newAnswer = [...prevAnswer];
        newAnswer.splice(index, 1);
        return newAnswer;
      });

      if (index > 0) {
        textareasRefs.current[index - 1].current.focus();
      }
    }
  };

  /* 저장 */
  const handleSave = () => {
    saveToLocalStorage();
    navigate('/saved');
  };

  useEffect(() => {
    const storedQuestion = localStorage.getItem('Question');
    const storedImages = localStorage.getItem('selectedImages');
    const storedBaseText = localStorage.getItem('BaseText');
    const storedAnswer = localStorage.getItem('Answer');

    if (storedQuestion) {
      setQuestion(JSON.parse(storedQuestion));
    }
    if (storedImages) {
      setSelectedImages(JSON.parse(storedImages));
    }
    if (storedBaseText) {
      setBaseText(JSON.parse(storedBaseText));
    }
    if (storedAnswer) {
      setAnswer(JSON.parse(storedAnswer));
    }
  }, []);

  const saveToLocalStorage = () => {
    localStorage.setItem('Question', JSON.stringify(Question));
    localStorage.setItem('selectedImages', JSON.stringify(selectedImages));
    localStorage.setItem('BaseText', JSON.stringify(BaseText));
    localStorage.setItem('Answer', JSON.stringify(Answer));
  };

  /* 스크롤 포커스 */
  useEffect(() => {
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [Question, Answer]);

  return (
    <Layout>
      <Top>
        <Link to={`/home`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M6.40002 18.6538L5.34619 17.6L10.9462 12L5.34619 6.40002L6.40002 5.34619L12 10.9462L17.6 5.34619L18.6538 6.40002L13.0538 12L18.6538 17.6L17.6 18.6538L12 13.0538L6.40002 18.6538Z"
              fill="black"
            />
          </svg>
        </Link>
        <span className="write__save" onClick={handleSave}>
          저장
        </span>
      </Top>

      <Title>
        <span className="write__title__chinese">立春</span>
        <span className="write__title__korean">입춘</span>
      </Title>

      <ContentContainer ref={scrollRef}>
        {selectedImages.length > 0 && (
          <ImagesContainer>
            {selectedImages.map((image, index) => (
              <Images
                key={index}
                src={image}
                onClick={() => handleImageChange(index)}
              />
            ))}
          </ImagesContainer>
        )}
        <Text
          ref={textareasRefs.current}
          value={BaseText}
          placeholder="이곳에 기록해보세요"
          onChange={(e) => {
            setBaseText(e.target.value);
          }}
        />
        {Question.map((item, index) => (
          <React.Fragment key={index}>
            <AddQuestion q_value={item.question} />
            <Text
              ref={textareasRefs.current[index]}
              value={Answer[index]}
              onChange={(e) => {
                setAnswer((prev) => {
                  const newContent = [...prev];
                  newContent[index] = e.target.value;
                  return newContent;
                });
              }}
              onKeyDown={(e) => {
                if (e.key === 'Backspace') {
                  handleDeleteQuestion(index);
                }
              }}
            />
          </React.Fragment>
        ))}
      </ContentContainer>

      {showChatBubble && <ChatBubble src={chat_bubble} />}
      <ToolBar>
        <div
          className={`write__button__addimg ${
            selectedImages.length === 2 ? 'disabled' : ''
          }`}
          onClick={handleImageUpload}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M5.3077 20.5C4.80257 20.5 4.375 20.325 4.025 19.975C3.675 19.625 3.5 19.1974 3.5 18.6923V5.30773C3.5 4.8026 3.675 4.37503 4.025 4.02503C4.375 3.67503 4.80257 3.50003 5.3077 3.50003H18.6923C19.1974 3.50003 19.625 3.67503 19.975 4.02503C20.325 4.37503 20.5 4.8026 20.5 5.30773V18.6923C20.5 19.1974 20.325 19.625 19.975 19.975C19.625 20.325 19.1974 20.5 18.6923 20.5H5.3077ZM5.3077 19H18.6923C18.7692 19 18.8397 18.968 18.9038 18.9039C18.9679 18.8397 19 18.7692 19 18.6923V5.30773C19 5.2308 18.9679 5.16027 18.9038 5.09616C18.8397 5.03206 18.7692 5.00001 18.6923 5.00001H5.3077C5.23077 5.00001 5.16024 5.03206 5.09612 5.09616C5.03202 5.16027 4.99997 5.2308 4.99997 5.30773V18.6923C4.99997 18.7692 5.03202 18.8397 5.09612 18.9039C5.16024 18.968 5.23077 19 5.3077 19ZM6.75003 16.75H17.3269L14.0384 12.3654L11.2308 16.0192L9.23075 13.4616L6.75003 16.75Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="write__button__privacy">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M6.3077 21.5C5.80898 21.5 5.38302 21.3234 5.02982 20.9701C4.67661 20.6169 4.5 20.191 4.5 19.6923V10.3077C4.5 9.809 4.67661 9.38304 5.02982 9.02984C5.38302 8.67662 5.80898 8.50001 6.3077 8.50001H7.5V6.50001C7.5 5.25131 7.93782 4.18915 8.81345 3.31351C9.6891 2.43788 10.7513 2.00006 12 2.00006C13.2487 2.00006 14.3109 2.43788 15.1865 3.31351C16.0621 4.18915 16.5 5.25131 16.5 6.50001V8.50001H17.6922C18.191 8.50001 18.6169 8.67662 18.9701 9.02984C19.3233 9.38304 19.5 9.809 19.5 10.3077V19.6923C19.5 20.191 19.3233 20.6169 18.9701 20.9701C18.6169 21.3234 18.191 21.5 17.6922 21.5H6.3077ZM6.3077 20H17.6922C17.782 20 17.8557 19.9711 17.9134 19.9134C17.9711 19.8557 18 19.782 18 19.6923V10.3077C18 10.218 17.9711 10.1442 17.9134 10.0865C17.8557 10.0288 17.782 9.99999 17.6922 9.99999H6.3077C6.21795 9.99999 6.14423 10.0288 6.08652 10.0865C6.02882 10.1442 5.99997 10.218 5.99997 10.3077V19.6923C5.99997 19.782 6.02882 19.8557 6.08652 19.9134C6.14423 19.9711 6.21795 20 6.3077 20ZM12 16.75C12.4859 16.75 12.899 16.5798 13.2394 16.2394C13.5798 15.899 13.75 15.4859 13.75 15C13.75 14.5141 13.5798 14.101 13.2394 13.7606C12.899 13.4202 12.4859 13.25 12 13.25C11.5141 13.25 11.1009 13.4202 10.7606 13.7606C10.4202 14.101 10.25 14.5141 10.25 15C10.25 15.4859 10.4202 15.899 10.7606 16.2394C11.1009 16.5798 11.5141 16.75 12 16.75ZM8.99997 8.50001H15V6.50001C15 5.66668 14.7083 4.95834 14.125 4.37501C13.5416 3.79168 12.8333 3.50001 12 3.50001C11.1666 3.50001 10.4583 3.79168 9.87497 4.37501C9.29164 4.95834 8.99997 5.66668 8.99997 6.50001V8.50001Z"
              fill="black"
            />
          </svg>
        </div>
        <div
          className={`write__button__question ${
            Question.length === 3 ? 'disabled' : ''
          }`}
          onClick={handleQuestion}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M13.7499 14.7692C13.9948 14.7692 14.2086 14.6779 14.3913 14.4952C14.574 14.3125 14.6653 14.0987 14.6653 13.8539C14.6653 13.609 14.574 13.3952 14.3913 13.2125C14.2086 13.0298 13.9948 12.9385 13.7499 12.9385C13.5051 12.9385 13.2913 13.0298 13.1086 13.2125C12.9259 13.3952 12.8345 13.609 12.8345 13.8539C12.8345 14.0987 12.9259 14.3125 13.1086 14.4952C13.2913 14.6779 13.5051 14.7692 13.7499 14.7692ZM13.1538 11.7615H14.3461C14.3589 11.3103 14.4169 10.9753 14.5201 10.7567C14.6233 10.5381 14.8679 10.2423 15.2538 9.86923C15.7153 9.42693 16.0294 9.05321 16.1961 8.74808C16.3627 8.44296 16.4461 8.08848 16.4461 7.68463C16.4461 6.9731 16.1948 6.38624 15.6922 5.92406C15.1897 5.46187 14.5422 5.23078 13.7499 5.23078C13.1307 5.23078 12.5862 5.40161 12.1163 5.74328C11.6464 6.08495 11.3051 6.5436 11.0922 7.11923L12.173 7.57308C12.3422 7.16923 12.5592 6.86635 12.824 6.66443C13.0887 6.4625 13.3974 6.36153 13.7499 6.36153C14.1884 6.36153 14.5486 6.48846 14.8307 6.74231C15.1128 6.99616 15.2538 7.33077 15.2538 7.74616C15.2538 7.99872 15.1823 8.23559 15.0394 8.45676C14.8964 8.67791 14.6487 8.95002 14.2961 9.27311C13.8102 9.69874 13.4983 10.0571 13.3605 10.3481C13.2227 10.6391 13.1538 11.1103 13.1538 11.7615ZM8.05765 17.5C7.55252 17.5 7.12496 17.325 6.77498 16.975C6.42498 16.625 6.24998 16.1974 6.24998 15.6923V4.30773C6.24998 3.8026 6.42498 3.37503 6.77498 3.02503C7.12496 2.67503 7.55252 2.50003 8.05765 2.50003H19.4422C19.9473 2.50003 20.3749 2.67503 20.7249 3.02503C21.0749 3.37503 21.2499 3.8026 21.2499 4.30773V15.6923C21.2499 16.1974 21.0749 16.625 20.7249 16.975C20.3749 17.325 19.9473 17.5 19.4422 17.5H8.05765ZM8.05765 16H19.4422C19.5191 16 19.5897 15.968 19.6538 15.9039C19.7179 15.8397 19.7499 15.7692 19.7499 15.6923V4.30773C19.7499 4.2308 19.7179 4.16027 19.6538 4.09616C19.5897 4.03206 19.5191 4.00001 19.4422 4.00001H8.05765C7.98072 4.00001 7.9102 4.03206 7.8461 4.09616C7.78198 4.16027 7.74993 4.2308 7.74993 4.30773V15.6923C7.74993 15.7692 7.78198 15.8397 7.8461 15.9039C7.9102 15.968 7.98072 16 8.05765 16ZM4.55768 20.9999C4.05256 20.9999 3.625 20.8249 3.275 20.4749C2.925 20.1249 2.75 19.6974 2.75 19.1923V6.30773H4.24998V19.1923C4.24998 19.2692 4.28203 19.3397 4.34613 19.4038C4.41024 19.4679 4.48076 19.5 4.55768 19.5H17.4422V20.9999H4.55768Z"
              fill="black"
            />
          </svg>
        </div>
      </ToolBar>
      <input
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        ref={imageInputRef}
        onChange={handleImageUpload}
      />
    </Layout>
  );
};

export default WritePage;

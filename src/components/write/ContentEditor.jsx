import styled from 'styled-components';
import Textarea from 'react-textarea-autosize';

import Question from '@components/write/Question';

const Layout = styled.div`
  position: relative;
  width: 100%;
  flex-grow: 1;

  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 1.5rem;
  padding: 0.5rem 1.31rem;

  overflow-y: auto;
`;

const ImagesContainer = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  align-items: center;
  overflow-x: scroll;
  gap: 1.5rem;

  cursor: pointer;
  padding: 0.3rem;

  .with__delete__icon {
    display: flex;
    width: 100%;
    height: 16.3125rem;
    flex-shrink: 0;

    svg {
      position: relative;
      flex-shrink: 0;
      right: 2rem;
      top: 0.5rem;
    }
  }
`;

const Image = styled.img`
  width: 100%;
  height: 16.3125rem;
  flex-shrink: 0;

  object-fit: cover;
  border-radius: 0.5rem;

  cursor: pointer;
`;

const DotsContainer = styled.div`
  position: absolute;
  top: 16rem;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 0.4rem;

  z-index: 2000;
`;

const Dots = styled.div`
  display: flex;

  width: ${({ active }) => (active ? '0.3125rem' : '0.25rem')};
  height: ${({ active }) => (active ? '0.3125rem' : '0.25rem')};
  border-radius: 50%;

  cursor: pointer;
  background-color: ${({ active }) =>
    active ? '#FFF' : 'rgba(255, 255, 255, 0.40)'};

  transition: all 0.2s ease-in-out;
`;

const Text = styled(Textarea)`
  width: 100%;
  min-height: 1.2rem;
  color: #333;
  text-align: justify;
  font-family: 'Apple SD Gothic Neo';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  flex-shrink: 0;

  border: none;
  outline: none;
  resize: none;
`;

const ContentEditor = ({ contents, setContents }) => {
  /* 콘텐츠 편집 */
  const handleTextChange = (text, idx) => {
    setContents((contents) =>
      contents.map((item, index) =>
        index === idx ? { ...item, text: text } : item
      )
    );
  };

  /* 질문 삭제 */
  const handleDeleteQuestion = (event, idx) => {
    if (event.key === 'Backspace' && contents[idx].text === '') {
      event.preventDefault();

      if (contents.length <= 2) {
        return;
      }

      if (contents[idx].type === 'answer') {
        setQuestions((prevQuestions) => {
          let newQuestions = [
            ...prevQuestions,
            {
              number: contents[idx - 1].number,
              text: contents[idx - 1].text,
            },
          ];
          newQuestions.sort((a, b) => a.number - b.number);
          return newQuestions;
        });
      }

      setContents((prevContents) =>
        prevContents.filter((_, index) =>
          contents[idx].type === 'answer'
            ? index !== idx && index !== idx - 1
            : index !== idx
        )
      );
    }
  };

  return (
    <Layout>
      {contents.map((item, idx) => {
        switch (item.type) {
          case 'single':
          case 'answer':
            return (
              <Text
                key={idx}
                placeholder={
                  item.type === 'single'
                    ? '오늘을 기록해 보세요.'
                    : '이곳에 기록해 보세요.'
                }
                value={item.text}
                onChange={(e) => handleTextChange(e.target.value, idx)}
                onKeyDown={(e) => handleDeleteQuestion(e, idx)}
              />
            );
          case 'question':
            return <Question key={idx} q_value={item.text} />;
          default:
            return undefined;
        }
      })}
    </Layout>
  );
};

export default ContentEditor;

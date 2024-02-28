import styled from 'styled-components';
import Textarea from 'react-textarea-autosize';

import Question from '@components/write/Question';

const Text = styled(Textarea)`
  width: 100%;
  min-height: 1.2rem;
  flex-shrink: 0;

  border: none;
  outline: none;
  resize: none;

  color: #333;
  text-align: justify;
  font-family: 'Apple SD Gothic Neo';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const ContentEditor = ({ readOnly, contents, setContents, setQuestions }) => {
  const handleTextChange = (text, idx) => {
    setContents((contents) =>
      contents.map((item, index) =>
        index === idx ? { ...item, text: text } : item
      )
    );
  };

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
    <>
      {contents.map((item, idx) => {
        switch (item.type) {
          case 'single':
          case 'answer':
            return (
              <Text
                key={idx}
                readOnly={readOnly}
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
            return <Question key={idx} text={item.text} />;
          default:
            return undefined;
        }
      })}
    </>
  );
};

export default ContentEditor;

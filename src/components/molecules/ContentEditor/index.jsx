import * as S from './style';

export default function ContentEditor({
  readOnly,
  contents,
  setContents,
  setQuestions,
}) {
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
    <S.Layout>
      {contents.map((item, idx) => {
        switch (item.type) {
          case 'question':
            return (
              <S.Row key={idx}>
                <S.Question />
                <S.Text
                  readOnly={readOnly}
                  value={item.text}
                  style={{ color: '#8e8c86' }}
                />
              </S.Row>
            );
          case 'single':
          case 'answer':
            return (
              <S.Text
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
          default:
            return undefined;
        }
      })}
    </S.Layout>
  );
}

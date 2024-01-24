import styled from 'styled-components';

const Question = styled.div`
  width: 100%;

  display: flex;
  column-gap: 0.88rem;

  color: #8e8c86;
  text-align: justify;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  .write__question__aside {
    width: 0.25rem;
    height: 100%;

    background-color: #919191;
  }
`;

const AddQuestion = ({ question }) => {
  return (
    <Question>
      <div className="write__question__aside" />
      {question}
    </Question>
  );
};

export default AddQuestion;

import React, { useState } from 'react';
import styled from 'styled-components';

const Answer = styled.textarea`
  width: 100%;
  height: auto;
  color: #333;
  text-align: justify;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  /* border: none;*/
  outline: none;
  resize: none;
`;

const AddAnswer = () => {
  const [text, setText] = useState('');

  const handleInputChange = (event) => {
    setText(event.target.value);

    event.target.style.height = 'auto';
    event.target.style.height = `${event.target.scrollHeight}px`;
  };
  return <Answer value={text} onChange={handleInputChange} />;
};

export default AddAnswer;

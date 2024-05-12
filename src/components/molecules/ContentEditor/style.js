import styled from 'styled-components';
import Textarea from 'react-textarea-autosize';

export const Layout = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1.5rem;
`;

export const Row = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  column-gap: 0.88rem;
`;

export const Question = styled.div`
  width: 0.125rem;
  min-width: 0.125rem;
  height: 100%;
  min-height: 1.2rem;

  background-color: #919191;
`;

export const Text = styled(Textarea)`
  width: 100%;

  color: #333;
  border: none;
  outline: none;
  resize: none;

  text-align: justify;
  font-family: 'Apple SD Gothic Neo';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

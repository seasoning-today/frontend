import styled from 'styled-components';

export const Layout = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  column-gap: 0.75rem;

  cursor: ${({ type }) =>
    type === 'ARTICLE_OPEN' || type === 'ARTICLE_FEEDBACK'
      ? 'pointer'
      : 'default'};
`;

export const Content = styled.div`
  flex-grow: 1;
`;

export const DefaultLogo = styled.div`
  width: 2.9375rem;
  height: 2.9375rem;
  border: 1px solid #000;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
`;

export const ButtonContainer = styled.div`
  width: auto;
  flex-shrink: 0;

  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  margin-left: 0.75rem;
`;

export const Button = styled.button`
  width: auto;
  min-width: 3.4375rem;

  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 0.5rem;
  padding: 0.3rem 0.7rem;

  cursor: pointer;

  background-color: ${({ approve }) => (approve ? '#0d6b38' : '#f0f0f0')};
`;

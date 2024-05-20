import styled from 'styled-components';

export const Layout = styled.li`
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

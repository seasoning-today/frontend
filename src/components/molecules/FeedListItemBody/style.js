import styled from 'styled-components';

export const Layout = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;
`;

export const PreviewContainer = styled.div`
  width: 100%;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

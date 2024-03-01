import React from 'react';
import styled from 'styled-components';

import { useLocation } from 'react-router-dom';

import SeasonMenu from '@components/home/SeasonMenu';
import SeasonThumbnail from '@components/home/SeasonThumbnail';

const Container = styled.section`
  position: relative;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1.75rem;
`;

const Menus = styled.section`
  position: relative;
  width: 100%;
  flex-shrink: 0;

  display: flex;
  align-items: center;
  padding: 0 1.25rem;
  gap: 0.5rem;
  overflow-x: scroll;
  overflow-y: hidden;
`;

const Content = styled.section`
  position: relative;
  width: 100%;
  flex-grow: 1;
  padding: 0 1.31rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1.5rem;
  overflow-y: auto;
  overflow-x: hidden;
`;

const EmptyContents = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 0.5rem;
  padding-bottom: 4rem;

  .empty__illust {
    width: 6.75rem;
    height: 5.25rem;
    /* flex-shrink: 0; */
  }

  .empty__text {
    color: #8c8c8c;
    text-align: center;
    font-family: 'Apple SD Gothic Neo';
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const SeasonalContent = ({ homeData }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedTerm =
    searchParams.get('term') === null ? 0 : searchParams.get('term');

  const terms = Array.from({ length: 24 }, (_, i) => i + 1);
  console.log(homeData);

  return (
    <Container>
      <Menus>
        {terms.map((term) => (
          <SeasonMenu
            key={term}
            term={term}
            selectedTerm={parseInt(selectedTerm)}
          />
        ))}
      </Menus>

      <Content>
        {homeData.length > 0 ? (
          homeData.map((article) => (
            <SeasonThumbnail
              key={article.id}
              articleId={article.id}
              term={article.term}
              year={article.year}
              image={article.image}
              preview={article.preview}
            />
          ))
        ) : (
          <EmptyContents>
            <span className="empty__text">
              해당 절기에 대한 기록이 없습니다.
            </span>
          </EmptyContents>
        )}
      </Content>
    </Container>
  );
};

export default SeasonalContent;

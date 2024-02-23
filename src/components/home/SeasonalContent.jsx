import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { useLocation, useNavigate } from 'react-router-dom';

import SeasonMenu from '@components/home/SeasonMenu';
import ArticleRow from '@components/home/ArticleRow';

const Container = styled.section`
  position: relative;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Menus = styled.section`
  position: relative;
  width: 100%;
  height: 7.31rem;

  display: flex;
  align-items: flex-start;
  padding: 0 1.31rem;
  gap: 1.13rem;
  overflow-x: scroll;
  overflow-y: hidden;
`;

const Content = styled.section`
  position: relative;
  width: 100%;
  height: calc(100% - 7.31rem);

  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  overflow-x: hidden;
`;

const Line = styled.div`
  width: calc(100% - 1.25rem);
  min-height: 0.03125rem;
  background-color: #a9a9a9;
`;

const SeasonalContent = ({ homeData }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const selectedTerm =
    searchParams.get('term') === null ? 1 : searchParams.get('term');

  const terms = Array.from({ length: 24 }, (_, i) => i + 1);

  return (
    <Container>
      <Menus>
        {terms.map((term) => (
          <SeasonMenu
            key={term}
            term={term}
            selectedTerm={parseInt(selectedTerm)}
            onClick={() => {
              navigate(`/home?category=term&term=${term}`);
            }}
          />
        ))}
      </Menus>

      <Content>
        {homeData.map((article) => (
          <React.Fragment key={article.id}>
            <Line />
            <ArticleRow
              articleId={article.id}
              thumbnail={article.image}
              text={article.preview}
            />
          </React.Fragment>
        ))}
      </Content>
    </Container>
  );
};

export default SeasonalContent;

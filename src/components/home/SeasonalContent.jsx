import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

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

const SeasonalContent = () => {
  const terms = Array.from({ length: 24 }, (_, i) => i + 1);
  const [selectedTerm, setSelectedTerm] = useState(1);
  const [articles, setArticles] = useState([]);

  console.log(articles);

  useEffect(() => {
    console.log(`${selectedTerm}번 절기에 대한 글을 불러옵니다.`);

    const fetchArticlesByTerm = async () => {
      const accessToken = localStorage.getItem('accessToken');

      await axios({
        method: 'GET',
        url: `/api/article/list/term/${selectedTerm}`,
        headers: { Authorization: `Bearer ${accessToken}` },
      }).then((res) => {
        setArticles(res.data);
      });
    };
    fetchArticlesByTerm();
  }, [selectedTerm]);

  return (
    <Container>
      <Menus>
        {terms.map((term) => (
          <SeasonMenu
            key={term}
            term={term}
            selectedTerm={selectedTerm}
            onClick={() => setSelectedTerm(term)}
          />
        ))}
      </Menus>

      <Content>
        {articles.map((article) => (
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

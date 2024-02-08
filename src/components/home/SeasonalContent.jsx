import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import SeasonMenu from '@components/home/SeasonMenu';
import ArticleRow from '@components/home/ArticleRow';

const Container = styled.section`
  position: relative;
  /* width: 100%; */
  /* height: 100%; */

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: yellow;
`;

const Menus = styled.section`
  position: relative;
  height: 7.31rem;

  display: flex;
  align-items: flex-start;
  padding: 0 1.31rem;
  gap: 1.13rem;
  overflow-x: scroll;
  /* overflow-y: hidden; */
`;

const Content = styled.section`
  position: relative;
  width: 100%;
  height: calc(100% - 7.31rem);

  /* display: flex;
  flex-direction: column;
  align-items: center; */
`;

const Line = styled.div`
  width: calc(100% - 1.25rem);
  height: 0.03125rem;
  background-color: #a9a9a9;
`;

const SeasonalContent = () => {
  const terms = Array.from({ length: 24 }, (_, i) => i + 1);
  const [selectedTerm, setSelectedTerm] = useState(1);
  const [articles, setArticles] = useState([]);

  console.log(articles);

  useEffect(() => {
    console.log(`${selectedTerm}번 절기에 대한 글을 불러옵니다...`);

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
            onClick={() => setSelectedTerm(term)}
          />
        ))}
      </Menus>

      <Content>
        {/* {articles.length >= 0 ? <Line /> : undefined}
        {articles.map((article, idx) => (
          <React.Fragment key={idx}>
            <ArticleRow thumbnail={article.image} text={article.preview} />
            <Line />
          </React.Fragment>
        ))}
        <ArticleRow
          thumbnail={`https://image.fmkorea.com/files/attach/new3/20240208/486616/6334843684/6702009047/5ffffb04008e296e138671ef25ff09bf.png`}
          text={'테스트 테스트 테스트 테스트'}
        />
        <Line />
        <ArticleRow
          thumbnail={`https://image.fmkorea.com/files/attach/new3/20240208/486616/6334843684/6702009047/5ffffb04008e296e138671ef25ff09bf.png`}
          text={'테스트 테스트 테스트 테스트'}
        />
        <Line />
        <ArticleRow
          thumbnail={`https://image.fmkorea.com/files/attach/new3/20240208/486616/6334843684/6702009047/5ffffb04008e296e138671ef25ff09bf.png`}
          text={
            '테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트'
          }
        />
        <Line />
        <ArticleRow
          thumbnail={`https://image.fmkorea.com/files/attach/new3/20240208/486616/6334843684/6702009047/5ffffb04008e296e138671ef25ff09bf.png`}
          text={
            '테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트'
          }
        />
        <Line />
        <ArticleRow
          thumbnail={`https://image.fmkorea.com/files/attach/new3/20240208/486616/6334843684/6702009047/5ffffb04008e296e138671ef25ff09bf.png`}
          text={
            '테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트'
          }
        />
        <Line />
        <ArticleRow
          thumbnail={`https://image.fmkorea.com/files/attach/new3/20240208/486616/6334843684/6702009047/5ffffb04008e296e138671ef25ff09bf.png`}
          text={
            '테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트'
          }
        />
        <Line />
        <ArticleRow
          thumbnail={`https://image.fmkorea.com/files/attach/new3/20240208/486616/6334843684/6702009047/5ffffb04008e296e138671ef25ff09bf.png`}
          text={
            '테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트'
          }
        />
        <Line /> */}
      </Content>
    </Container>
  );
};

export default SeasonalContent;

import styled from 'styled-components';

import SeasonMenu from '@components/home/SeasonMenu';
import ArticleRow from '@components/home/ArticleRow';

const Container = styled.section`
  /* height: 100%; */

  display: flex;
  flex-direction: column;
`;

const Menus = styled.section`
  height: 7.31rem;
  display: flex;
  align-items: flex-start;
  padding: 0 1.31rem;
  gap: 1.13rem;
  overflow-y: hidden;
`;

const Content = styled.section`
  background-color: #ffffff;
`;

const SeasonalContent = () => {
  const terms = Array.from({ length: 24 }, (_, i) => i + 1);

  return (
    <>
      <Container>
        <Menus>
          {terms.map((term) => (
            <SeasonMenu key={term} term={term} />
          ))}
        </Menus>

        <Content>
          <ArticleRow thumbnail />
          <ArticleRow thumbnail />
          <ArticleRow />
          <ArticleRow thumbnail />
          <ArticleRow thumbnail />
          <ArticleRow thumbnail />
        </Content>
      </Container>
    </>
  );
};

export default SeasonalContent;

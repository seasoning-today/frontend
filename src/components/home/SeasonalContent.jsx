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
  overflow: scroll;
`;

const Content = styled.section`
  /* height: 22.5rem; */
  /* height: 100%; */
  /* overflow: scroll; */

  background-color: #ffffff;
`;

const SeasonalContent = () => {
  return (
    <>
      <Container>
        <Menus>
          <SeasonMenu />
          <SeasonMenu />
          <SeasonMenu />
          <SeasonMenu />
          <SeasonMenu />
          <SeasonMenu />
          <SeasonMenu />
          <SeasonMenu />
          <SeasonMenu />
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

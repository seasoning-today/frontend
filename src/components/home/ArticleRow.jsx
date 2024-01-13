import styled from 'styled-components';

import thumbs from '@assets/home/sample_thumbnail.png';

const Container = styled.div`
  width: 100%;
  height: 5.88rem;
  border-top: 0.03125rem solid #a9a9a9;
  padding: 0 1.38rem;

  display: flex;
  align-items: center;
  column-gap: 1rem;
`;

const Thumbnail = styled.div`
  min-width: 4.375rem;
  max-width: 4.375rem;
  height: 4.375rem;
  border-radius: 0.5rem;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Description = styled.p`
  color: #333;

  font-family: sans-serif;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  text-overflow: ellipsis;

  /* Needed to make it work */
  /* overflow: hidden;
  white-space: nowrap; */

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ArticleRow = (props) => {
  return (
    <Container>
      {props.thumbnail && (
        <Thumbnail>
          <img src={thumbs} />
        </Thumbnail>
      )}
      <Description>
        봄은 자연에서 새로운 생명과 활기가 물씬 풍기는 아름다운 계절입니다.
        새로운 잎이 나고 꽃들이 피어나며 새로운 생명이 시작되는 시기이죠. 봄은
        이러한 자연의 신생을 상징하면서 새로운 생명과
      </Description>
    </Container>
  );
};

export default ArticleRow;

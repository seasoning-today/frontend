import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled(Link)`
  width: 100%;
  height: 5.88rem;
  padding: 0.75rem 1.38rem;

  display: flex;
  align-items: flex-start;
  column-gap: 1rem;
`;

const Thumbnail = styled.div`
  min-width: 4.375rem;
  max-width: 4.375rem;
  height: 4.375rem;
  flex-shrink: 0;

  border-radius: 0.5rem;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Description = styled.p`
  /* height: 100%; */
  flex-grow: 1;
  margin-top: 0.5rem;

  color: #333;
  font-family: 'Apple SD Gothic Neo';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  text-overflow: ellipsis;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ArticleRow = (props) => {
  return (
    <Container to={`/article/${props.articleId}`}>
      {props.thumbnail && (
        <Thumbnail>
          <img src={props.thumbnail} />
        </Thumbnail>
      )}
      <Description>{props.text}</Description>
    </Container>
  );
};

export default ArticleRow;

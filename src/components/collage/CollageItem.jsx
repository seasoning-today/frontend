import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = styled(Link)`
  position: relative;
  width: auto;
  height: 6.1875rem;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ccc;

  background-size: cover;
  background-position: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }

  cursor: ${({ to }) => (to ? `pointer` : `default`)};
`;

const CollageItem = ({ thumbnail, articleId }) => {
  return (
    <Card to={articleId ? `/article/${articleId}` : ``}>
      <img src={thumbnail} />
    </Card>
  );
};

export default CollageItem;

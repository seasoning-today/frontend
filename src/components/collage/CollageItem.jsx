import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = styled(Link)`
  position: relative;
  width: auto;
  height: 6.1875rem;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;

  background-size: cover;
  background-position: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    color: var(--white-70, rgba(255, 255, 255, 0.7));
    text-align: center;
    font-family: 'Noto Serif KR';
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 0.8;

    z-index: 1000;
  }

  cursor: ${({ to }) => (to ? `pointer` : `default`)};
`;

const CollageItem = ({ thumbnail, articleId, char, imgStyle, spanStyle }) => {
  return (
    <Card to={articleId ? `/article/${articleId}` : ``}>
      <img src={thumbnail} style={imgStyle} />
      <span style={spanStyle}>{char}</span>
    </Card>
  );
};

export default CollageItem;

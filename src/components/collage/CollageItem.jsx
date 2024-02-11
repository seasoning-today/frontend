import styled from 'styled-components';

const Card = styled.div`
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
`;

const CollageItem = (props) => {
  return (
    <Card>
      <img src={props.thumbnail} />
    </Card>
  );
};

export default CollageItem;

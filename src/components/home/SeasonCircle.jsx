import styled from 'styled-components';

const Container = styled.div`
  width: 6rem;
  height: 6rem;

  border-radius: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 0.375rem;

  color: #fff;
  background-color: ${(props) =>
    props.status === 'activated'
      ? '#333'
      : props.status === 'countdown'
      ? '#888'
      : '#ddd'};

  /* background-image: url(./src/assets/home/sample_circle_image.png);
  background-size: cover; */

  .circle__countdown {
    text-align: center;
    font-family: Noto Serif KR;
    font-size: 1.0625rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .circle__chinese {
    text-align: center;
    font-family: Noto Serif KR;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .circle__korean {
    text-align: center;
    font-family: Noto Serif KR;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const SeasonCircle = (props) => {
  return (
    <Container status={props.status}>
      {props.status === 'countdown' ? (
        <span className="circle__countdown">{props.countDown}</span>
      ) : (
        <span className="circle__chinese">立春</span>
      )}
      <span className="circle__korean">입춘</span>
    </Container>
  );
};

export default SeasonCircle;

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.37rem;
`;

const Square = styled.div`
  width: 4.0625rem;
  height: 4.0625rem;
  border-radius: 1.5625rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #eeeeee;
`;

const SeasonMenu = () => {
  return (
    <Container>
      <Square>
        <div>한자</div>
      </Square>
      <div>입춘</div>
    </Container>
  );
};

export default SeasonMenu;

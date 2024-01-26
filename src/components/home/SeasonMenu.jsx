import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.55rem;

  .season__menu__chinese {
    color: #fff;
    text-align: center;

    font-family: 'Noto Serif KR';
    font-size: 1.1875rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .season__menu__korean {
    color: #8c8c8c;
    text-align: center;

    font-family: 'Noto Serif KR';
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

const Square = styled.div`
  width: 4.0625rem;
  height: 4.0625rem;
  border-radius: 1.5625rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #333;
`;

const SeasonMenu = () => {
  return (
    <Container>
      <Square>
        <span className="season__menu__chinese">立春</span>
      </Square>
      <span className="season__menu__korean">입춘</span>
    </Container>
  );
};

export default SeasonMenu;

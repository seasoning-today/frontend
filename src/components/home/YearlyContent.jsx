import styled from 'styled-components';

import SeasonCircle from '@components/home/SeasonCircle';

import yearly_line from '@assets/home/yearly_line.png';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 1.6rem;
  margin-top: 0.5rem;

  background-image: url(${yearly_line});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const FirstRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.31rem;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.31rem;
`;

const LastRow = styled.div`
  margin-right: 5rem;

  display: flex;
  justify-content: right;
`;

const YearlyContent = ({ now, termData }) => {
  return (
    <>
      <Container>
        <FirstRow>
          <SeasonCircle now={now} term={1} termData={termData} />
          <SeasonCircle now={now} term={2} termData={termData} />
          <SeasonCircle now={now} term={3} termData={termData} />
        </FirstRow>
        <Row>
          <SeasonCircle now={now} term={5} termData={termData} />
          <SeasonCircle now={now} term={4} termData={termData} />
        </Row>
        <Row>
          <SeasonCircle now={now} term={6} termData={termData} />
          <SeasonCircle now={now} term={7} termData={termData} />
          <SeasonCircle now={now} term={8} termData={termData} />
        </Row>
        <Row>
          <SeasonCircle now={now} term={10} termData={termData} />
          <SeasonCircle now={now} term={9} termData={termData} />
        </Row>
        <Row>
          <SeasonCircle now={now} term={11} termData={termData} />
          <SeasonCircle now={now} term={12} termData={termData} />
          <SeasonCircle now={now} term={13} termData={termData} />
        </Row>
        <Row>
          <SeasonCircle now={now} term={15} termData={termData} />
          <SeasonCircle now={now} term={14} termData={termData} />
        </Row>
        <Row>
          <SeasonCircle now={now} term={16} termData={termData} />
          <SeasonCircle now={now} term={17} termData={termData} />
          <SeasonCircle now={now} term={18} termData={termData} />
        </Row>
        <Row>
          <SeasonCircle now={now} term={20} termData={termData} />
          <SeasonCircle now={now} term={19} termData={termData} />
        </Row>
        <Row>
          <SeasonCircle now={now} term={21} termData={termData} />
          <SeasonCircle now={now} term={22} termData={termData} />
          <SeasonCircle now={now} term={23} termData={termData} />
        </Row>
        <LastRow>
          <SeasonCircle now={now} term={24} termData={termData} />
        </LastRow>
      </Container>
    </>
  );
};

export default YearlyContent;

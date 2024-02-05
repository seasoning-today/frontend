import styled from 'styled-components';

import SeasonCircle from '@components/home/SeasonCircle';

import yearly_line from '@assets/home/yearly_line.png';

const Container = styled.section`
  display: flex;
  flex-direction: column;

  background-image: url(${yearly_line});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Row = styled.div`
  margin: 0.8rem 0;

  display: flex;
  justify-content: center;
  gap: 1.31rem;
`;

const LastRow = styled.div`
  margin: 0.8rem 0;
  margin-right: 5rem;

  display: flex;
  justify-content: right;
`;

const YearlyContent = ({ termData }) => {
  return (
    <>
      <Container>
        <Row>
          <SeasonCircle term={1} termData={termData} />
          <SeasonCircle term={2} termData={termData} />
          <SeasonCircle term={3} termData={termData} />
        </Row>
        <Row>
          <SeasonCircle term={5} termData={termData} />
          <SeasonCircle term={4} termData={termData} />
        </Row>
        <Row>
          <SeasonCircle term={6} termData={termData} />
          <SeasonCircle term={7} termData={termData} />
          <SeasonCircle term={8} termData={termData} />
        </Row>
        <Row>
          <SeasonCircle term={10} termData={termData} />
          <SeasonCircle term={9} termData={termData} />
        </Row>
        <Row>
          <SeasonCircle term={11} termData={termData} />
          <SeasonCircle term={12} termData={termData} />
          <SeasonCircle term={13} termData={termData} />
        </Row>
        <Row>
          <SeasonCircle term={15} termData={termData} />
          <SeasonCircle term={14} termData={termData} />
        </Row>
        <Row>
          <SeasonCircle term={16} termData={termData} />
          <SeasonCircle term={17} termData={termData} />
          <SeasonCircle term={18} termData={termData} />
        </Row>
        <Row>
          <SeasonCircle term={20} termData={termData} />
          <SeasonCircle term={19} termData={termData} />
        </Row>
        <Row>
          <SeasonCircle term={21} termData={termData} />
          <SeasonCircle term={22} termData={termData} />
          <SeasonCircle term={23} termData={termData} />
        </Row>
        <LastRow>
          <SeasonCircle term={24} termData={termData} />
        </LastRow>
      </Container>
    </>
  );
};

export default YearlyContent;

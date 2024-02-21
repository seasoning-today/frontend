import styled from 'styled-components';

import SeasonCircle from '@components/home/SeasonCircle';

import yearly_line from '@assets/home/yearly_line.png';

const Layout = styled.section`
  position: relative;

  display: flex;
  flex-direction: column;
  row-gap: 1.6rem;
  margin-top: 0.5rem;
  padding: 1rem 0;
  overflow-y: auto;

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

const YearlyContent = ({ homeData, termData }) => {
  return (
    <Layout>
      <FirstRow>
        <SeasonCircle term={1} homeData={homeData} termData={termData} />
        <SeasonCircle term={2} homeData={homeData} termData={termData} />
        <SeasonCircle term={3} homeData={homeData} termData={termData} />
      </FirstRow>
      <Row>
        <SeasonCircle term={5} homeData={homeData} termData={termData} />
        <SeasonCircle term={4} homeData={homeData} termData={termData} />
      </Row>
      <Row>
        <SeasonCircle term={6} homeData={homeData} termData={termData} />
        <SeasonCircle term={7} homeData={homeData} termData={termData} />
        <SeasonCircle term={8} homeData={homeData} termData={termData} />
      </Row>
      <Row>
        <SeasonCircle term={10} homeData={homeData} termData={termData} />
        <SeasonCircle term={9} homeData={homeData} termData={termData} />
      </Row>
      <Row>
        <SeasonCircle term={11} homeData={homeData} termData={termData} />
        <SeasonCircle term={12} homeData={homeData} termData={termData} />
        <SeasonCircle term={13} homeData={homeData} termData={termData} />
      </Row>
      <Row>
        <SeasonCircle term={15} homeData={homeData} termData={termData} />
        <SeasonCircle term={14} homeData={homeData} termData={termData} />
      </Row>
      <Row>
        <SeasonCircle term={16} homeData={homeData} termData={termData} />
        <SeasonCircle term={17} homeData={homeData} termData={termData} />
        <SeasonCircle term={18} homeData={homeData} termData={termData} />
      </Row>
      <Row>
        <SeasonCircle term={20} homeData={homeData} termData={termData} />
        <SeasonCircle term={19} homeData={homeData} termData={termData} />
      </Row>
      <Row>
        <SeasonCircle term={21} homeData={homeData} termData={termData} />
        <SeasonCircle term={22} homeData={homeData} termData={termData} />
        <SeasonCircle term={23} homeData={homeData} termData={termData} />
      </Row>
      <LastRow>
        <SeasonCircle term={24} homeData={homeData} termData={termData} />
      </LastRow>
    </Layout>
  );
};

export default YearlyContent;

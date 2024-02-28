import styled from 'styled-components';

import SeasonCircle from '@components/home/SeasonCircle';

import yearly_line from '@assets/home/yearly_line.webp';

const Layout = styled.section`
  position: relative;
  width: 100%;
  height: 100%;

  overflow-y: scroll;
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;

  margin-top: 0.5rem;

  display: flex;
  flex-direction: column;
  row-gap: 1.6rem;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.31rem;

  z-index: 11;
`;

const LastRow = styled.div`
  margin-right: 5rem;

  display: flex;
  justify-content: right;

  z-index: 11;
`;

const Background = styled.div`
  position: absolute;
  top: -1rem;
  width: 100%;
  height: 100%;

  background-color: white;

  z-index: 10;

  img {
    /* position: absolute; */
    width: 100%;
    /* margin-top: 1rem; */
    /* padding: 1rem 0; */
    /* object-fit: cover; */
  }
`;

const YearlyContent = ({ homeData, termData }) => {
  return (
    <Layout>
      <ContentWrapper>
        <Row>
          <SeasonCircle term={1} homeData={homeData} termData={termData} />
          <SeasonCircle term={2} homeData={homeData} termData={termData} />
          <SeasonCircle term={3} homeData={homeData} termData={termData} />
        </Row>
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
      </ContentWrapper>

      <Background>
        <img src={yearly_line} />
      </Background>
    </Layout>
  );
};

export default YearlyContent;

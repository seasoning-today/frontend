import styled from 'styled-components';
import { useState, useEffect } from 'react';

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
  const getStatus = (term) => {
    if (homeData.find((item) => item.term === term)) {
      if (termData.recordable && termData.recordTerm.sequence === term) {
        return {
          status: `written-countdown`,
          articleId: homeData.find((item) => item.term === term).id,
          now: now,
          dueDate: termData.recordTerm?.date + 'T23:59:59+09:00',
        };
      } else {
        return {
          status: `written`,
          articleId: homeData.find((item) => item.term === term).id,
        };
      }
    } else if (termData.recordable && termData.recordTerm.sequence === term) {
      return {
        status: `countdown`,
        now: now,
        dueDate: termData.recordTerm?.date + 'T23:59:59+09:00',
      };
    } else if (termData.currentTerm.sequence < term) {
      return { status: `deactivated` };
    } else {
      return { status: `open` };
    }
  };

  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const Timer = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => {
      clearInterval(Timer);
    };
  }, []);

  return (
    <Layout>
      <ContentWrapper>
        <Row>
          <SeasonCircle term={1} statusData={getStatus(1)} />
          <SeasonCircle term={2} statusData={getStatus(2)} />
          <SeasonCircle term={3} statusData={getStatus(3)} />
        </Row>
        <Row>
          <SeasonCircle term={5} statusData={getStatus(5)} />
          <SeasonCircle term={4} statusData={getStatus(4)} />
        </Row>
        <Row>
          <SeasonCircle term={6} statusData={getStatus(6)} />
          <SeasonCircle term={7} statusData={getStatus(7)} />
          <SeasonCircle term={8} statusData={getStatus(8)} />
        </Row>
        <Row>
          <SeasonCircle term={10} statusData={getStatus(10)} />
          <SeasonCircle term={9} statusData={getStatus(9)} />
        </Row>
        <Row>
          <SeasonCircle term={11} statusData={getStatus(11)} />
          <SeasonCircle term={12} statusData={getStatus(12)} />
          <SeasonCircle term={13} statusData={getStatus(13)} />
        </Row>
        <Row>
          <SeasonCircle term={15} statusData={getStatus(15)} />
          <SeasonCircle term={14} statusData={getStatus(14)} />
        </Row>
        <Row>
          <SeasonCircle term={16} statusData={getStatus(16)} />
          <SeasonCircle term={17} statusData={getStatus(17)} />
          <SeasonCircle term={18} statusData={getStatus(18)} />
        </Row>
        <Row>
          <SeasonCircle term={20} statusData={getStatus(20)} />
          <SeasonCircle term={19} statusData={getStatus(19)} />
        </Row>
        <Row>
          <SeasonCircle term={21} statusData={getStatus(21)} />
          <SeasonCircle term={22} statusData={getStatus(22)} />
          <SeasonCircle term={23} statusData={getStatus(23)} />
        </Row>
        <LastRow>
          <SeasonCircle term={24} statusData={getStatus(24)} />
        </LastRow>
      </ContentWrapper>

      <Background>
        <img src={yearly_line} />
      </Background>
    </Layout>
  );
};

export default YearlyContent;

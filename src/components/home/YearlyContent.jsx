import styled from 'styled-components';

import SeasonCircle from '@components/home/SeasonCircle';

import yearly_line from '@assets/home/yearly_line.png';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0.8rem 0;

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

const YearlyContent = () => {
  return (
    <>
      <Container>
        <Row>
          <SeasonCircle status={`activated`} />
          <SeasonCircle status={`activated`} />
          <SeasonCircle status={`activated`} />
        </Row>
        <Row>
          <SeasonCircle status={`countdown`} countDown={`01:16:20`} />
          <SeasonCircle status={`activated`} />
        </Row>
        <Row>
          <SeasonCircle status={`deactivated`} />
          <SeasonCircle status={`deactivated`} />
          <SeasonCircle status={`deactivated`} />
        </Row>
        <Row>
          <SeasonCircle status={`deactivated`} />
          <SeasonCircle status={`deactivated`} />
        </Row>
        <Row>
          <SeasonCircle status={`deactivated`} />
          <SeasonCircle status={`deactivated`} />
          <SeasonCircle status={`deactivated`} />
        </Row>
        <Row>
          <SeasonCircle status={`deactivated`} />
          <SeasonCircle status={`deactivated`} />
        </Row>
        <Row>
          <SeasonCircle status={`deactivated`} />
          <SeasonCircle status={`deactivated`} />
          <SeasonCircle status={`deactivated`} />
        </Row>
        <Row>
          <SeasonCircle status={`deactivated`} />
          <SeasonCircle status={`deactivated`} />
        </Row>
        <Row>
          <SeasonCircle status={`deactivated`} />
          <SeasonCircle status={`deactivated`} />
          <SeasonCircle status={`deactivated`} />
        </Row>
        <LastRow>
          <SeasonCircle status={`deactivated`} />
        </LastRow>
      </Container>
    </>
  );
};

export default YearlyContent;

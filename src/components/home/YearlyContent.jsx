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
          <SeasonCircle season={1} status={`activated`} />
          <SeasonCircle season={2} status={`activated`} />
          <SeasonCircle season={3} status={`activated`} />
        </Row>
        <Row>
          <SeasonCircle
            season={5}
            status={`countdown`}
            countDown={`01:16:20`}
          />
          <SeasonCircle season={4} status={`activated`} />
        </Row>
        <Row>
          <SeasonCircle season={6} status={`deactivated`} />
          <SeasonCircle season={7} status={`deactivated`} />
          <SeasonCircle season={8} status={`deactivated`} />
        </Row>
        <Row>
          <SeasonCircle season={10} status={`deactivated`} />
          <SeasonCircle season={9} status={`deactivated`} />
        </Row>
        <Row>
          <SeasonCircle season={11} status={`deactivated`} />
          <SeasonCircle season={12} status={`deactivated`} />
          <SeasonCircle season={13} status={`deactivated`} />
        </Row>
        <Row>
          <SeasonCircle season={15} status={`deactivated`} />
          <SeasonCircle season={14} status={`deactivated`} />
        </Row>
        <Row>
          <SeasonCircle season={16} status={`deactivated`} />
          <SeasonCircle season={17} status={`deactivated`} />
          <SeasonCircle season={18} status={`deactivated`} />
        </Row>
        <Row>
          <SeasonCircle season={20} status={`deactivated`} />
          <SeasonCircle season={19} status={`deactivated`} />
        </Row>
        <Row>
          <SeasonCircle season={21} status={`deactivated`} />
          <SeasonCircle season={22} status={`deactivated`} />
          <SeasonCircle season={23} status={`deactivated`} />
        </Row>
        <LastRow>
          <SeasonCircle season={24} status={`deactivated`} />
        </LastRow>
      </Container>
    </>
  );
};

export default YearlyContent;

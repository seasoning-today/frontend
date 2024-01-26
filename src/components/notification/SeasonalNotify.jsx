import styled from 'styled-components';

const Layout = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  column-gap: 1rem;

  background-color: white;
`;

const ProfileImage = styled.img`
  width: 2.9375rem;
  height: 2.9375rem;
  border-radius: 50%;

  flex-shrink: 0;

  background-color: green;
`;

const Content = styled.p`
  flex-grow: 1;

  .notification__name {
    margin-right: 0.25rem;

    color: #333;
    font-family: AppleSDGothicNeo;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .notification__content {
    color: #333;
    font-family: AppleSDGothicNeo;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .notification__time {
    color: #bfbfbf;
    font-family: AppleSDGothicNeo;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const SeasonalNotify = ({ seasonName }) => {
  return (
    <Layout>
      <ProfileImage />

      <Content>
        <span className="notification__name">{seasonName}</span>
        <span className="notification__content">노트가 열렸습니다</span>
        <br />
        <span className="notification__time">12시간 전</span>
      </Content>
    </Layout>
  );
};

export default SeasonalNotify;

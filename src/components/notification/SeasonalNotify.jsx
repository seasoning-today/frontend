import styled from 'styled-components';

import logo from '@assets/components/topbar/logo.png';

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
  background-color: #f0f0f0;

  flex-shrink: 0;
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

const SeasonalNotify = ({ seasonName, time }) => {
  return (
    <Layout>
      <ProfileImage src={logo} />

      <Content>
        <span className="notification__name">{seasonName}</span>
        <span className="notification__content">노트가 열렸습니다</span>
        <br />
        <span className="notification__time">{time}</span>
      </Content>
    </Layout>
  );
};

export default SeasonalNotify;

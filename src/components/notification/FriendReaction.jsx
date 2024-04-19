import styled from 'styled-components';
import { Link } from 'react-router-dom';

import useFallBackImage from '@utils/hooks/useFallBackImage';

const Layout = styled(Link)`
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

const Content = styled.div`
  flex-grow: 1;

  .row {
    display: flex;
  }

  .notification__name {
    margin-right: 0.25rem;

    color: #333;
    font-family: 'Apple SD Gothic Neo';
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .notification__content {
    color: #333;
    font-family: 'Apple SD Gothic Neo';
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .notification__time {
    color: #bfbfbf;
    font-family: 'Apple SD Gothic Neo';
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const FriendReaction = ({
  articleId,
  profileName,
  profileImageUrl,
  createdAt,
}) => {
  const { onLoadFallBackImage } = useFallBackImage();

  return (
    <Layout to={`/article/${articleId}`}>
      <ProfileImage src={profileImageUrl} onError={onLoadFallBackImage} />

      <Content>
        <div className=".row">
          <span className="notification__name">{profileName}</span>
          <span className="notification__content">
            님이 이모지를 남기셨습니다
          </span>
        </div>
        <span className="notification__time">{createdAt}</span>
      </Content>
    </Layout>
  );
};

export default FriendReaction;

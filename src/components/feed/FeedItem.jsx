import styled from 'styled-components';
import { Link } from 'react-router-dom';

import UserProfileBox from '@components/common/UserProfileBox';
import { TermsToChinese } from '@utils/seasoning/TermsToChinese';
import { TermsToKorean } from '@utils/seasoning/TermsToKorean';

const ContentLayout = styled(Link)`
  position: relative;
  width: 100%;

  display: flex;
  flex-direction: column;
`;

const ProfileContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;

  .profile__season {
    display: flex;
    align-items: flex-end;
    column-gap: 0.15rem;
  }

  .profile__season__korean {
    padding-bottom: 0.4rem;

    color: #bfbfbf;
    text-align: center;

    font-family: 'Noto Serif KR';
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .profile__season__chinese {
    color: #333;
    text-align: center;

    font-family: 'Noto Serif KR';
    font-size: 1.625rem;
    font-style: normal;
    font-weight: 700;
    line-height: 134%; /* 2.1775rem */
  }
`;

const ThumbnailImage = styled.div`
  position: relative;

  width: 100%;
  height: 16.3125rem;

  margin-top: 0.63rem;

  background: #d9d9d9;

  img {
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Content = styled.div`
  position: relative;

  margin-top: 1rem;

  color: #333;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  font-family: 'Apple SD Gothic Neo';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const FeedItem = (props) => {
  const { profile, article } = props.data;

  return (
    <ContentLayout to={`/article/${article.id}`}>
      <ProfileContainer>
        <UserProfileBox
          profileImage={profile.image}
          nickname={profile.nickname}
          accountId={profile.accountId}
        />
        <section className="profile__season">
          <span className="profile__season__korean">
            {TermsToKorean[article.term]}
          </span>
          <span className="profile__season__chinese">
            {TermsToChinese[article.term]}
          </span>
        </section>
      </ProfileContainer>

      {article.image ? (
        <ThumbnailImage>
          <img src={article.image} />
        </ThumbnailImage>
      ) : undefined}

      <Content>{article.preview}</Content>
    </ContentLayout>
  );
};

export default FeedItem;

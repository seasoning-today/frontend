import styled from 'styled-components';

import UserProfileBox from '@components/common/UserProfileBox';

const ContentLayout = styled.div`
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

    font-family: Noto Serif KR;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .profile__season__chinese {
    color: #333;
    text-align: center;

    font-family: Noto Serif KR;
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

  font-family: AppleSDGothicNeo;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const FeedItem = (props) => {
  const data = props.data;

  return (
    <>
      <ContentLayout>
        <ProfileContainer>
          <UserProfileBox
            profileImage={data.profile.image}
            nickname={data.profile.nickname}
            accountId={data.profile.accountID}
          />
          <section className="profile__season">
            <span className="profile__season__korean">입춘</span>
            <span className="profile__season__chinese">立春</span>
          </section>
        </ProfileContainer>

        <ThumbnailImage>
          <img src={data.article.image} />
        </ThumbnailImage>

        <Content>{data.article.preview}</Content>
      </ContentLayout>
    </>
  );
};

export default FeedItem;

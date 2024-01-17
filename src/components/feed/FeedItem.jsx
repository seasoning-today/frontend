import styled from 'styled-components';

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

  .profile__personal {
    display: flex;
    align-items: center;
    column-gap: 0.62rem;
  }

  .profile__personal img {
    position: relative;

    width: 2.5rem;
    height: 2.5rem;
    background: #d9d9d9;
    border-radius: 50%;
  }

  .profile__personal__data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 0.1rem;
  }

  .profile__personal__data__nickname {
    color: #333;

    font-family: AppleSDGothicNeoM00;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .profile__personal__data__account {
    color: #c3c3c3;

    font-family: AppleSDGothicNeoM00;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

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

  font-family: Arial, Helvetica, sans-serif;
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
          <section className="profile__personal">
            <img />
            <div className="profile__personal__data">
              <span className="profile__personal__data__nickname">
                {data.profile.nickname}
              </span>
              <span className="profile__personal__data__account">
                {data.profile.accountId}
              </span>
            </div>
          </section>

          <section className="profile__season">
            <span className="profile__season__korean">입춘</span>
            <span className="profile__season__chinese">立春</span>
          </section>
        </ProfileContainer>

        <ThumbnailImage />

        <Content>{data.article.preview}</Content>
      </ContentLayout>
    </>
  );
};

export default FeedItem;

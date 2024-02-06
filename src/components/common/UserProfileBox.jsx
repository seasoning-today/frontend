import styled from 'styled-components';

const Layout = styled.div`
  display: flex;

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

    font-family: 'Apple SD Gothic Neo';
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .profile__personal__data__account {
    color: #c3c3c3;

    font-family: 'Apple SD Gothic Neo';
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const UserProfileBox = ({ profileImage, nickname, accountId }) => {
  return (
    <Layout>
      <section className="profile__personal">
        {profileImage !== false ? <img src={profileImage} /> : <img />}
        <div className="profile__personal__data">
          <span className="profile__personal__data__nickname">{nickname}</span>
          <span className="profile__personal__data__account">{`@${accountId}`}</span>
        </div>
      </section>
    </Layout>
  );
};

export default UserProfileBox;

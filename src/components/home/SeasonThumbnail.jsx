import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { TermsToChinese } from '@utils/seasoning/TermsToChinese';
import { TermsToKorean } from '@utils/seasoning/TermsToKorean';

const Layout = styled(Link)`
  position: relative;
  width: 100%;

  display: flex;
  flex-direction: column;
`;

const InfoContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 0 0.37rem;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  .profile-season {
    display: flex;
    align-items: flex-end;
    column-gap: 0.25rem;
  }

  .profile-season-chinese {
    margin-bottom: -0.2rem;

    color: #333;
    text-align: center;

    font-family: 'Noto Serif KR';
    font-size: 1.625rem;
    font-style: normal;
    font-weight: 700;
    line-height: 134%;
  }

  .profile-season-korean {
    color: #bfbfbf;
    font-family: 'Noto Serif KR';
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .profile-year {
    color: #bfbfbf;
    text-align: right;

    font-family: 'Noto Serif KR';
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const ThumbnailImage = styled.div`
  position: relative;
  width: 100%;
  height: 16.3125rem;

  margin-top: 0.5rem;

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
  width: 100%;

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
  line-height: 130%;
`;

const SeasonThumbnail = ({ articleId, term, year, image, preview }) => {
  return (
    <Layout to={`/article/${articleId}`}>
      <InfoContainer>
        <section className="profile-season">
          <span className="profile-season-chinese">{TermsToChinese[term]}</span>
          <span className="profile-season-korean">{TermsToKorean[term]}</span>
        </section>
        <section className="profile-year">{year}년</section>
      </InfoContainer>

      {image ? (
        <ThumbnailImage>
          <img src={image} />
        </ThumbnailImage>
      ) : undefined}

      <Content>{preview}</Content>
    </Layout>
  );
};

export default SeasonThumbnail;

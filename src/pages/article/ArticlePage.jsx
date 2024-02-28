import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useLoaderData, Link, useNavigate } from 'react-router-dom';

import ImageSlider from '@components/write/ImageSlider';
import Question from '@components/write/Question';
import ArticleMenuModal from '@components/article/ArticleMenuModal';
import ArticleDeleteModal from '@components/article/ArticleDeleteModal';
import { TermsToChinese } from '@utils/seasoning/TermsToChinese';
import { TermsToKorean } from '@utils/seasoning/TermsToKorean';

const Layout = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  position: relative;
  width: 100%;
  flex-shrink: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;

  .article__title__chinese {
    color: #000;
    text-align: center;
    font-family: 'Noto Serif KR';
    font-size: 1.875rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .article__title__korean {
    color: #000;
    text-align: center;

    font-family: 'Noto Serif KR';
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .article__menus {
    position: absolute;
    top: 1.69rem;
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.31rem;

    svg {
      cursor: pointer;
    }
  }
`;

const ScrollView = styled.div`
  position: relative;
  width: 100%;
  flex-grow: 1;

  display: flex;
  flex-direction: column;

  overflow-y: auto;
`;

const ContentContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: calc(100% - 3.875rem);

  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 1.5rem;
  padding: 0.5rem 1.31rem 1rem 1.31rem;
`;

const Text = styled.span`
  width: 100%;

  color: #333;
  font-family: 'Apple SD Gothic Neo';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  white-space: pre-wrap;
`;

const Bottom = styled.div`
  position: relative;
  width: 100%;
  height: 3.875rem;
  flex-shrink: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.31rem;

  background-color: #fff;
  box-shadow: 0px -0.5px 1px 0px rgba(0, 0, 0, 0.1);
`;

const EmojiButton = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0.15rem 0.3rem 0.15rem 0.2rem;
  column-gap: 0.32rem;

  cursor: pointer;
  border-radius: 0.3125rem;
  background-color: #f0f0f0;

  span {
    color: #333;
    text-align: center;
    font-family: 'Apple SD Gothic Neo';
    font-size: 0.9rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const ProfileBox = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  column-gap: 1rem;

  .profile__column {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
  }

  .profile__personal__data__nickname {
    color: #000;
    text-align: right;
    font-family: 'Apple SD Gothic Neo';
    font-size: 0.9rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .profile__personal__data__account {
    color: #c3c3c3;
    text-align: right;
    font-family: 'Apple SD Gothic Neo';
    font-size: 0.6875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  img {
    position: relative;

    width: 2.625rem;
    height: 2.625rem;
    background: #d9d9d9;
    border-radius: 50%;
  }
`;

const ArticlePage = () => {
  const { articleId, articleData, userData } = useLoaderData();
  const contents = JSON.parse(articleData.contents);
  const isAuthor = userData.id === articleData.profile.id;

  const [emojiCount, setEmojiCount] = useState(articleData.likesCount);
  const [isClickedEmoji, setIsClickedEmoji] = useState(articleData.userLikes);

  const [showMenuModal, setShowMenuModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const navigate = useNavigate();

  /* 이모지 */
  const handleEmojiClick = async () => {
    const accessToken = localStorage.getItem('accessToken');

    try {
      if (!isClickedEmoji) {
        const likeResponse = await axios.post(
          `/api/article/${articleId}/like`,
          {},
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );
        setEmojiCount(emojiCount + 1);
        setIsClickedEmoji(true);
      } else {
        const unlikeResponse = await axios.delete(
          `/api/article/${articleId}/like`,
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );
        setEmojiCount(emojiCount - 1);
        setIsClickedEmoji(false);
      }
    } catch (error) {
      console.error('Error while handling emoji click:', error);
    }
  };

  const handleMenu = () => {
    setShowMenuModal(true);
  };

  return (
    <Layout>
      {showMenuModal && (
        <ArticleMenuModal
          articleId={articleId}
          onCloseModal={() => {
            setShowMenuModal(false);
          }}
          setShowDeleteModal={setShowDeleteModal}
        />
      )}
      {showDeleteModal && (
        <ArticleDeleteModal
          articleId={articleId}
          onCloseModal={() => {
            setShowMenuModal(false);
            setShowDeleteModal(false);
          }}
        />
      )}

      <Header>
        <span className="article__title__chinese">
          {TermsToChinese[articleData.term]}
        </span>
        <span className="article__title__korean">
          {articleData.year}, {TermsToKorean[articleData.term]}
        </span>
        <div className="article__menus">
          <Link to={`/home`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              onClick={() => {
                navigate(-1);
              }}
            >
              <path
                d="M6.39953 18.6534L5.3457 17.5995L10.9457 11.9995L5.3457 6.39953L6.39953 5.3457L11.9995 10.9457L17.5995 5.3457L18.6534 6.39953L13.0534 11.9995L18.6534 17.5995L17.5995 18.6534L11.9995 13.0534L6.39953 18.6534Z"
                fill="black"
              />
            </svg>
          </Link>
          {isAuthor && (
            <svg
              onClick={handleMenu}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 19.2692C11.5875 19.2692 11.2344 19.1223 10.9406 18.8286C10.6469 18.5348 10.5 18.1817 10.5 17.7692C10.5 17.3567 10.6469 17.0036 10.9406 16.7099C11.2344 16.4161 11.5875 16.2693 12 16.2693C12.4125 16.2693 12.7656 16.4161 13.0593 16.7099C13.3531 17.0036 13.5 17.3567 13.5 17.7692C13.5 18.1817 13.3531 18.5348 13.0593 18.8286C12.7656 19.1223 12.4125 19.2692 12 19.2692ZM12 13.5C11.5875 13.5 11.2344 13.3531 10.9406 13.0594C10.6469 12.7656 10.5 12.4125 10.5 12C10.5 11.5875 10.6469 11.2344 10.9406 10.9407C11.2344 10.6469 11.5875 10.5 12 10.5C12.4125 10.5 12.7656 10.6469 13.0593 10.9407C13.3531 11.2344 13.5 11.5875 13.5 12C13.5 12.4125 13.3531 12.7656 13.0593 13.0594C12.7656 13.3531 12.4125 13.5 12 13.5ZM12 7.73076C11.5875 7.73076 11.2344 7.58389 10.9406 7.29014C10.6469 6.9964 10.5 6.64329 10.5 6.23079C10.5 5.8183 10.6469 5.46519 10.9406 5.17144C11.2344 4.8777 11.5875 4.73083 12 4.73083C12.4125 4.73083 12.7656 4.8777 13.0593 5.17144C13.3531 5.46519 13.5 5.8183 13.5 6.23079C13.5 6.64329 13.3531 6.9964 13.0593 7.29014C12.7656 7.58389 12.4125 7.73076 12 7.73076Z"
                fill="black"
              />
            </svg>
          )}
        </div>
      </Header>

      <ScrollView>
        <ContentContainer>
          <ImageSlider
            images={articleData.images.map((image) => image.url)}
            // setImages={null}
            // imageInputRef={null}
            // setReplacingImageIndex={null}
            // handleImageUpload={null}
          />

          {contents.map((item, idx) => {
            switch (item.type) {
              case 'single':
              case 'answer':
                return <Text key={idx}>{item.text}</Text>;
              case 'question':
                return <Question key={idx} q_value={item.text} />;
              default:
                return undefined;
            }
          })}
        </ContentContainer>

        <Bottom>
          <EmojiButton onClick={handleEmojiClick}>
            {isClickedEmoji ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 20L20.5 11V7L17 5.5L12 7L7 5.5L3.5 7V11L12 20Z"
                  fill="#004A22"
                />
                <path
                  d="M12 8C12 8 12 8 12.7578 7C13.6343 5.84335 14.9398 5 16.5 5C18.9853 5 21 7.01472 21 9.5C21 10.4251 20.7209 11.285 20.2422 12C19.435 13.206 12 21 12 21M12 8C12 8 12 8 11.2422 7C10.3657 5.84335 9.06021 5 7.5 5C5.01472 5 3 7.01472 3 9.5C3 10.4251 3.27914 11.285 3.75777 12C4.56504 13.206 12 21 12 21"
                  stroke="#004A22"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 20.3269L10.8962 19.3346C9.23847 17.8308 7.86763 16.5384 6.78365 15.4577C5.69968 14.3769 4.84072 13.4151 4.20675 12.5721C3.57277 11.7291 3.12982 10.9602 2.8779 10.2654C2.62597 9.57051 2.5 8.86538 2.5 8.15C2.5 6.73078 2.97852 5.54265 3.93558 4.5856C4.89263 3.62855 6.08076 3.15002 7.49998 3.15002C8.37306 3.15002 9.19806 3.3542 9.97498 3.76255C10.7519 4.17088 11.4269 4.75646 12 5.51927C12.5731 4.75646 13.2481 4.17088 14.025 3.76255C14.8019 3.3542 15.6269 3.15002 16.5 3.15002C17.9192 3.15002 19.1073 3.62855 20.0644 4.5856C21.0214 5.54265 21.5 6.73078 21.5 8.15C21.5 8.86538 21.374 9.57051 21.1221 10.2654C20.8701 10.9602 20.4272 11.7291 19.7932 12.5721C19.1592 13.4151 18.3019 14.3769 17.2211 15.4577C16.1403 16.5384 14.7679 17.8308 13.1038 19.3346L12 20.3269ZM12 18.3C13.6 16.8603 14.9166 15.6263 15.95 14.5981C16.9833 13.5699 17.8 12.6766 18.4 11.9183C19 11.1599 19.4166 10.4865 19.65 9.89807C19.8833 9.30961 20 8.72692 20 8.15C20 7.15 19.6666 6.31667 19 5.65C18.3333 4.98333 17.5 4.65 16.5 4.65C15.7102 4.65 14.9804 4.87404 14.3106 5.32213C13.6407 5.77019 13.1102 6.39359 12.7192 7.19233H11.2808C10.8833 6.38719 10.3513 5.76218 9.6846 5.3173C9.01793 4.87243 8.28973 4.65 7.49998 4.65C6.50639 4.65 5.67466 4.98333 5.00478 5.65C4.33491 6.31667 3.99998 7.15 3.99998 8.15C3.99998 8.72692 4.11664 9.30961 4.34998 9.89807C4.58331 10.4865 4.99998 11.1599 5.59998 11.9183C6.19998 12.6766 7.01664 13.5683 8.04998 14.5933C9.08331 15.6183 10.4 16.8539 12 18.3Z"
                  fill="black"
                />
              </svg>
            )}
            <span>{emojiCount}</span>
          </EmojiButton>

          <ProfileBox>
            <div className="profile__column">
              <span className="profile__personal__data__nickname">
                {articleData.profile.nickname}
              </span>
              <span className="profile__personal__data__account">{`@${articleData.profile.accountId}`}</span>
            </div>
            <img src={articleData.profile.image} />
          </ProfileBox>
        </Bottom>
      </ScrollView>
    </Layout>
  );
};

export default ArticlePage;

import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';
import { useLoaderData, Link, useNavigate } from 'react-router-dom';

import UserProfileBox_S from '@components/common/UserProfileBox_S';

import injulgi from '@assets/injulgi.png';

const Layout = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Top = styled.div`
  position: relative;
  width: 100%;
  flex-shrink: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.81rem 1.31rem 0 1.62rem;

  opacity: ${(props) => (props.showPopup ? '0.6' : '1')};

  .write__edit {
    color: #000;
    text-align: right;
    font-family: AppleSDGothicNeo;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    cursor: pointer;
  }

  svg {
    cursor: pointer;
  }
`;

const Title = styled.div`
  position: relative;
  width: 100%;
  flex-shrink: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 0.87rem;

  opacity: ${(props) => (props.showPopup ? '0.6' : '1')};

  .write__title__chinese {
    color: #000;
    text-align: center;
    font-family: Noto Serif KR;
    font-size: 2rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .write__title__korean {
    color: #000;
    text-align: center;

    font-family: Noto Serif KR;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const ContentContainer = styled.div`
  position: relative;
  flex-grow: 1;
  width: 100%;
  overflow-y: auto;

  display: flex;

  flex-direction: column;
  row-gap: 1.5rem;
  padding: 1rem 1.31rem 4.81rem 1.31rem;

  opacity: ${(props) => (props.showPopup ? '0.6' : '1')};

  img {
    width: 100%;
    height: 16.3125rem;
    object-fit: cover;
    border-radius: 0.5rem;
  }

  .dots__container {
    display: flex;
    gap: 0.5rem;
    margin: 0.001rem auto;
  }

  .profile__container {
    display: flex;
    justify-content: flex-end;
  }
`;

const Dots = styled.div`
  display: flex;

  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
  cursor: pointer;

  background-color: ${({ active }) => (active ? '#333' : '#ccc')};
`;

const ImagesContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  gap: 1.5rem;
  align-items: center;
  min-height: 17rem;
  width: 100%;

  padding: 0.3rem;
`;

const Q = styled.div`
  width: 100%;

  display: flex;
  column-gap: 0.88rem;

  color: #8e8c86;
  text-align: justify;

  font-family: AppleSDGothicNeoB00;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  .write__question__aside {
    width: 0.2rem;
    height: 100%;

    background-color: #919191;
  }
`;

const A = styled.div`
  display: flex;
  color: #333;
  text-align: left;
  font-family: AppleSDGothicNeoR00;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  flex-shrink: 0;

  white-space: pre-line;
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 3.25rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 1.5rem;
  padding: 0 1.38rem;

  background-color: #fff;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.2);

  div {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    cursor: pointer;

    width: 3rem;
    height: 1.75rem;

    border-radius: 0.3125rem;
    background: var(--F0, #f0f0f0);

    color: #333;
    text-align: center;
    font-family: AppleSDGothicNeoR00;
    font-size: 0.9rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  span {
    color: #777;
    font-family: AppleSDGothicNeoR00;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

/* 메뉴 팝업창 */
const slideUp = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const ModalOverlay = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 8rem;
  flex-shrink: 0;
  z-index: 2;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 1.0625rem 1.0625rem 0rem 0rem;
  background: #fff;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.25);

  animation: ${slideUp} 0.3s ease-out;
`;

const ModalContent = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.25rem 1rem 1.5rem;

  width: 100%;
  color: #333;
  text-align: center;
  font-family: AppleSDGothicNeoSB00;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  cursor: pointer;
`;

/* 삭제 팝업창 */
const DeleteModalOverlay = styled.div`
  position: absolute;
  top: 15rem;
  width: 17.6875rem;
  height: 12.5rem;
  z-index: 1000;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 1.25rem;
  background: #fff;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.25);
`;

const DeleteModalContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  width: 100%;
  color: #000;
  text-align: center;
  font-family: AppleSDGothicNeoSB00;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  img {
    width: 6rem;
    height: 5rem;
  }
`;

const DeleteButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  span {
    cursor: pointer;
  }
`;

const SavedPage = () => {
  const { response } = useLoaderData();
  const [userData, setUserData] = useState(response.data);

  const storedQuestion = localStorage.getItem('Question');
  const storedImages = localStorage.getItem('selectedImages');
  const storedBaseText = localStorage.getItem('BaseText');
  const storedAnswer = localStorage.getItem('Answer');
  const storedPrivacy = localStorage.getItem('Privacy');

  const [count, setCount] = useState(0);
  const [ClickedEmoji, setClickedEmoji] = useState(false);
  const MAX_COUNT = 999;
  const imagescrollRef = useRef();
  const [activeDotIndex, setActiveDotIndex] = useState(0);
  const [showMenuPopup, setShowMenuPopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const navigate = useNavigate();

  /* 사진 좌우 스크롤과 Dots 색 조정 */
  const handleDotClick = (index) => {
    if (index === 0) {
      imagescrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    } else if (index === 1) {
      const scrollRight =
        imagescrollRef.current.scrollWidth - imagescrollRef.current.clientWidth;
      imagescrollRef.current.scrollTo({
        left: scrollRight,
        behavior: 'smooth',
      });
    }
  };

  const handleImageScroll = () => {
    const activeIndex =
      imagescrollRef.current.scrollLeft === 0
        ? 0
        : imagescrollRef.current.scrollLeft +
            imagescrollRef.current.clientWidth ===
          imagescrollRef.current.scrollWidth
        ? 1
        : -1;

    setActiveDotIndex(activeIndex);
  };

  /* 이모지 */
  const handleEmojiClick = async () => {
    try {
      const articleId = '';

      if (!ClickedEmoji) {
        await axios.post(`/api/article/${articleId}/like`);
        setCount(count + 1);
        setClickedEmoji(true);
      } else {
        await axios.delete(`/api/article/${articleId}/like`);
        setCount(count - 1);
        setClickedEmoji(false);
      }
    } catch (error) {
      console.error('Error while handling emoji click:', error);
    }
  };

  const calculateEmojiWidth = () => {
    const digitCount = count.toString().length;
    return `${3 + digitCount * 0.4}rem`;
  };

  /* 우측 상단에 있는 점 3개 */
  const handleMenu = () => {
    setShowMenuPopup((prevShowMenuPopup) => !prevShowMenuPopup);
  };

  const handleEdit = () => {
    navigate('/write');
  };

  const handleDelete = () => {
    setShowDeletePopup(true);
  };

  /* 삭제 */
  const RealDelete = () => {};

  const CancelDelete = () => {
    setShowDeletePopup(false);
    setShowMenuPopup(false);
  };

  return (
    <Layout>
      <Top showPopup={showMenuPopup}>
        <Link to={`/home`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M9.17308 18.6634L2.5 11.9904L9.17308 5.31732L10.2173 6.36152L5.35377 11.2404H21.5096V12.7404H5.3634L10.2423 17.6192L9.17308 18.6634Z"
              fill="#333333"
            />
          </svg>
        </Link>
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
      </Top>
      <Title showPopup={showMenuPopup}>
        <span className="write__title__chinese">立春</span>
        <span className="write__title__korean">입춘</span>
      </Title>
      <ContentContainer showPopup={showMenuPopup}>
        <div className="dots__container">
          {JSON.parse(storedImages).map((_, index) => (
            <Dots
              key={index}
              onClick={() => handleDotClick(index)}
              active={index === activeDotIndex}
            />
          ))}
        </div>
        <ImagesContainer ref={imagescrollRef} onScroll={handleImageScroll}>
          {JSON.parse(storedImages).map((image, index) => (
            <img key={index} src={image} />
          ))}
        </ImagesContainer>
        <A>{JSON.parse(storedBaseText)}</A>
        {JSON.parse(storedQuestion).map((item, index) => (
          <React.Fragment key={index}>
            <Q>
              <div className="write__question__aside" />
              {item.question}
            </Q>
            <A> {JSON.parse(storedAnswer)[index]}</A>
          </React.Fragment>
        ))}
        <div className="profile__container">
          <UserProfileBox_S
            profileImage={userData.profileImageUrl}
            nickname={userData.nickname}
            accountId={userData.accountId}
          />
        </div>
      </ContentContainer>
      <BottomBar>
        <div
          onClick={handleEmojiClick}
          style={{ width: calculateEmojiWidth() }}
        >
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
          {count > MAX_COUNT ? '999+' : count}
        </div>
        <span>{JSON.parse(storedPrivacy) ? '비공개' : '공개'}</span>
      </BottomBar>
      {showMenuPopup && (
        <ModalOverlay>
          <section>
            <ModalContent onClick={handleEdit}>
              <>수정하기</>
            </ModalContent>
            <ModalContent onClick={handleDelete}>
              <span style={{ color: 'red' }}>삭제하기</span>
            </ModalContent>
          </section>
        </ModalOverlay>
      )}
      {showDeletePopup && (
        <DeleteModalOverlay>
          <DeleteModalContent>
            <img src={injulgi} />
            인절기에게 먹힌 기록장은
            <br />
            복구할 수 없어요
            <DeleteButton>
              <span onClick={RealDelete} style={{ color: 'red' }}>
                삭제
              </span>
              <span onClick={CancelDelete}>취소</span>
            </DeleteButton>
          </DeleteModalContent>
        </DeleteModalOverlay>
      )}
    </Layout>
  );
};

export default SavedPage;

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation, useLoaderData } from 'react-router-dom';
import axios from 'axios';

import TopBar from '@components/common/TopBar';
import FortuneModal from '@components/home/FortuneModal';
import YearlyContent from '@components/home/YearlyContent';
import SeasonalContent from '@components/home/SeasonalContent';
import TabBar from '@components/common/TabBar';

import { TermsToChinese } from '@utils/seasoning/TermsToChinese';
import { TermsToKorean } from '@utils/seasoning/TermsToKorean';

const Layout = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

const Season = styled.div`
  position: relative;
  width: 100%;
  height: 3.5625rem;
  flex-shrink: 0;

  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  padding-left: 1.25rem;

  column-gap: 0.5rem;

  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: #333;

  .season__title {
    font-family: 'Noto Serif KR';
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .season__description {
    margin-bottom: 0.5rem;

    font-family: 'Apple SD Gothic Neo';
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    color: #000;
  }
`;

const FortuneContainer = styled.div`
  width: 100%;
  height: 2.75rem;
  flex-shrink: 0;

  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-top: 0.2rem;
`;

const Fortune = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 21.875rem;
  height: 2rem;
  padding: 0 1rem;
  margin-bottom: 0.2rem;

  cursor: pointer;
  border-radius: 1.125rem 1rem 1rem 1.125rem;
  background-color: #fff;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.2);

  .fortune__title-container {
    height: 100%;

    display: flex;
    align-items: center;
    column-gap: 0.32rem;
  }

  .fortune__title {
    color: #333;
    font-family: 'Apple SD Gothic Neo';
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    padding-bottom: 0.025rem;
  }

  .fortune__date {
    color: #bfbfbf;
    text-align: right;
    font-family: 'Apple SD Gothic Neo';
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const Category = styled.div`
  position: relative;
  width: 100%;
  height: 4.4375rem;
  flex-shrink: 0;

  display: flex;
  justify-content: space-between;
  align-content: flex-end;
  padding: 1.87rem 1.25rem 0.38rem;

  background-color: #fff;
`;

const Year = styled.h1`
  position: relative;
  display: flex;

  color: #333;
  font-family: 'Noto Serif KR';
  font-size: 1.625rem;
  font-style: normal;
  font-weight: 700;
  line-height: 134%;
`;

const Select = styled.div`
  position: relative;

  display: flex;
  align-items: center;

  select {
    height: 1.5rem;

    padding: 0 0.38rem;

    border: none;
    outline: none;

    text-align: center;
    color: #333;
    font-family: 'Apple SD Gothic Neo';
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  /* IE */
  select::-ms-expand {
    display: none;
  }
`;

const ContentArea = styled.div`
  position: relative;
  overflow-y: auto;

  width: 100%;
  flex-grow: 1;
  padding-bottom: 3.8125rem;
`;

const HomePage = () => {
  const { homeData, termData, newNotificationData } = useLoaderData();
  // console.log(JSON.stringify(homeData, null, '\t'));
  const location = useLocation();
  const navigate = useNavigate();

  /* 공통 */
  const [now, setNow] = useState(new Date());

  /* 홈 */
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get('category');

  const handleCategoryChange = (event) => {
    const changedCategory = event.target.value;
    navigate(`/home?category=${changedCategory}`);
  };

  /* 운세 모달 */
  const [fortuneText, setFortuneText] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchTodayFortune = async () => {
      const accessToken = localStorage.getItem('accessToken');

      await axios({
        method: 'GET',
        url: `/api/today-fortune`,
        headers: { Authorization: `Bearer ${accessToken}` },
      }).then((res) => {
        setFortuneText(res.data);
      });
    };
    fetchTodayFortune();
  }, []);

  return (
    <Layout>
      {showModal && (
        <FortuneModal
          now={now}
          fortuneText={fortuneText}
          onCloseModal={() => {
            setShowModal(false);
          }}
        />
      )}

      <TopBar isNewNotification={newNotificationData} />

      <Season>
        <div className="season__title">
          {TermsToChinese[termData.currentTerm.sequence]}
        </div>
        <div className="season__description">
          {`${TermsToKorean[termData.currentTerm.sequence]}, ${
            termData.currentTerm.sequence
          }번째 절기`}
        </div>
      </Season>

      <FortuneContainer>
        <Fortune
          onClick={() => {
            setShowModal(true);
          }}
        >
          <div className="fortune__title-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M10.4286 7.57067L10.4286 0.935057L3.79297 0.935059L3.79297 7.57067"
                stroke="black"
                strokeWidth="0.8"
                strokeLinejoin="round"
              />
              <path
                d="M10.2949 0.935059L1.61492 9.61506L4.99966 12.9998L9.33966 8.6598L10.4247 7.5748"
                stroke="black"
                strokeWidth="0.8"
                strokeLinejoin="round"
              />
              <path
                d="M4.16208 0.935083L12.8421 9.61508L9.45735 12.9998L7.28735 10.8298"
                stroke="black"
                strokeWidth="0.8"
                strokeLinejoin="round"
              />
            </svg>
            <div className="fortune__title">오늘의 운세</div>
          </div>
          <div className="fortune__date">{`${
            now.getMonth() + 1
          }월 ${now.getDate()}일`}</div>
        </Fortune>
      </FortuneContainer>

      <Category>
        <Year>
          {category === 'term' ? undefined : now.getFullYear().toString()}
        </Year>
        <Select>
          <select value={category} onChange={handleCategoryChange}>
            <option value="year">연도별 보기</option>
            <option value="term">절기별 보기</option>
          </select>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9"
            height="5"
            viewBox="0 0 9 5"
            fill="none"
          >
            <mask
              id="mask0_2024_1182"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="9"
              height="5"
            >
              <mask id="path-1-inside-1_2024_1182" fill="white">
                <path d="M8.3871 0L4.19355 5L0 0H8.3871Z" />
              </mask>
              <path d="M8.3871 0L4.19355 5L0 0H8.3871Z" fill="#02211D" />
              <path
                d="M8.3871 0L11.4519 2.57045C12.4507 1.37951 12.6692 -0.282235 12.0121 -1.69089C11.3551 -3.09954 9.94146 -4 8.3871 -4V0ZM4.19355 5L1.12878 7.57045C1.88879 8.47662 3.01086 9 4.19355 9C5.37624 9 6.4983 8.47662 7.25831 7.57045L4.19355 5ZM0 0V-4C-1.55436 -4 -2.96798 -3.09954 -3.62504 -1.69089C-4.2821 -0.282235 -4.06362 1.37951 -3.06477 2.57045L0 0ZM5.32233 -2.57045L1.12878 2.42955L7.25831 7.57045L11.4519 2.57045L5.32233 -2.57045ZM7.25831 2.42955L3.06477 -2.57045L-3.06477 2.57045L1.12878 7.57045L7.25831 2.42955ZM0 4H8.3871V-4H0V4Z"
                fill="white"
                mask="url(#path-1-inside-1_2024_1182)"
              />
            </mask>
            <g mask="url(#mask0_2024_1182)">
              <path
                d="M-4.19336 -7.91602H12.5808V12.084H-4.19336V-7.91602Z"
                fill="#02211D"
              />
            </g>
          </svg>
        </Select>
      </Category>

      <ContentArea>
        {category === 'term' ? (
          <SeasonalContent homeData={homeData} />
        ) : (
          <YearlyContent homeData={homeData} termData={termData} />
        )}
      </ContentArea>

      <TabBar />
    </Layout>
  );
};

export default HomePage;

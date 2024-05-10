import * as S from './style';
import axios from 'axios';

import Icon from '@components/atoms/Icon';
import Text from '@components/atoms/Text';
import NotificationHeader from '@components/molecules/NotificationHeader';
import SeasonMenuItem from '@components/molecules/SeasonMenuItem';
import TabBar from '@components/molecules/TabBar';
import SeasonTemplate from '@components/templates/HomeTemplate/Season';
import YearTemplate from '@components/templates/HomeTemplate/Year';

import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import FortuneModal from '@components/home/FortuneModal';
import { TermsToChinese } from '@utils/seasoning/TermsToChinese';
import { TermsToKorean } from '@utils/seasoning/TermsToKorean';

export default function HomeTemplate({
  homeData,
  termData,
  isNewNotification,
}) {
  const displayTerm =
    termData.recordable === true
      ? termData.recordTerm.sequence
      : termData.currentTerm.sequence;
  const terms = Array.from({ length: 24 }, (_, i) => i + 1);

  /* 공통 */
  const [now, setNow] = useState(new Date());
  const location = useLocation();
  const navigate = useNavigate();
  /* 운세 모달 */
  const [fortuneText, setFortuneText] = useState('');
  const [showModal, setShowModal] = useState(false);
  /* 홈 */
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get('category')
    ? searchParams.get('category')
    : 'year'; // 'year' | 'term'
  /* 절기별 보기 */
  const selectedTerm =
    searchParams.get('term') === null ? 0 : searchParams.get('term');

  const handleCategoryChange = (event) => {
    const changedCategory = event.target.value;
    navigate(`/home?category=${changedCategory}`);
  };

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
    <S.Layout category={category}>
      {showModal && (
        <FortuneModal
          now={now}
          fortuneText={fortuneText}
          onCloseModal={() => {
            setShowModal(false);
          }}
        />
      )}

      <NotificationHeader isNewNotification={isNewNotification} />

      <S.MenuContainer category={category}>
        <S.TitleContainer>
          <Text notoserif size="2" weight="700">
            {TermsToChinese[displayTerm]}
          </Text>
          <Text size="0.875" color="#000" style={{ marginBottom: '0.35rem' }}>
            {`${TermsToKorean[displayTerm]}, ${displayTerm}번째 절기`}
          </Text>
        </S.TitleContainer>

        <S.FortuneContainer>
          <S.FortuneButton
            onClick={() => {
              setShowModal(true);
            }}
          >
            <div className="fortune-title">
              <Icon width="0.8" height="0.75" type="fortune" />
              <Text size="0.875">오늘의 운세</Text>
            </div>
            <Text size="0.75" color="#bfbfbf">
              {`${now.getMonth() + 1}월 ${now.getDate()}일`}
            </Text>
          </S.FortuneButton>
        </S.FortuneContainer>

        <S.OptionContainer>
          <Text notoserif size="1.625" weight="700">
            {category === 'term' ? undefined : now.getFullYear().toString()}
          </Text>

          <S.Select>
            <select value={category} onChange={handleCategoryChange}>
              <option value="year">연도별 보기</option>
              <option value="term">절기별 보기</option>
            </select>
            <Icon width="1.5" height="1.5" type="drop-down" />
          </S.Select>
        </S.OptionContainer>

        {category === 'term' && (
          <S.SeasonMenuContainer>
            {terms.map((term) => (
              <SeasonMenuItem
                key={term}
                term={term}
                selected={term === parseInt(selectedTerm) ? true : false}
              />
            ))}
          </S.SeasonMenuContainer>
        )}
      </S.MenuContainer>

      <S.ContentContainer>
        {category === 'year' && (
          <YearTemplate homeData={homeData} termData={termData} />
        )}
        {category === 'term' && <SeasonTemplate homeData={homeData} />}
      </S.ContentContainer>

      <TabBar />
    </S.Layout>
  );
}

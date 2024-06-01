import * as S from './style';

import Icon from '@components/atoms/Icon';
import Image from '@components/atoms/Image';
import Text from '@components/atoms/Text';
import NotificationHeader from '@components/molecules/NotificationHeader';
import SeasonMenuItem from '@components/molecules/SeasonMenuItem';
import TabBar from '@components/molecules/TabBar';
import FortuneModal from '@components/molecules/FortuneModal';
import SeasonTemplate from '@components/templates/HomeTemplate/Season';
import YearTemplate from '@components/templates/HomeTemplate/Year';

import ghost_popup from '@assets/home/ghost-popup.webp';
import { TermsToChinese } from '@utils/seasoning/TermsToChinese';
import { TermsToKorean } from '@utils/seasoning/TermsToKorean';

import { useContext } from 'react';
import { HomeContext } from '@contexts/HomeContext';

export default function HomeTemplate() {
  const {
    isNewNotification,
    currentDate,
    displayTerm,
    selectedTerm,
    category,
    fortuneText,
    showModal,
    isShownKakaoFriendsPopup,
    setShowModal,
    handleClickPopup,
    handleClosePopup,
    handleCategoryChange,
  } = useContext(HomeContext);

  return (
    <S.Layout category={category}>
      {showModal && (
        <FortuneModal
          now={currentDate}
          fortuneText={fortuneText}
          onCloseModal={() => setShowModal(false)}
        />
      )}

      {!isShownKakaoFriendsPopup && (
        <S.Popup>
          <section onClick={handleClosePopup}>
            <Icon width="1.5" height="1.5" type="quit" />
          </section>
          <Image
            src={ghost_popup}
            onClick={handleClickPopup}
            style={{ width: '100%', maxWidth: '16.625rem', height: 'auto' }}
          />
        </S.Popup>
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
          <S.FortuneButton onClick={() => setShowModal(true)}>
            <div className="fortune-title">
              <Icon width="0.8" height="0.75" type="fortune" />
              <Text size="0.875">오늘의 운세</Text>
            </div>
            <Text size="0.75" color="#bfbfbf">
              {`${currentDate.getMonth() + 1}월 ${currentDate.getDate()}일`}
            </Text>
          </S.FortuneButton>
        </S.FortuneContainer>

        <S.OptionContainer>
          <Text notoserif size="1.625" weight="700">
            {category === 'term'
              ? undefined
              : currentDate.getFullYear().toString()}
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
            {Array.from({ length: 24 }, (_, i) => i + 1).map((term) => (
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
        {category === 'year' && <YearTemplate />}
        {category === 'term' && <SeasonTemplate />}
      </S.ContentContainer>

      <TabBar />
    </S.Layout>
  );
}

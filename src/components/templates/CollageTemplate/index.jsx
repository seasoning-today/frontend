import * as S from './style';

import Icon from '@components/atoms/Icon';
import Text from '@components/atoms/Text';
import NotificationHeader from '@components/molecules/NotificationHeader';
import TabBar from '@components/molecules/TabBar';
import CollageGrid from '@components/organisms/CollageGrid';

export default function CollageTemplate({
  isNewNotification,
  collageData,
  selectedCategory,
  handleCategoryChange,
  imageEnabled,
  labelEnabled,
  toggleImageEnabled,
  toggleLabelEnabled,
}) {
  return (
    <S.Layout>
      <NotificationHeader isNewNotification={isNewNotification} />

      <S.MenuContainer>
        <S.TitleWrapper>
          <Text size="1.5" weight="600">
            나의 24절기
          </Text>
        </S.TitleWrapper>

        <S.OptionContainer>
          <S.SelectContainer>
            <select value={selectedCategory} onChange={handleCategoryChange}>
              <option value="year">2024</option>
            </select>
            <Icon
              width="1.5"
              height="1.5"
              type="drop-down"
              style={{ position: 'absolute', right: '0' }}
            />
          </S.SelectContainer>

          <S.ToggleContainer>
            <div className="toggle-item">
              <Text size="0.875">기본 이미지</Text>
              <div onClick={toggleImageEnabled}>
                {imageEnabled ? (
                  <Icon width="1.5" height="0.75" type="toggle-on" />
                ) : (
                  <Icon width="1.5" height="0.75" type="toggle-off" />
                )}
              </div>
            </div>

            <div className="toggle-item">
              <Text size="0.875">24절기 글자</Text>
              <div onClick={toggleLabelEnabled}>
                {labelEnabled ? (
                  <Icon width="1.5" height="0.75" type="toggle-on" />
                ) : (
                  <Icon width="1.5" height="0.75" type="toggle-off" />
                )}
              </div>
            </div>
          </S.ToggleContainer>
        </S.OptionContainer>
      </S.MenuContainer>

      <S.CollageGridContainer>
        <CollageGrid
          collageData={collageData}
          imageEnabled={imageEnabled}
          labelEnabled={labelEnabled}
        />
      </S.CollageGridContainer>

      <TabBar />
    </S.Layout>
  );
}

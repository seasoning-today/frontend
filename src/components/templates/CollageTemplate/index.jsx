import * as S from './style';

import Icon from '@components/atoms/Icon';
import Text from '@components/atoms/Text';
import CollageCard from '@components/molecules/CollageCard';
import NotificationHeader from '@components/molecules/NotificationHeader';
import TabBar from '@components/molecules/TabBar';

import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function CollageTemplate({ collageData, isNewNotification }) {
  const [selectedCategory, setSelectedCategory] = useState(2024);
  const [imageEnabled, setImageEnabled] = useState(true);
  const [labelEnabled, setLabelEnabled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const terms = Array.from({ length: 24 }, (_, i) => i + 1);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [location.search]);

  const handleCategoryChange = (event) => {
    const newCategory = event.target.value;
    setSelectedCategory(newCategory);
    navigate(`/collage?category=${newCategory}`);
  };

  const toggleImgEnabled = () => {
    setImageEnabled((imageEnabled) => !imageEnabled);
  };

  const toggleCharEnabled = () => {
    setLabelEnabled((labelEnabled) => !labelEnabled);
  };

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
              <div onClick={toggleImgEnabled}>
                {imageEnabled ? (
                  <Icon width="1.5" height="0.75" type="toggle-on" />
                ) : (
                  <Icon width="1.5" height="0.75" type="toggle-off" />
                )}
              </div>
            </div>

            <div className="toggle-item">
              <Text size="0.875">24절기 글자</Text>
              <div onClick={toggleCharEnabled}>
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

      <S.CollageContainer>
        {terms.map((term) => {
          const collageItemData = collageData.find(
            (item) => item.term === term
          );

          return (
            <CollageCard
              key={term}
              term={term}
              image={
                collageItemData !== undefined && collageItemData.image !== null
                  ? collageItemData.image
                  : null
              }
              articleId={
                collageItemData !== undefined ? collageItemData.articleId : null
              }
              imageEnabled={imageEnabled}
              labelEnabled={labelEnabled}
            />
          );
        })}
      </S.CollageContainer>

      <TabBar />
    </S.Layout>
  );
}

import * as S from './style';

import Text from '@components/atoms/Text';
import MyFeedItem from '@components/molecules/MyFeedItem';

import { useHomeContext } from '@contexts/HomeContext';

export default function SeasonTemplate() {
  const { homeData } = useHomeContext();

  return (
    <S.Layout>
      {homeData.length > 0 ? (
        <S.MyFeedList>
          {homeData.map(({ id, term, year, image, preview }) => (
            <MyFeedItem
              key={id}
              articleId={id}
              term={term}
              year={year}
              image={image}
              preview={preview}
            />
          ))}
        </S.MyFeedList>
      ) : (
        <S.EmptyContent>
          <Text size="1" color="#8c8c8c">
            해당 절기에 대한 기록이 없습니다.
          </Text>
        </S.EmptyContent>
      )}
    </S.Layout>
  );
}

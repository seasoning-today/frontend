import * as S from './style';

import Text from '@components/atoms/Text';
import SeasonFeedItem from '@components/organisms/SeasonFeedItem';

export default function SeasonTemplate({ homeData }) {
  return (
    <S.Layout>
      {homeData.length > 0 ? (
        homeData.map(({ id, term, year, image, preview }) => (
          <SeasonFeedItem
            key={id}
            articleId={id}
            term={term}
            year={year}
            image={image}
            preview={preview}
          />
        ))
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

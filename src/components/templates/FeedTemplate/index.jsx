import * as S from './style';
import { Link } from 'react-router-dom';

import Icon from '@components/atoms/Icon';
import Text from '@components/atoms/Text';
import TabBar from '@components/molecules/TabBar';
import FriendsFeedListItem from '@components/organisms/FriendsFeedListItem';

export default function FeedTemplate({ feedData, focusElementRef }) {
  return (
    <S.Layout>
      <S.MenuContainer>
        <Text size="1.25" weight="600">
          친구들의 24절기
        </Text>
        <S.MenuBox>
          <Link to={`/feed/friends-search`}>
            <Icon width="1.5" height="1.5" type="search-menu" />
          </Link>
          <Link to={`/feed/friends-list`}>
            <Icon width="1.5" height="1.5" type="friends-list" />
          </Link>
        </S.MenuBox>
      </S.MenuContainer>

      <S.FeedList>
        {feedData.map(({ profile, article }) => (
          <FriendsFeedListItem
            key={article.id}
            profile={profile}
            article={article}
          />
        ))}

        <div ref={focusElementRef} />
      </S.FeedList>

      <TabBar />
    </S.Layout>
  );
}

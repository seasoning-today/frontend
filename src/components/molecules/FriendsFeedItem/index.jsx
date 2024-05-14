import * as S from './style';

import Text from '@components/atoms/Text';
import FeedItem from '@components/molecules/FeedItem';
import UserProfile from '@components/molecules/UserProfile';

import { TermsToChinese } from '@utils/seasoning/TermsToChinese';
import { TermsToKorean } from '@utils/seasoning/TermsToKorean';

export default function FriendsFeedItem({ profile, article }) {
  return (
    <S.Layout to={`/article/${article.id}`}>
      <S.ProfileContainer>
        <UserProfile
          imageUrl={profile.image}
          nickname={profile.nickname}
          accountId={profile.accountId}
        />
        <section>
          <Text
            notoserif
            size="0.75"
            color="#bfbfbf"
            style={{ paddingBottom: '0.25rem' }}
          >
            {TermsToKorean[article.term]}
          </Text>
          <Text notoserif size="1.625" weight="700">
            {TermsToChinese[article.term]}
          </Text>
        </section>
      </S.ProfileContainer>

      <FeedItem image={article.image} preview={article.preview} />
    </S.Layout>
  );
}

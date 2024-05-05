import * as S from './style';

import Image from '@components/atoms/Image';
import Text from '@components/atoms/Text';
import UserProfile from '@components/molecules/UserProfile';

import { TermsToChinese } from '@utils/seasoning/TermsToChinese';
import { TermsToKorean } from '@utils/seasoning/TermsToKorean';

export default function FeedListItem({ profile, article }) {
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

      {article.image && (
        <Image
          src={article.image}
          height="16.3125"
          style={{
            width: '100%',
            marginTop: '0.63rem',
            backgroundColor: '#d9d9d9',
          }}
        />
      )}

      <S.ContentContainer>
        <Text size="0.875">{article.preview}</Text>
      </S.ContentContainer>
    </S.Layout>
  );
}

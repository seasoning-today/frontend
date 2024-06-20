import * as S from './style';
import { Link } from 'react-router-dom';

import Button from '@components/atoms/Button';
import Divider from '@components/atoms/Divider';
import Icon from '@components/atoms/Icon';
import UserProfile from '@components/molecules/UserProfile';

import { useSearchContext } from '@contexts/SearchContext';

export default function SearchTemplate() {
  const {
    keyword,
    searchResult,
    handleChangeKeyword,
    sendFriendRequest,
    cancelFriendRequest,
  } = useSearchContext();

  return (
    <S.Layout>
      <S.SearchContainer>
        <S.SearchWrapper>
          <Link to={`/feed`}>
            <Icon type="back" width="1.5" height="1.5" />
          </Link>
          <S.SearchField
            placeholder={'아이디로 친구를 검색하세요.'}
            value={keyword}
            onChange={handleChangeKeyword}
          />
        </S.SearchWrapper>
        <Divider borderWidth="0.03125" margin="0.62" color="#d7d7d7" />
      </S.SearchContainer>

      <S.SearchResultContainer>
        {searchResult.map(
          ({ friendshipStatus, image, nickname, id, accountId }, idx) => (
            <S.SearchResult key={idx}>
              <UserProfile
                imageUrl={image}
                nickname={nickname}
                accountId={accountId}
              />

              {friendshipStatus === `UNFRIEND` && (
                <Button
                  text="친구 신청"
                  size="0.78"
                  color="#f0f0f0"
                  backgroundColor="#0d6b38"
                  onClick={() => sendFriendRequest(id)}
                  style={{
                    padding: '0.4rem 0.8rem',
                  }}
                />
              )}
              {friendshipStatus === `SENT` && (
                <Button
                  text="대기 중..."
                  size="0.78"
                  color="#f0f0f0"
                  backgroundColor="#0d6b38"
                  onClick={() => cancelFriendRequest(id)}
                  style={{
                    padding: '0.4rem 0.8rem',
                    opacity: '0.7',
                  }}
                />
              )}
              {friendshipStatus === `FRIEND` && (
                <Button
                  text="친구"
                  size="0.78"
                  color="#f0f0f0"
                  backgroundColor="#0d6b38"
                  style={{
                    padding: '0.4rem 0.8rem',
                  }}
                />
              )}
            </S.SearchResult>
          )
        )}
      </S.SearchResultContainer>
    </S.Layout>
  );
}

import * as S from './style';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import debounce from 'lodash.debounce';

import Button from '@components/atoms/Button';
import Divider from '@components/atoms/Divider';
import Icon from '@components/atoms/Icon';
import UserProfile from '@components/molecules/UserProfile';

export default function SearchTemplate() {
  const [searchResult, setSearchResult] = useState([]);
  const [keyword, setKeyword] = useState('');

  const handleSearch = async () => {
    const accessToken = localStorage.getItem('accessToken');

    try {
      const response = await axios.get(
        `/api/friend/search?keyword=${keyword}`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      if (response.status === 200) {
        setSearchResult([response.data]);
      } else {
        setSearchResult([]);
        console.error('Unexpected response:', response);
      }
    } catch (error) {
      setSearchResult([]);
      console.error('Error fetching search results:', error);
    }
  };

  useEffect(() => {
    if (keyword.trim() !== '') {
      const debouncedSearch = debounce(handleSearch, 500);
      debouncedSearch();

      return () => {
        debouncedSearch.cancel();
      };
    }
  }, [keyword]);

  const handleChangeKeyword = (event) => {
    setKeyword(event.target.value);
  };

  const sendFriendRequest = async (friendId) => {
    const accessToken = localStorage.getItem('accessToken');

    try {
      const response = await axios.post(
        `/api/friend/add`,
        {
          id: friendId,
        },
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );

      if (response.status === 200) {
        handleSearch();
      } else {
        console.error('Unexpected response:', response);
      }
    } catch (error) {
      console.error('Error sending friend request:', error);
    }
  };

  const cancelFriendRequest = async (friendId) => {
    const accessToken = localStorage.getItem('accessToken');

    try {
      const response = await axios.delete(`/api/friend/add/cancel`, {
        data: {
          id: friendId,
        },
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      if (response.status === 200) {
        handleSearch();
      } else {
        console.error('Unexpected response:', response);
      }
    } catch (error) {
      console.error('Error sending friend request:', error);
    }
  };

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

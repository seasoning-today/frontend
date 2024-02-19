import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';

import UserProfileBox from '@components/common/UserProfileBox';

const Layout = styled.div`
  width: 100%;
  height: 100%;
`;

const Top = styled.div`
  position: relative;

  width: 100%;
  height: 3.62rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.37rem 0 1.13rem;
  column-gap: 1rem;

  border-bottom: 0.03125rem solid #d7d7d7;

  background-color: #fff;
`;

const Back = styled.div`
  position: relative;

  :hover {
    cursor: pointer;
  }
`;

const SearchField = styled.input`
  position: relative;

  width: 100%;
  height: 2.375rem;
  border-radius: 0.625rem;
  padding: 0.5rem 1.13rem 0.5rem;

  border: none;
  outline: none;
  background-color: #f7f7f7;

  font-family: 'Apple SD Gothic Neo';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;

  &::placeholder {
    color: #8e8c86;
  }
`;

const SearchResultArea = styled.div`
  width: 100%;
  height: calc(100% - 3.62rem);

  display: flex;
  flex-direction: column;

  padding: 1.5rem 1.31rem;
  row-gap: 1rem;

  overflow-y: scroll;
`;

const SearchResult = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  padding: 0.4rem 0.8rem;

  cursor: pointer;
  background-color: #0d6b38;
  flex-shrink: 0;
  opacity: ${(props) => (props.active ? `1` : `0.7`)};

  span {
    color: #f0f0f0;
    text-align: center;
    font-family: 'Apple SD Gothic Neo';
    font-size: 0.78rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const FriendshipStatusBox = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  padding: 0.4rem 0.8rem;

  background-color: #0d6b38;
  flex-shrink: 0;
  opacity: ${(props) => (props.friendshipStatus === `FRIEND` ? `1` : `0.7`)};

  span {
    color: #f0f0f0;
    text-align: center;
    font-family: 'Apple SD Gothic Neo';
    font-size: 0.78rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const SearchPage = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [keyword, setKeyword] = useState('');

  const handleChangeKeyword = (event) => {
    setKeyword(event.target.value);
  };

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
        // console.error('Unexpected response:', response);
      }
    } catch (error) {
      setSearchResult([]);
      // console.error('Error fetching search results:', error);
    }
  };

  useEffect(() => {
    handleSearch();
  }, [keyword]);

  const renderFriendshipStatus = (status) => {
    switch (status) {
      case 'FRIEND':
        return '친구';
      default:
        return '대기 중...';
    }
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
        // console.error('Unexpected response:', response);
      }
    } catch (error) {
      // console.error('Error sending friend request:', error);
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
        // console.error('Unexpected response:', response);
      }
    } catch (error) {
      // console.error('Error sending friend request:', error);
    }
  };

  return (
    <Layout>
      <Top>
        <Back>
          <Link to={`/feed`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9.17308 18.6635L2.5 11.9904L9.17308 5.31738L10.2173 6.36158L5.35377 11.2405H21.5096V12.7404H5.3634L10.2423 17.6193L9.17308 18.6635Z"
                fill="#333333"
              />
            </svg>
          </Link>
        </Back>
        <SearchField
          placeholder={'아이디로 친구를 검색하세요.'}
          value={keyword}
          onChange={handleChangeKeyword}
        />
      </Top>

      <SearchResultArea>
        {searchResult.map((result, idx) => (
          <SearchResult key={idx}>
            <UserProfileBox
              nickname={result.nickname}
              profileImage={result.image}
              accountId={result.accountId}
            />
            {result.friendshipStatus === `UNFRIEND` ? (
              <Button active onClick={() => sendFriendRequest(result.id)}>
                <span>친구 신청</span>
              </Button>
            ) : result.friendshipStatus === `SENT` ? (
              <Button onClick={() => cancelFriendRequest(result.id)}>
                <span>대기 중...</span>
              </Button>
            ) : result.friendshipStatus !== `SELF` ? (
              <FriendshipStatusBox friendshipStatus={result.friendshipStatus}>
                <span>{renderFriendshipStatus(result.friendshipStatus)}</span>
              </FriendshipStatusBox>
            ) : undefined}
          </SearchResult>
        ))}
      </SearchResultArea>
    </Layout>
  );
};

export default SearchPage;

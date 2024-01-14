import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Top = styled.div`
  position: relative;
  display: flex;
  margin-top: 2rem;
`;

const Back = styled.div`
  position: relative;
  margin-top: 0.5rem;
  margin-left: 1.5rem;

  :hover {
    cursor: pointer;
  }
`;

const SearchField = styled.input`
  position: relative;
  margin-left: 0.7rem;

  width: 19.375rem;
  height: 2.375rem;
  border-radius: 0.625rem;
  background: #f7f7f7;
  border: none;
  padding: 0.5rem;
  box-sizing: border-box;

  font-family: AppleSDGothicNeoR00;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;

  &::placeholder {
    color: #8e8c86;
  }
  &:focus {
    outline: none;
  }
`;

const Hr = styled.div`
  position: relative;
  margin: 1rem auto;

  width: 23.125rem;
  height: 0.03125rem;
  background: #d7d7d7;
`;

const Border = styled.div`
  position: relative;
  margin: 1rem auto;
  overflow-y: auto;

  width: 22.625rem;
  height: 38rem;
  //border: 1px solid #000;
`;

const ProfileBorder = styled.div`
  position: relative;
  display: flex;
  margin: 1rem auto;
  flex-direction: row;
  align-items: center;

  width: 21.75rem;
  height: 3.75rem;
  // border: 1px solid #000;
`;

const Pic = styled.div`
  position: relative;
  margin-left: 0.5rem;

  width: 3rem;
  height: 3rem;
  background: #d9d9d9;
  border-radius: 3rem;
`;

const PersonalData = styled.div`
  position: relative;
  margin: 1rem;
  text-align: left;

  font-family: AppleSDGothicNeoEB00;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #333;
`;

const SearchPage = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [keyword, setKeyword] = useState('');

  const accessToken = localStorage.getItem('accessToken');

  const handleChange = (event) => {
    setKeyword(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `/api/friend/search?keyword=${keyword}`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      if (response.status === 200) {
        setSearchResult([response.data]);
      } else if (response.status === 404) {
        setSearchResult([]);
      } else {
        setSearchResult([]);
        // console.error('Unexpected response:', response);
      }
    } catch (error) {
      setSearchResult([]);
      // console.error('Error fetching search results:', error);
    }
  };

  const renderFriendshipStatus = (status) => {
    switch (status) {
      case 'FRIEND':
        return '이미 친구입니다';
      case 'SENT':
        return '요청 보낸 상태입니다';
      case 'RECEIVED':
        return '요청 받은 상태입니다';
      case 'UNFRIEND':
        return '친구가 아닙니다';
      case 'SELF':
        return '본인입니다';
      default:
        return '알 수 없음';
    }
  };

  useEffect(() => {
    handleSearch();
  }, [keyword]);

  return (
    <>
      <Top>
        <Back>
          <Link to={`/home`}>
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
          onChange={handleChange}
        />
      </Top>
      <Hr />
      <Border>
        {searchResult.map((result, idx) => (
          <ProfileBorder key={idx}>
            <Pic style={{ backgroundImage: `url(${result.image})` }} />
            <PersonalData>
              <span style={{ fontSize: '0.875rem', color: '#333' }}>
                {`${result.nickname}`}
              </span>
              <br />
              <span style={{ fontSize: '0.75rem', color: '#C3C3C3' }}>
                {`@${result.accountId}`} -{' '}
                {renderFriendshipStatus(result.friendshipStatus)}
              </span>
            </PersonalData>
          </ProfileBorder>
        ))}
      </Border>
    </>
  );
};

export default SearchPage;

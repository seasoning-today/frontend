import axios from 'axios';
import debounce from 'lodash.debounce';
import { useState, useEffect, createContext } from 'react';

export const SearchContext = createContext();

export function useSearchContext() {
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

  const handleChangeKeyword = (event) => {
    setKeyword(event.target.value);
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

  return {
    keyword,
    searchResult,
    handleChangeKeyword,
    sendFriendRequest,
    cancelFriendRequest,
  };
}

import api from '@utils/api/APIService';
import debounce from 'lodash.debounce';
import { useState, useEffect, createContext, useContext } from 'react';

export const SearchContext = createContext();

export function useSearchContext() {
  return useContext(SearchContext);
}

export function createSearchContext() {
  const [searchResult, setSearchResult] = useState([]);
  const [keyword, setKeyword] = useState('');

  const handleSearch = async () => {
    try {
      const response = await api.get(`/friend/search?keyword=${keyword}`);
      setSearchResult([response.data]);
    } catch (error) {
      setSearchResult([]);
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
    try {
      const response = await api.post(`/friend/add`, {
        id: friendId,
      });
      handleSearch();
    } catch (error) {
      console.error('Error sending friend request:', error);
    }
  };

  const cancelFriendRequest = async (friendId) => {
    try {
      const response = await api.delete(`/friend/add/cancel`, {
        data: {
          id: friendId,
        },
      });
      handleSearch();
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

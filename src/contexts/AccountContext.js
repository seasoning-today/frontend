import axios from 'axios';
import { useState, createContext } from 'react';

export const AccountContext = createContext();

export function useAccountContext(loaderData) {
  const { userSearchable } = loaderData;
  const [searchEnabled, setSearchEnabled] = useState(userSearchable);
  const [showModal, setShowModal] = useState(false);

  const toggleSearchEnabled = async () => {
    const accessToken = localStorage.getItem('accessToken');

    try {
      const response = await axios.put(
        `/api/user?searchable=${searchEnabled ? `false` : `true`}`,
        {},
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      setSearchEnabled((searchEnabled) => !searchEnabled);
    } catch (error) {
      console.error('Error handling id search toggles:', error);
    }
  };

  const menuListsData = [
    [
      {
        type: 'toggle',
        text: '아이디 검색 허용',
        value: searchEnabled,
        action: toggleSearchEnabled,
      },
    ],
    [
      {
        type: 'action',
        text: '회원 탈퇴',
        action: () => setShowModal(true),
      },
    ],
  ];

  const handleCloseModal = () => setShowModal(false);

  return { showModal, menuListsData, handleCloseModal };
}

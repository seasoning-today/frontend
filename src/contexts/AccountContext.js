import { useState, createContext } from 'react';
import api from '@utils/api/APIService';

export const AccountContext = createContext();

export function useAccountContext(loaderData) {
  const { userSearchable } = loaderData;
  const [searchEnabled, setSearchEnabled] = useState(userSearchable);
  const [showModal, setShowModal] = useState(false);

  const toggleSearchEnabled = async () => {
    await api.put(`/user?searchable=${searchEnabled ? `false` : `true`}`, {});
    setSearchEnabled((searchEnabled) => !searchEnabled);
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

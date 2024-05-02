import axios from 'axios';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import AccountTemplate from '@components/templates/AccountTemplate';

export default function AccountPage() {
  const { userSearchable } = useLoaderData();
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

  const handleCloseModal = () => {
    setShowModal(false);
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
        action: () => {
          setShowModal(true);
        },
      },
    ],
  ];

  return (
    <AccountTemplate
      showModal={showModal}
      handleCloseModal={handleCloseModal}
      menuListsData={menuListsData}
    />
  );
}

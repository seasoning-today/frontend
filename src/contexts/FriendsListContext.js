import { useState, createContext, useContext } from 'react';

export const FriendsListContext = createContext();

export function useFriendsListContext() {
  return useContext(FriendsListContext);
}

export function createFriendsListContext(loaderData) {
  const { friendListData } = loaderData;

  const [showModal, setShowModal] = useState(false);
  const [selectedFriendId, setSelectedFriendId] = useState(null);

  const handleFriendDelete = (friendId) => {
    setSelectedFriendId(friendId);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedFriendId(null);
  };

  return {
    friendListData,
    showModal,
    selectedFriendId,
    handleFriendDelete,
    handleCloseModal,
  };
}

import * as S from './style';
import { useState } from 'react';

import FriendsDeleteModal from '@components/molecules/FriendsDeleteModal';

import Button from '@components/atoms/Button';
import Text from '@components/atoms/Text';
import UserProfile from '@components/molecules/UserProfile';
import withNavigation from '@components/hoc/withNavigation';

function FriendsListTemplate({ friendListData }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedFriendId, setSelectedFriendId] = useState(null);

  const handleFriendDelete = (friendId) => {
    setSelectedFriendId(friendId);
    setShowModal(true);
  };

  return (
    <S.Layout>
      {showModal && (
        <FriendsDeleteModal
          friendId={selectedFriendId}
          onCloseModal={() => {
            setShowModal(false);
            setSelectedFriendId(null);
          }}
        />
      )}

      {friendListData.length > 0 ? (
        <S.FriendsList>
          {friendListData.map(
            ({ profileImageUrl, nickname, id, accountId }, index) => (
              <S.FriendsListItem key={index}>
                <UserProfile
                  imageUrl={profileImageUrl}
                  nickname={nickname}
                  accountId={accountId}
                />

                <Button
                  text="친구 삭제"
                  size="0.78"
                  color="#1f1f1f"
                  backgroundColor="#f0f0f0"
                  onClick={() => handleFriendDelete(id)}
                  style={{
                    width: '5.1875rem',
                    height: '1.6875rem',
                    padding: '0.4rem 0.8rem',
                  }}
                />
              </S.FriendsListItem>
            )
          )}
        </S.FriendsList>
      ) : (
        <S.EmptyContent>
          <Text color="#8c8c8c">현재 추가된 친구가 없습니다.</Text>
        </S.EmptyContent>
      )}
    </S.Layout>
  );
}

export default withNavigation('친구 목록', FriendsListTemplate);

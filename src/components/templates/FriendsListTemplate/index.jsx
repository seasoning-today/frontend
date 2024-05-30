import * as S from './style';

import Button from '@components/atoms/Button';
import Text from '@components/atoms/Text';
import UserProfile from '@components/molecules/UserProfile';
import FriendsDeleteModal from '@components/molecules/FriendsDeleteModal';
import withNavigation from '@components/hoc/withNavigation';

import { FriendsListContext } from '@contexts/FriendsListContext';
import { useContext } from 'react';

function FriendsListTemplate() {
  const {
    friendListData,
    showModal,
    selectedFriendId,
    handleFriendDelete,
    handleCloseModal,
  } = useContext(FriendsListContext);

  return (
    <S.Layout>
      {showModal && (
        <FriendsDeleteModal
          friendId={selectedFriendId}
          onCloseModal={handleCloseModal}
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

import api from '@utils/api/APIService';

export async function FriendsListLoader() {
  const friendListResponse = await api.get(`/friend/list`);

  return { friendListData: friendListResponse.data };
}

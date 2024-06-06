import api from '@utils/api/APIService';

export async function UserRestrictLoader() {
  const userResponse = await api.get(`/user/profile`);

  return { userData: userResponse.data };
}

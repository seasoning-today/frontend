import api from '@utils/api/APIService';

export const AccountLoader = async () => {
  const userSearchableResponse = await api.get(`/user/searchable`);

  return { userSearchable: userSearchableResponse.data };
};

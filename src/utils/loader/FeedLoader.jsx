import api from '@utils/api/APIService';

export async function FeedLoader() {
  const size = 10;

  const feedResponse = await api.get(`/article/friends?size=${size}`);

  return { initialFeedData: feedResponse.data };
}

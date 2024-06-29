import api from '@utils/api/APIService';
import { useState, createContext, useContext } from 'react';
import useIntersectionFocus from '@utils/hooks/useIntersectionFocus';

export const FeedContext = createContext();

export function useFeedContext() {
  return useContext(FeedContext);
}

export function createFeedContext(loaderData) {
  const { initialFeedData } = loaderData;

  const [feedData, setFeedData] = useState(initialFeedData);
  const [lastFeedItemId, setLastFeedItemId] = useState(
    initialFeedData.length > 0 ? initialFeedData.at(-1).article.id : null
  );

  const fetchFeedData = async () => {
    if (!lastFeedItemId) return;

    const size = 5;

    try {
      const feedResponse = await api.get(
        `/article/friends?size=${size}&lastId=${lastFeedItemId}`
      );
      if (feedResponse.data.length === 0) {
        setLastFeedItemId(null);
      } else {
        setFeedData((feedData) => [...feedData, ...feedResponse.data]);
        setLastFeedItemId(feedResponse.data.at(-1).article.id);
      }
    } catch (error) {
      console.error(error);
      setLastFeedItemId(null);
    }
  };

  const { observerRef } = useIntersectionFocus(fetchFeedData, []);

  return { feedData, observerRef };
}

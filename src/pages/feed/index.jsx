import axios from 'axios';

import FeedTemplate from '@components/templates/FeedTemplate';

import { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import useIntersectionFocus from '@utils/hooks/useIntersectionFocus';

export default function FeedPage() {
  const { initialFeedData } = useLoaderData();
  const [feedData, setFeedData] = useState(initialFeedData);
  const [lastFeedItemId, setLastFeedItemId] = useState(
    initialFeedData.length > 0 ? initialFeedData.at(-1).article.id : null
  );
  const navigate = useNavigate();

  const fetchFeedData = async () => {
    if (!lastFeedItemId) return;

    const size = 5;

    try {
      const accessToken = localStorage.getItem('accessToken');
      const feedResponse = await axios.get(
        `/api/article/friends?size=${size}&lastId=${lastFeedItemId}`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
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

      if (error.response && error.response.status === 401) {
        console.log('* Unauthorized... Redirecting to /login');
        navigate(`/login`);
      } else {
        console.log('* Response Error... Redirecting to /home');
        navigate(`/home`);
      }
    }
  };
  const { observerRef } = useIntersectionFocus(fetchFeedData, []);

  return <FeedTemplate feedData={feedData} observerRef={observerRef} />;
}

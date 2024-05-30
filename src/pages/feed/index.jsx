import { useLoaderData } from 'react-router-dom';
import { FeedContext, useFeedContext } from '@contexts/FeedContext';

import FeedTemplate from '@components/templates/FeedTemplate';

export default function FeedPage() {
  const loaderData = useLoaderData();
  const feedContextValue = useFeedContext(loaderData);

  return (
    <FeedContext.Provider value={feedContextValue}>
      <FeedTemplate />
    </FeedContext.Provider>
  );
}

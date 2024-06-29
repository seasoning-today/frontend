import { useLoaderData } from 'react-router-dom';
import { FeedContext, createFeedContext } from '@contexts/FeedContext';

import FeedTemplate from '@components/templates/FeedTemplate';

export default function FeedPage() {
  const loaderData = useLoaderData();
  const feedContextValue = createFeedContext(loaderData);

  return (
    <FeedContext.Provider value={feedContextValue}>
      <FeedTemplate />
    </FeedContext.Provider>
  );
}

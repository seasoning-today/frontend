import { useLoaderData } from 'react-router-dom';
import {
  FriendsListContext,
  createFriendsListContext,
} from '@contexts/FriendsListContext';

import FriendsListTemplate from '@components/templates/FriendsListTemplate';

export default function FriendsListPage() {
  const loaderData = useLoaderData();
  const friendsListContextValue = createFriendsListContext(loaderData);

  return (
    <FriendsListContext.Provider value={friendsListContextValue}>
      <FriendsListTemplate />
    </FriendsListContext.Provider>
  );
}

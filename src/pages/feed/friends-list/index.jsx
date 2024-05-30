import { useLoaderData } from 'react-router-dom';
import {
  FriendsListContext,
  useFriendsListContext,
} from '@contexts/FriendsListContext';

import FriendsListTemplate from '@components/templates/FriendsListTemplate';

export default function FriendsListPage() {
  const loaderData = useLoaderData();
  const friendsListContextValue = useFriendsListContext(loaderData);

  return (
    <FriendsListContext.Provider value={friendsListContextValue}>
      <FriendsListTemplate />
    </FriendsListContext.Provider>
  );
}

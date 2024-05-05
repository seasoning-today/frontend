import { useLoaderData } from 'react-router-dom';

import FriendsListTemplate from '@components/templates/FriendsListTemplate';

export default function FriendsListPage() {
  const { friendListData } = useLoaderData();

  return <FriendsListTemplate friendListData={friendListData} />;
}

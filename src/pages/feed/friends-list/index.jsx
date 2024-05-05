import { useLoaderData } from 'react-router-dom';

import FriendsListTemplate from '@components/templates/FriendsListTemplate';

const FriendsListPage = () => {
  const { friendListData } = useLoaderData();

  return <FriendsListTemplate friendListData={friendListData} />;
};

export default FriendsListPage;

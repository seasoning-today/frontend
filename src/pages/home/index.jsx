import { useLoaderData } from 'react-router-dom';

import HomeTemplate from '@components/templates/HomeTemplate';

const HomePage = () => {
  const { homeData, termData, newNotificationData } = useLoaderData();

  return (
    <HomeTemplate
      homeData={homeData}
      termData={termData}
      isNewNotification={newNotificationData}
    />
  );
};

export default HomePage;

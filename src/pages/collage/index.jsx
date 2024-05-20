import { useLoaderData } from 'react-router-dom';

import CollageTemplate from '@components/templates/CollageTemplate';

const CollagePage = () => {
  const { collageData, newNotificationData } = useLoaderData();

  return (
    <CollageTemplate
      collageData={collageData}
      isNewNotification={newNotificationData}
    />
  );
};

export default CollagePage;

import NotificationTemplate from '@components/templates/NotificationTemplate';

import { useLoaderData } from 'react-router-dom';

import {
  NotificationContext,
  createNotificationContext,
} from '@contexts/NotificationContext';

const NotificationPage = () => {
  const loaderData = useLoaderData();
  const notificationContextValue = createNotificationContext(loaderData);

  return (
    <NotificationContext.Provider value={notificationContextValue}>
      <NotificationTemplate />
    </NotificationContext.Provider>
  );
};

export default NotificationPage;

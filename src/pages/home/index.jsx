import { useLoaderData } from 'react-router-dom';
import { HomeContext, useHomeContext } from '@contexts/HomeContext';

import HomeTemplate from '@components/templates/HomeTemplate';

const HomePage = () => {
  const loaderData = useLoaderData();
  const homeContextValue = useHomeContext(loaderData);

  return (
    <HomeContext.Provider value={homeContextValue}>
      <HomeTemplate />
    </HomeContext.Provider>
  );
};

export default HomePage;

import { useLoaderData } from 'react-router-dom';
import { HomeContext, createHomeContext } from '@contexts/HomeContext';

import HomeTemplate from '@components/templates/HomeTemplate';

const HomePage = () => {
  const loaderData = useLoaderData();
  const homeContextValue = createHomeContext(loaderData);

  return (
    <HomeContext.Provider value={homeContextValue}>
      <HomeTemplate />
    </HomeContext.Provider>
  );
};

export default HomePage;

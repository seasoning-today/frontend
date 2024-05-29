import CollageTemplate from '@components/templates/CollageTemplate';

import { useLoaderData } from 'react-router-dom';
import { CollageContext, useCollageContext } from '@contexts/CollageContext';

export default function CollagePage() {
  const loaderData = useLoaderData();
  const collageContextValue = useCollageContext(loaderData);

  return (
    <CollageContext.Provider value={collageContextValue}>
      <CollageTemplate />
    </CollageContext.Provider>
  );
}

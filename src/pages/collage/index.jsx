import CollageTemplate from '@components/templates/CollageTemplate';

import { CollageContext, useCollageContext } from '@contexts/useCollageContext';
import { useLoaderData } from 'react-router-dom';

export default function CollagePage() {
  const loaderData = useLoaderData();
  const collageContextValue = useCollageContext(loaderData);

  return (
    <CollageContext.Provider value={collageContextValue}>
      <CollageTemplate />
    </CollageContext.Provider>
  );
}

import WriteTemplate from '@components/templates/WriteTemplate';

import { useLoaderData } from 'react-router-dom';
import { WriteContext, createWriteContext } from '@contexts/WriteContext';

export default function WritePage() {
  const loaderData = useLoaderData();
  const writeContextValue = createWriteContext(loaderData);

  return (
    <WriteContext.Provider value={writeContextValue}>
      <WriteTemplate />
    </WriteContext.Provider>
  );
}

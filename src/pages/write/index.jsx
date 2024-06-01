import WriteTemplate from '@components/templates/WriteTemplate';

import { useLoaderData } from 'react-router-dom';
import { WriteContext, useWriteContext } from '@contexts/WriteContext';

export default function WritePage() {
  const loaderData = useLoaderData();
  const writeContextValue = useWriteContext(loaderData);

  return (
    <WriteContext.Provider value={writeContextValue}>
      <WriteTemplate />
    </WriteContext.Provider>
  );
}

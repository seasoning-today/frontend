import WriteTemplate from '@components/templates/WriteTemplate';

import { useLoaderData } from 'react-router-dom';

export default function WritePage() {
  const { termData } = useLoaderData();

  return <WriteTemplate recordTerm={termData.recordTerm} />;
}

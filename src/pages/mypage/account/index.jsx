import { AccountContext, useAccountContext } from '@contexts/AccountContext';
import { useLoaderData } from 'react-router-dom';

import AccountTemplate from '@components/templates/AccountTemplate';

export default function AccountPage() {
  const loaderData = useLoaderData();
  const accountContextValue = useAccountContext(loaderData);

  return (
    <AccountContext.Provider value={accountContextValue}>
      <AccountTemplate />
    </AccountContext.Provider>
  );
}

import LoginTemplate from '@components/templates/LoginTemplate';

import { LoginContext, useLoginContext } from '@contexts/LoginContext';

export default function LoginPage() {
  const loginContextValue = useLoginContext();

  return (
    <LoginContext.Provider value={loginContextValue}>
      <LoginTemplate />
    </LoginContext.Provider>
  );
}

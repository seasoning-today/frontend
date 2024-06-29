import LoginTemplate from '@components/templates/LoginTemplate';

import { LoginContext, createLoginContext } from '@contexts/LoginContext';

export default function LoginPage() {
  const loginContextValue = createLoginContext();

  return (
    <LoginContext.Provider value={loginContextValue}>
      <LoginTemplate />
    </LoginContext.Provider>
  );
}

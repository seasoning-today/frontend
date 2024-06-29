import MypageTemplate from '@components/templates/MypageTemplate';

import { useLoaderData } from 'react-router-dom';
import { MypageContext, createMypageContext } from '@contexts/MypageContext';

export default function MyPage() {
  const loaderData = useLoaderData();
  const mypageContextValue = createMypageContext(loaderData);

  return (
    <MypageContext.Provider value={mypageContextValue}>
      <MypageTemplate />
    </MypageContext.Provider>
  );
}

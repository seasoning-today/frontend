import MypageTemplate from '@components/templates/MypageTemplate';

import { useLoaderData } from 'react-router-dom';
import { MypageContext, useMypageContext } from '@contexts/MypageContext';

export default function MyPage() {
  const loaderData = useLoaderData();
  const mypageContextValue = useMypageContext(loaderData);

  return (
    <MypageContext.Provider value={mypageContextValue}>
      <MypageTemplate />
    </MypageContext.Provider>
  );
}

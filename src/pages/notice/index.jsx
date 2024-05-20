import { useLoaderData } from 'react-router-dom';

import NoticeTemplate from '@components/templates/NoticeTemplate';

export default function NoticePage() {
  const { noticeData } = useLoaderData();

  return <NoticeTemplate noticeData={noticeData} />;
}

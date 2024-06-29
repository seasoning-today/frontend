import api from '@utils/api/APIService';

export async function NoticeLoader() {
  const noticeResponse = await api.get(`/notice`);

  return { noticeData: noticeResponse.data };
}

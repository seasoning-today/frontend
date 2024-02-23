import axios from 'axios';
import { redirect } from 'react-router-dom';

export const HomeLoader = async ({ request, params }) => {
  /* (공통 로직) localStorage에 “accessToken” 이 존재하지 않는 경우 처리 */
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken === null) {
    console.log('* No Access Token... Redirecting to /login');
    return redirect(`/login`);
  }

  const url = new URL(request.url);
  const category =
    url.searchParams.get('category') !== 'term' ? 'year' : 'term';
  const year =
    url.searchParams.get('year') === null
      ? '2024'
      : url.searchParams.get('year');
  const term =
    url.searchParams.get('term') === null ? '1' : url.searchParams.get('term');

  try {
    const homeResponse = await axios.get(
      `/api/article/list/${category}/${category === 'year' ? year : term}`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    const termResponse = await axios.get(`/api/solarTerm`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    const newNotificationResponse = await axios.get(`/api/notification/new`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    return {
      homeData: homeResponse.data,
      termData: termResponse.data,
      newNotificationData: newNotificationResponse.data,
    };
  } catch (error) {
    console.error(error);
    return redirect(`/login`);
  }

  return null;
};

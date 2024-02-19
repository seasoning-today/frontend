import axios from 'axios';
import { redirect } from 'react-router-dom';

export const CollageLoader = async ({ request, params }) => {
  /* (공통 로직) localStorage에 “accessToken” 이 존재하지 않는 경우 처리 */
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken === null) {
    console.log('* No Access Token... Redirecting to /login');
    return redirect(`/login`);
  }

  const url = new URL(request.url);
  let yearParam = url.searchParams.get('year'); // string || null
  yearParam = yearParam === null ? '2024' : yearParam;

  try {
    const collageResponse = await axios.get(
      `/api/article/collage?year=${yearParam}`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    const newNotificationResponse = await axios.get(`/api/notification/new`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    return {
      collageData: collageResponse.data,
      newNotificationData: newNotificationResponse.data,
    };
  } catch (error) {
    console.error(error);

    if (error.response && error.response.status === 401) {
      console.log('* Unauthorized... Redirecting to /login');
      return redirect(`/login`);
    } else {
      console.log('* Response Error... Redirecting to /home');
      return redirect(`/home`);
    }
  }

  return null;
};

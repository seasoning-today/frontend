import axios from 'axios';
import { redirect } from 'react-router-dom';

export const WriteLoader = async ({ request, params }) => {
  /* (공통 로직) localStorage에 “accessToken” 이 존재하지 않는 경우 처리 */
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken === null) {
    console.log('* No Access Token... Redirecting to /login');
    return redirect(`/login`);
  }

  try {
    const termResponse = await axios.get(`/api/solarTerm`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    if (termResponse.data.recordable) {
      return { termData: termResponse.data };
    } else {
      return redirect(`/home`);
    }
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

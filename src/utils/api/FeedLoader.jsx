import axios from 'axios';
import { redirect } from 'react-router-dom';

export const FeedLoader = async ({ request, params }) => {
  /* (공통 로직) localStorage에 “accessToken” 이 존재하지 않는 경우 처리 */
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken === null) {
    console.log('* No Access Token... Redirecting to /login');
    return redirect(`/login`);
  }

  const size = 1;
  const articleId = 1;

  try {
    const response = await axios.get(
      //   `/api/article/friends?size=${size}&lastId=${articleId}`,
      `/api/article/friends`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    return { response };
  } catch (error) {
    console.error(error);
    console.log('* Response Error... Redirecting to /login');
    return redirect(`/login`);
  }

  return null;
};

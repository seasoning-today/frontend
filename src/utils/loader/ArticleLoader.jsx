import axios from 'axios';
import { redirect } from 'react-router-dom';

export const ArticleLoader = async ({ request, params }) => {
  /* (공통 로직) localStorage에 “accessToken” 이 존재하지 않는 경우 처리 */
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken === null) {
    console.log('* No Access Token... Redirecting to /login');
    return redirect(`/login`);
  }

  try {
    const articleResponse = await axios.get(
      `/api/article/${params.articleId}`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    const userResponse = await axios.get(`/api/user/profile`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    const termResponse = await axios.get(`/api/solarTerm`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    return {
      articleId: params.articleId,
      articleData: articleResponse.data,
      userData: userResponse.data,
      termData: termResponse.data,
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

import axios from 'axios';
import { redirect } from 'react-router-dom';

export const EditArticleLoader = async ({ request, params }) => {
  /* (공통 로직) localStorage에 “accessToken” 이 존재하지 않는 경우 처리 */
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken === null) {
    console.log('* No Access Token... Redirecting to /login');
    return redirect(`/login`);
  }

  try {
    const userResponse = await axios.get(`/api/user/profile`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    const articleResponse = await axios.get(
      `/api/article/${params.articleId}`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    const termResponse = await axios.get(`/api/solarTerm`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    /* todo: 위에서 articleResponse에서 본인이 작성자일 경우만 대조해서 통과시켜야 함 */
    return { articleResponse, termResponse };
  } catch (error) {
    console.error(error);
    console.log('* Response Error... Redirecting to /login');
    return redirect(`/login`);
  }

  return null;
};

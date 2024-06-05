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
    const termResponse = await axios.get(`/api/solarTerm`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    const articleResponse = await axios.get(
      `/api/article/${params.articleId}`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );

    if (userResponse.data.id !== articleResponse.data.profile.id) {
      console.log('나의 작성글만 수정할 수 있습니다.');
      return redirect(`/home`);
    } else if (
      !termResponse.data.recordable ||
      articleResponse.data.year !==
        parseInt(termResponse.data.recordTerm.date.split('-')[0]) ||
      articleResponse.data.term !== termResponse.data.recordTerm.sequence
    ) {
      console.log('현재 수정 가능한 작성글이 아닙니다.');
      return redirect(`/home`);
    }

    return { articleId: params.articleId, articleData: articleResponse.data };
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

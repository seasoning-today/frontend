import { redirect } from 'react-router-dom';
import api from '@utils/api/APIService';

export async function EditArticleLoader({ params }) {
  const userResponse = await api.get(`/user/profile`);
  const termResponse = await api.get(`/solarTerm`);
  const articleResponse = await api.get(`/article/${params.articleId}`);

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
}

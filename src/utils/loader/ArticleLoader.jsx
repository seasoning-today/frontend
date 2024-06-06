import api from '@utils/api/APIService';

export async function ArticleLoader({ params }) {
  const articleResponse = await api.get(`/article/${params.articleId}`);
  const userResponse = await api.get(`/user/profile`);
  const termResponse = await api.get(`/solarTerm`);

  return {
    articleId: params.articleId,
    articleData: articleResponse.data,
    userData: userResponse.data,
    termData: termResponse.data,
  };
}

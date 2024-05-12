import { useLoaderData } from 'react-router-dom';

import ArticleTemplate from '@components/templates/ArticleTemplate';

const ArticlePage = () => {
  const { articleId, articleData, userData, termData } = useLoaderData();

  return (
    <ArticleTemplate
      articleId={articleId}
      articleData={articleData}
      userData={userData}
      termData={termData}
    />
  );
};

export default ArticlePage;

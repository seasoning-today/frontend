import EditArticleTemplate from '@components/templates/EditArticleTemplate';

import { useLoaderData } from 'react-router-dom';

export default function EditArticlePage() {
  const { articleId, articleData } = useLoaderData();

  return (
    <EditArticleTemplate articleId={articleId} articleData={articleData} />
  );
}

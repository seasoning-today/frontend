import ArticleTemplate from '@components/templates/ArticleTemplate';

import { useLoaderData } from 'react-router-dom';
import { ArticleContext, createArticleContext } from '@contexts/ArticleContext';

export default function ArticlePage() {
  const loaderData = useLoaderData();
  const articleContextValue = createArticleContext(loaderData);

  return (
    <ArticleContext.Provider value={articleContextValue}>
      <ArticleTemplate />
    </ArticleContext.Provider>
  );
}

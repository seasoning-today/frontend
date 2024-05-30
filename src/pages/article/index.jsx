import ArticleTemplate from '@components/templates/ArticleTemplate';

import { useLoaderData } from 'react-router-dom';
import { ArticleContext, useArticleContext } from '@contexts/ArticleContext';

export default function ArticlePage() {
  const loaderData = useLoaderData();
  const articleContextValue = useArticleContext(loaderData);

  return (
    <ArticleContext.Provider value={articleContextValue}>
      <ArticleTemplate />
    </ArticleContext.Provider>
  );
}

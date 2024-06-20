import { useLoaderData } from 'react-router-dom';
import {
  EditArticleContext,
  createEditArticleContext,
} from '@contexts/EditArticleContext';

import EditArticleTemplate from '@components/templates/EditArticleTemplate';

export default function EditArticlePage() {
  const loaderData = useLoaderData();
  const editArticleContextValue = createEditArticleContext(loaderData);

  return (
    <EditArticleContext.Provider value={editArticleContextValue}>
      <EditArticleTemplate />
    </EditArticleContext.Provider>
  );
}

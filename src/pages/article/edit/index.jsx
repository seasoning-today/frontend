import { useLoaderData } from 'react-router-dom';
import {
  EditArticleContext,
  useEditArticleContext,
} from '@contexts/EditArticleContext';

import EditArticleTemplate from '@components/templates/EditArticleTemplate';

export default function EditArticlePage() {
  const loaderData = useLoaderData();
  const editArticleContextValue = useEditArticleContext(loaderData);

  return (
    <EditArticleContext.Provider value={editArticleContextValue}>
      <EditArticleTemplate />
    </EditArticleContext.Provider>
  );
}

import { useLoaderData } from 'react-router-dom';
import {
  EditProfileContext,
  createEditProfileContext,
} from '@contexts/EditProfileContext';

import EditProfileTemplate from '@components/templates/EditProfileTemplate';

export default function EditProfilePage() {
  const loaderData = useLoaderData();
  const editProfileContextValue = createEditProfileContext(loaderData);

  return (
    <EditProfileContext.Provider value={editProfileContextValue}>
      <EditProfileTemplate />
    </EditProfileContext.Provider>
  );
}

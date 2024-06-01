import { useLoaderData } from 'react-router-dom';
import {
  EditProfileContext,
  useEditProfileContext,
} from '@contexts/EditProfileContext';

import EditProfileTemplate from '@components/templates/EditProfileTemplate';

export default function EditProfilePage() {
  const loaderData = useLoaderData();
  const editProfileContextValue = useEditProfileContext(loaderData);

  return (
    <EditProfileContext.Provider value={editProfileContextValue}>
      <EditProfileTemplate />
    </EditProfileContext.Provider>
  );
}

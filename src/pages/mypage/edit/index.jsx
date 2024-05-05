import EditProfileTemplate from '@components/templates/EditProfileTemplate';

import { useLoaderData } from 'react-router-dom';

export default function EditProfilePage() {
  const { userData } = useLoaderData();

  return <EditProfileTemplate prevUserData={userData} />;
}

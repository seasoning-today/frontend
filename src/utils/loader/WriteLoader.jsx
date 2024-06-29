import { redirect } from 'react-router-dom';
import api from '@utils/api/APIService';

export async function WriteLoader() {
  const termResponse = await api.get(`/solarTerm`);

  if (termResponse.data.recordable) {
    return { termData: termResponse.data };
  } else {
    return redirect(`/home`);
  }
}

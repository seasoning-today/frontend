import axios from 'axios';
import { redirect } from 'react-router-dom';

export const HomeLoader = async ({ request, params }) => {
  /* (공통 로직) localStorage에 “accessToken” 이 존재하지 않는 경우 처리 */
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken === null) {
    console.log('* No Access Token... Redirecting to /login');
    return redirect(`/login`);
  }

  const year = '2023'; // 임시로 2023로 고정
  const term = '1'; // 임시로 첫 번째 절기로 고정
  const url = new URL(request.url);
  let category = url.searchParams.get('category'); // year || season || null
  category = category === null ? 'year' : category;
  category = category === 'season' ? 'term' : category;
  console.log(category);
  const sendParam = category === 'year' ? year : term;

  try {
    const response = await axios.get(
      `/api/article/list/${category}/${sendParam}`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    return { response };
  } catch (error) {
    console.error(error);
    console.log('* Response Error... Redirecting to /login');
    return redirect(`/login`);
  }

  return null;
};

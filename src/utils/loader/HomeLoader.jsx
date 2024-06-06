import api from '@utils/api/APIService';

export async function HomeLoader({ request }) {
  const url = new URL(request.url);
  const category =
    url.searchParams.get('category') !== 'term' ? 'year' : 'term';
  const year =
    url.searchParams.get('year') === null
      ? '2024'
      : url.searchParams.get('year');
  const term =
    url.searchParams.get('term') === null ? '0' : url.searchParams.get('term');

  const homeResponse = await api.get(
    category === 'year'
      ? `/article/list/year/${year}`
      : `/article/list/term?term=${term}&size=20`
  );
  const termResponse = await api.get(`/solarTerm`);
  const newNotificationResponse = await api.get(`/notification/new`);

  return {
    homeData: homeResponse.data,
    termData: termResponse.data,
    newNotificationData: newNotificationResponse.data,
  };
}

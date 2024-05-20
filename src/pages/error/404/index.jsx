import { useRouteError } from 'react-router-dom';

export default function Error404Page() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>큰일!</h1>
      <p>뭔가 문제가 발생했습니다...</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

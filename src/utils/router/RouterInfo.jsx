/* 공통 레이아웃 페이지 */
import RootLayout from '@pages/common/RootLayout';
/* home 하위 페이지 */
import HomePage from '@pages/home';
/* collage 하위 페이지 */
import CollagePage from '@pages/collage';
/* feed 하위 페이지 */
import FeedPage from '@pages/feed';
import FriendsListPage from '@pages/feed/friends-list';
import SearchPage from '@pages/feed/friends-search';
/* mypage 하위 페이지 */
import MyPage from '@pages/mypage';
import AccountPage from '@pages/mypage/account';
import EditProfilePage from '@pages/mypage/edit';
/* article 하위 페이지 */
import ArticlePage from '@pages/article';
import EditArticlePage from '@pages/article/edit';
/* write 하위 페이지 */
import WritePage from '@pages/write';
/* notification 하위 페이지 */
import NotificationPage from '@pages/notification';
/* notice 하위 페이지 */
import NoticePage from '@pages/notice';
/* login 하위 페이지 */
import LoginPage from '@pages/login';
import CallBackPage from '@pages/login/callback/kakao';
/* dev 하위 페이지 */
import DevelopPage from '@pages/dev';
/* 기타 페이지 */
import Error404Page from '@pages/error/404';

/* API Loaders */
import { HomeLoader } from '@utils/api/HomeLoader';
import { CollageLoader } from '@utils/api/CollageLoader';
import { FeedLoader } from '@utils/api/FeedLoader';
import { FriendsListLoader } from '@utils/api/FriendsListLoader';
import { NotificationLoader } from '@utils/api/NotificationLoader';
import { NoticeLoader } from '@utils/api/NoticeLoader';
import { AccountLoader } from '@utils/api/AccountLoader';
import { ArticleLoader } from '@utils/api/ArticleLoader';
import { WriteLoader } from '@utils/api/WriteLoader';
import { EditArticleLoader } from '@utils/api/EditArticleLoader';
import { UserRestrictLoader } from '@utils/api/UserRestrictLoader';
import { DevPageLoader } from '@utils/api/DevPageLoader';

export const RouterInfo = [
  {
    path: '/',
    element: <RootLayout />,
    /* 404 에러 페이지 라우팅 */
    errorElement: <Error404Page />,
    children: [
      /* 기본 4개 탭에 대한 페이지 라우팅 */
      {
        index: true,
        element: <HomePage />,
        loader: HomeLoader,
      },
      {
        path: 'home',
        element: <HomePage />,
        loader: HomeLoader,
      },
      {
        path: 'collage',
        element: <CollagePage />,
        loader: CollageLoader,
      },
      {
        path: 'feed',
        element: <FeedPage />,
        loader: FeedLoader,
      },
      {
        path: 'feed/friends-list',
        element: <FriendsListPage />,
        loader: FriendsListLoader,
      },
      {
        path: 'feed/friends-search',
        element: <SearchPage />,
        loader: UserRestrictLoader,
      },
      {
        path: 'mypage',
        element: <MyPage />,
        loader: UserRestrictLoader,
      },
      {
        path: 'mypage/edit',
        element: <EditProfilePage />,
        loader: UserRestrictLoader,
      },
      {
        path: 'mypage/account',
        element: <AccountPage />,
        loader: AccountLoader,
      },
      /* 소셜 로그인에 대한 페이지 라우팅 */
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'callback/kakao/login',
        element: <CallBackPage />,
      },
      /* 기타 페이지 라우팅 */
      {
        path: 'write',
        element: <WritePage />,
        loader: WriteLoader,
      },
      {
        path: 'article/edit/:articleId',
        element: <EditArticlePage />,
        loader: EditArticleLoader,
      },
      {
        path: 'article/:articleId',
        element: <ArticlePage />,
        loader: ArticleLoader,
      },
      {
        path: 'notification',
        element: <NotificationPage />,
        loader: NotificationLoader,
      },
      {
        path: 'notice',
        element: <NoticePage />,
        loader: NoticeLoader,
      },
      /* Dev pages */
      {
        path: 'dev',
        element: <DevelopPage />,
        loader: DevPageLoader,
      },
    ],
  },
];

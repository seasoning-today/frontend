import Layout from '@components/common/Layout';
/* 기본 4개 탭에 대한 페이지 */
import HomePage from '@pages/home/HomePage';
import CollagePage from '@pages/collage/CollagePage';
import FeedPage from '@pages/feed/FeedPage';
import FriendsListPage from '@pages/feed/FriendsListPage';
import MyPage from '@pages/mypage/MyPage';
import EditProfilePage from '@pages/mypage/EditProfilePage';
import AccountPage from '@pages/mypage/AccountPage';
/* 소셜 로그인에 대한 페이지 */
import LoginPage from '@pages/login/LoginPage';
import CallBackPage from '@pages/login/CallBackPage';
/* 기타 페이지 */
import SearchPage from '@pages/feed/SearchPage';
import WritePage from '@pages/write/WritePage';
import EditArticlePage from '@pages/write/EditArticlePage';
import ArticlePage from '@pages/article/ArticlePage';
import NotificationPage from '@pages/notification/NotificationPage';
import NoticePage from '@pages/notice/NoticePage';
import ErrorPage from '@pages/error/ErrorPage';
/* API Loaders */
import { HomeLoader } from '@utils/api/HomeLoader';
import { CollageLoader } from '@utils/api/CollageLoader';
import { FeedLoader } from '@utils/api/FeedLoader';
import { FriendsListLoader } from '@utils/api/FriendsListLoader';
import { LoginLoader } from '@utils/api/LoginLoader';
import { NotificationLoader } from '@utils/api/NotificationLoader';
import { NoticeLoader } from '@utils/api/NoticeLoader';
import { ArticleLoader } from '@utils/api/ArticleLoader';
import { WriteLoader } from '@utils/api/WriteLoader';
import { EditArticleLoader } from '@utils/api/EditArticleLoader';
import { UserRestrictLoader } from '@utils/api/UserRestrictLoader';

export const RouterInfo = [
  {
    path: '/',
    element: <Layout />,
    /* 404 에러 페이지 라우팅 */
    errorElement: <ErrorPage />,
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
        loader: UserRestrictLoader,
      },
      /* 소셜 로그인에 대한 페이지 라우팅 */
      {
        path: 'login',
        element: <LoginPage />,
        // loader: LoginLoader,
      },
      {
        path: 'callback/kakao/login',
        element: <CallBackPage />,
      },
      /* 기타 페이지 라우팅 */
      {
        path: 'feed/friends-search',
        element: <SearchPage />,
        loader: UserRestrictLoader,
      },
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
    ],
  },
];

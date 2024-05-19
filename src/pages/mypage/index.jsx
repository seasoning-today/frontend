import { useLoaderData, useNavigate } from 'react-router-dom';

import MypageTemplate from '@components/templates/MypageTemplate';

export default function MyPage() {
  const { userData } = useLoaderData();
  const navigate = useNavigate();

  const onClickLogout = () => {
    localStorage.clear();
    navigate(`/login`);
  };

  const menuListsData = [
    [
      { type: 'link', text: '프로필 수정', to: `/mypage/edit` },
      { type: 'link', text: '계정 설정', to: `/mypage/account` },
    ],
    [{ type: 'link', text: '절기 알림 설정', to: `/mypage/kakao-friends` }],
    [{ type: 'link', text: '공지사항', to: `/notice` }],
    [
      {
        type: 'action',
        text: '로그아웃',
        action: onClickLogout,
      },
    ],
  ];

  return <MypageTemplate userData={userData} menuListsData={menuListsData} />;
}

import { createContext, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export const MypageContext = createContext();

export function useMypageContext() {
  return useContext(MypageContext);
}

export function createMypageContext(loaderData) {
  const navigate = useNavigate();
  const { userData } = loaderData;

  const handleClickLogout = () => {
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
        action: handleClickLogout,
      },
    ],
  ];

  return { userData, menuListsData };
}

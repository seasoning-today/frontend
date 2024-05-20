import KakaoFriendsTemplate from '@components/templates/KakaoFriendsTemplate';

export default function KakaoFriendsPage() {
  const menuListsData = [
    [
      {
        type: 'link',
        text: '시즈닝 플러스 친구 맺으러 가기',
        to: `https://pf.kakao.com/_GbxmxmG/friend`,
      },
    ],
  ];

  return <KakaoFriendsTemplate menuListsData={menuListsData} />;
}

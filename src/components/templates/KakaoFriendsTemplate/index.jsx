import * as S from './style';

import Icon from '@components/atoms/Icon';
import Text from '@components/atoms/Text';
import MenuList from '@components/organisms/MenuList';
import withNavigation from '@components/hoc/withNavigation';

function KakaoFriendsTemplate({ menuListsData }) {
  return (
    <S.Layout>
      <S.InfoContainer>
        <Icon
          width="2.5"
          height="2.5"
          type="notification-off"
          style={{ marginLeft: '1rem' }}
        />
        <S.Descriptions>
          <Text size="1.25" weight="600">
            절기마다 카카오톡 알림 받기
          </Text>
          <Text size="0.875" color="#8c8c8c" style={{ lineHeight: '135%' }}>
            시즈닝과 플러스 친구를 맺고
            <br />
            서비스 공지 및 기록장 오픈 알람을 받아보세요!
          </Text>
        </S.Descriptions>
      </S.InfoContainer>

      <S.MenuContainer>
        {menuListsData.map((menuListData, index) => (
          <MenuList key={index} menuListData={menuListData} />
        ))}
      </S.MenuContainer>
    </S.Layout>
  );
}

export default withNavigation('절기 알림 설정', KakaoFriendsTemplate);

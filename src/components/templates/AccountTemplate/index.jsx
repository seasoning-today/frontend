import * as S from './style';

import WithdrawModal from '@components/account/WithdrawModal';

import withNavigation from '@components/hoc/withNavigation';

import MenuList from '@components/organisms/MenuList';

function AccountTemplate({ showModal, handleCloseModal, menuListsData }) {
  return (
    <S.Layout>
      {showModal && <WithdrawModal onCloseModal={handleCloseModal} />}

      <S.MenuContainer>
        {menuListsData.map((menuListData, index) => (
          <MenuList key={index} menuListData={menuListData} />
        ))}
      </S.MenuContainer>
    </S.Layout>
  );
}

export default withNavigation('계정 설정', AccountTemplate);

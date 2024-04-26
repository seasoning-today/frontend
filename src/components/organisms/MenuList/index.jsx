import * as S from './style';

import Divider from '@components/atoms/Divider';

import MenuListItem from '@components/molecules/MenuListItem';

export default function MenuList({ menuListData }) {
  return (
    <S.Layout>
      {menuListData.map(({ type, text, to, action }, index) => (
        <>
          {index > 0 && <Divider borderWidth="0.03125" margin={1.125} />}
          <MenuListItem key={index} type={type} to={to} action={action}>
            {text}
          </MenuListItem>
        </>
      ))}
    </S.Layout>
  );
}

import * as S from './style';

import { Fragment } from 'react';

import Divider from '@components/atoms/Divider';

import MenuListItem from '@components/molecules/MenuListItem';

export default function MenuList({ menuListData }) {
  return (
    <S.Layout>
      {menuListData.map(({ type, text, to, value, action }, index) => (
        <Fragment key={index}>
          {index > 0 && <Divider borderWidth="0.03125" margin="1.125" />}
          <MenuListItem type={type} to={to} value={value} action={action}>
            {text}
          </MenuListItem>
        </Fragment>
      ))}
    </S.Layout>
  );
}

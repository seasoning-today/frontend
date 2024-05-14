import * as S from './style';

import { Fragment } from 'react';

import Divider from '@components/atoms/Divider';

import MenuItem from '@components/molecules/MenuItem';

export default function MenuList({ menuListData }) {
  return (
    <S.Layout>
      {menuListData.map(({ type, text, to, value, action }, index) => (
        <Fragment key={index}>
          {index > 0 && <Divider borderWidth="0.03125" margin="1.125" />}
          <MenuItem type={type} to={to} value={value} action={action}>
            {text}
          </MenuItem>
        </Fragment>
      ))}
    </S.Layout>
  );
}

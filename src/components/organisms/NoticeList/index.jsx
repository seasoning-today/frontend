import * as S from './style';

import { Fragment } from 'react';
import Divider from '@components/atoms/Divider';
import NoticeListItem from '@components/molecules/NoticeListItem';

export default function NoticeList({ noticeData }) {
  return (
    <S.Layout>
      {noticeData.map(({ content, date }, idx) => (
        <Fragment key={idx}>
          {idx !== 0 && <Divider color="#a9a9a9" borderWidth="0.03125" />}
          <NoticeListItem content={content} date={date} />
        </Fragment>
      ))}
    </S.Layout>
  );
}

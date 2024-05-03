import * as S from './style';
import { Fragment } from 'react';

import Divider from '@components/atoms/Divider';
import Text from '@components/atoms/Text';
import NoticeListItem from '@components/molecules/NoticeListItem';
import withNavigation from '@components/hoc/withNavigation';

function NoticeTemplate({ noticeData }) {
  return (
    <S.Layout>
      {noticeData.length > 0 ? (
        <S.NoticeList>
          {noticeData.map(({ content, date }, idx) => (
            <Fragment key={idx}>
              {idx !== 0 && <Divider color="#a9a9a9" borderWidth="0.03125" />}
              <NoticeListItem content={content} date={date} />
            </Fragment>
          ))}
        </S.NoticeList>
      ) : (
        <div className="notice__empty">
          <Text size="1" color="#8c8c8c">
            현재 공지사항이 없습니다.
          </Text>
        </div>
      )}
    </S.Layout>
  );
}

export default withNavigation('공지사항', NoticeTemplate);

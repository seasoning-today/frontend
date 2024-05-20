import * as S from './style';

import Text from '@components/atoms/Text';
import NoticeList from '@components/organisms/NoticeList';
import withNavigation from '@components/hoc/withNavigation';

function NoticeTemplate({ noticeData }) {
  return (
    <S.Layout>
      {noticeData.length > 0 ? (
        <S.NoticeListContainer>
          <NoticeList noticeData={noticeData} />
        </S.NoticeListContainer>
      ) : (
        <div className="notice-empty">
          <Text size="1" color="#8c8c8c">
            현재 공지사항이 없습니다.
          </Text>
        </div>
      )}
    </S.Layout>
  );
}

export default withNavigation('공지사항', NoticeTemplate);

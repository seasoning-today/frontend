import * as S from './style';

import Text from '@components/atoms/Text';

export default function NoticeItem({ content, date }) {
  const parseDate = (dateString) => {
    const noticeDate = new Date(dateString);
    const year = noticeDate.getFullYear();
    const month = `0${noticeDate.getMonth() + 1}`.slice(-2);
    const day = `0${noticeDate.getDate()}`.slice(-2);

    return `${year}/${month}/${day}`;
  };

  return (
    <S.Layout>
      <Text size="0.8125" color="#333" style={{ whiteSpace: 'pre-wrap' }}>
        {content}
      </Text>
      <Text size="0.6875" color="#8c8c8c">
        {parseDate(date)}
      </Text>
    </S.Layout>
  );
}

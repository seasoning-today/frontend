import * as S from './style';

import Icon from '@components/atoms/Icon';
import Text from '@components/atoms/Text';

import { useNavigate } from 'react-router-dom';
import { SeasonBackgrounds } from '@utils/image/SeasonBackgrounds';
import { TermsToChinese } from '@utils/seasoning/TermsToChinese';
import { TermsToKorean } from '@utils/seasoning/TermsToKorean';

export default function SeasonCircle({ term, statusData }) {
  const { status } = statusData; // `deactivated` | `written` | `written-countdown` | `countdown` | `open`
  const navigate = useNavigate();

  const handleClick = () => {
    if (status === `written` || status === `written-countdown`) {
      navigate(`/article/${statusData.articleId}`);
    } else if (status === `countdown`) {
      navigate(`/write`);
    } else {
      alert('현재 절기 기록장 오픈 기간이 아닙니다.');
    }
  };

  const countDownTermDate = new Date(statusData.dueDate);
  const remainingTime = countDownTermDate - statusData.now;
  const nextPercentage = 1 - remainingTime / 1314864000;
  const seconds = Math.floor(remainingTime / 1000) % 60;
  const minutes = Math.floor(remainingTime / 1000 / 60) % 60;
  const hours = Math.floor(remainingTime / (1000 * 60 * 60)) % 24;
  const days = Math.floor(remainingTime / (1000 * 60 * 60) / 24);

  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  return (
    <S.Layout status={status} onClick={handleClick}>
      <S.TopContainer>
        {status === `deactivated` ? (
          <Icon
            type="lock"
            width="2"
            height="2"
            style={{ marginBottom: '0.25rem' }}
          />
        ) : status === `countdown` || status === `written-countdown` ? (
          <>
            {days > 0 && (
              <Text
                notoserif
                size="0.75"
                weight="500"
                color={
                  status === `written` || status === `written-countdown`
                    ? `#fff`
                    : `#1f1f1f`
                }
              >{`${days}일`}</Text>
            )}
            <Text
              notoserif
              size="1.0625"
              weight="300"
              color={
                status === `written` || status === `written-countdown`
                  ? `#fff`
                  : `#1f1f1f`
              }
            >
              {formattedTime}
            </Text>
          </>
        ) : (
          <Text
            notoserif
            size="1.5"
            weight="300"
            color={
              status === `written` || status === `written-countdown`
                ? `#fff`
                : `#1f1f1f`
            }
          >
            {TermsToChinese[term]}
          </Text>
        )}
      </S.TopContainer>

      <S.BottomContainer>
        <Text
          notoserif
          size="0.9375"
          color={
            status === `written` || status === `written-countdown`
              ? `#fff`
              : `#1f1f1f`
          }
        >
          {TermsToKorean[term]}
        </Text>
      </S.BottomContainer>

      {status === `countdown` || status === `written-countdown` ? (
        <S.DonutContainer>
          <svg viewBox="0 0 200 200">
            <S.OuterCircle cx="100" cy="100" r="90" />
            <S.ProgressCircle
              cx="100"
              cy="100"
              r="90"
              percentage={nextPercentage}
            />
          </svg>
        </S.DonutContainer>
      ) : undefined}

      <S.BackgroundImage src={SeasonBackgrounds[term]} />
      <S.BackgroundColor status={status} />
    </S.Layout>
  );
}

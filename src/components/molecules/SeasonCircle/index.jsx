import * as S from './style';

import Icon from '@components/atoms/Icon';
import Text from '@components/atoms/Text';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SeasonBackgrounds } from '@utils/image/SeasonBackgrounds';
import { TermsToChinese } from '@utils/seasoning/TermsToChinese';
import { TermsToKorean } from '@utils/seasoning/TermsToKorean';

export default function SeasonCircle({ term, statusData }) {
  const navigate = useNavigate();
  const { status } = statusData; // `deactivated` | `written` | `written-countdown` | `countdown` | `open`

  const [days, setDays] = useState(0);
  const [nextPercentage, setNextPercentage] = useState(1);
  const [formattedTime, setFormattedTime] = useState('');

  const updateIntervalData = () => {
    const now = new Date();
    const countDownDueDate = new Date(statusData.dueDate);
    const remainingTime = countDownDueDate - now;
    const seconds = Math.floor(remainingTime / 1000) % 60;
    const minutes = Math.floor(remainingTime / 1000 / 60) % 60;
    const hours = Math.floor(remainingTime / (1000 * 60 * 60)) % 24;

    setDays(Math.floor(remainingTime / (1000 * 60 * 60 * 24)));
    setNextPercentage(remainingTime / 432000000);
    setFormattedTime(
      `${hours.toString().padStart(2, '0')}:${minutes
        .toString()
        .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
    );
  };

  useEffect(() => {
    let CountDownTimer;

    if (status === `countdown` || status === `written-countdown`) {
      updateIntervalData();
      CountDownTimer = setInterval(updateIntervalData, 1000);
    }

    return () => {
      if (CountDownTimer) {
        clearInterval(CountDownTimer);
      }
    };
  }, [status, statusData.dueDate]);

  const handleClick = () => {
    if (status === `written` || status === `written-countdown`) {
      navigate(`/article/${statusData.articleId}`);
    } else if (status === `countdown`) {
      navigate(`/write`);
    } else {
      alert('현재 절기 기록장 오픈 기간이 아닙니다.');
    }
  };

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

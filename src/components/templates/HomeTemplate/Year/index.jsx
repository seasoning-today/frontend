import * as S from './style';

import { useState, useEffect } from 'react';

import Image from '@components/atoms/Image';
import SeasonCircle from '@components/molecules/SeasonCircle';

import yearly_line from '@assets/home/yearly_line.webp';

export default function YearTemplate({ homeData, termData }) {
  const getStatus = (term) => {
    if (homeData.find((item) => item.term === term)) {
      if (termData.recordable && termData.recordTerm.sequence === term) {
        return {
          status: `written-countdown`,
          articleId: homeData.find((item) => item.term === term).id,
          now: now,
          dueDate: termData.recordTerm?.date + 'T23:59:59+09:00',
        };
      } else {
        return {
          status: `written`,
          articleId: homeData.find((item) => item.term === term).id,
        };
      }
    } else if (termData.recordable && termData.recordTerm.sequence === term) {
      return {
        status: `countdown`,
        now: now,
        dueDate: termData.recordTerm?.date + 'T23:59:59+09:00',
      };
    } else if (termData.currentTerm.sequence < term) {
      return { status: `deactivated` };
    } else {
      return { status: `open` };
    }
  };

  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const Timer = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => {
      clearInterval(Timer);
    };
  }, []);

  return (
    <S.Layout>
      <S.ContentContainer>
        <S.ContentRow>
          <SeasonCircle term={1} statusData={getStatus(1)} />
          <SeasonCircle term={2} statusData={getStatus(2)} />
          <SeasonCircle term={3} statusData={getStatus(3)} />
        </S.ContentRow>
        <S.ContentRow>
          <SeasonCircle term={5} statusData={getStatus(5)} />
          <SeasonCircle term={4} statusData={getStatus(4)} />
        </S.ContentRow>
        <S.ContentRow>
          <SeasonCircle term={6} statusData={getStatus(6)} />
          <SeasonCircle term={7} statusData={getStatus(7)} />
          <SeasonCircle term={8} statusData={getStatus(8)} />
        </S.ContentRow>
        <S.ContentRow>
          <SeasonCircle term={10} statusData={getStatus(10)} />
          <SeasonCircle term={9} statusData={getStatus(9)} />
        </S.ContentRow>
        <S.ContentRow>
          <SeasonCircle term={11} statusData={getStatus(11)} />
          <SeasonCircle term={12} statusData={getStatus(12)} />
          <SeasonCircle term={13} statusData={getStatus(13)} />
        </S.ContentRow>
        <S.ContentRow>
          <SeasonCircle term={15} statusData={getStatus(15)} />
          <SeasonCircle term={14} statusData={getStatus(14)} />
        </S.ContentRow>
        <S.ContentRow>
          <SeasonCircle term={16} statusData={getStatus(16)} />
          <SeasonCircle term={17} statusData={getStatus(17)} />
          <SeasonCircle term={18} statusData={getStatus(18)} />
        </S.ContentRow>
        <S.ContentRow>
          <SeasonCircle term={20} statusData={getStatus(20)} />
          <SeasonCircle term={19} statusData={getStatus(19)} />
        </S.ContentRow>
        <S.ContentRow>
          <SeasonCircle term={21} statusData={getStatus(21)} />
          <SeasonCircle term={22} statusData={getStatus(22)} />
          <SeasonCircle term={23} statusData={getStatus(23)} />
        </S.ContentRow>
        <S.ContentRow>
          <S.EmptyCircle />
          <SeasonCircle term={24} statusData={getStatus(24)} />
        </S.ContentRow>
      </S.ContentContainer>

      <S.Background>
        <Image src={yearly_line} style={{ width: '100%', height: '100%' }} />
      </S.Background>
    </S.Layout>
  );
}

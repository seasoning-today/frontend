import * as S from './style';
import yearly_line from '@assets/home/yearly_line.webp';

import Image from '@components/atoms/Image';
import SeasonCircle from '@components/molecules/SeasonCircle';

import { HomeContext } from '@contexts/HomeContext';
import { useContext } from 'react';

export default function YearTemplate() {
  const { getStatusData } = useContext(HomeContext);

  return (
    <S.Layout>
      <S.ContentContainer>
        <S.ContentRow>
          <SeasonCircle term={1} statusData={getStatusData(1)} />
          <SeasonCircle term={2} statusData={getStatusData(2)} />
          <SeasonCircle term={3} statusData={getStatusData(3)} />
        </S.ContentRow>
        <S.ContentRow>
          <SeasonCircle term={5} statusData={getStatusData(5)} />
          <SeasonCircle term={4} statusData={getStatusData(4)} />
        </S.ContentRow>
        <S.ContentRow>
          <SeasonCircle term={6} statusData={getStatusData(6)} />
          <SeasonCircle term={7} statusData={getStatusData(7)} />
          <SeasonCircle term={8} statusData={getStatusData(8)} />
        </S.ContentRow>
        <S.ContentRow>
          <SeasonCircle term={10} statusData={getStatusData(10)} />
          <SeasonCircle term={9} statusData={getStatusData(9)} />
        </S.ContentRow>
        <S.ContentRow>
          <SeasonCircle term={11} statusData={getStatusData(11)} />
          <SeasonCircle term={12} statusData={getStatusData(12)} />
          <SeasonCircle term={13} statusData={getStatusData(13)} />
        </S.ContentRow>
        <S.ContentRow>
          <SeasonCircle term={15} statusData={getStatusData(15)} />
          <SeasonCircle term={14} statusData={getStatusData(14)} />
        </S.ContentRow>
        <S.ContentRow>
          <SeasonCircle term={16} statusData={getStatusData(16)} />
          <SeasonCircle term={17} statusData={getStatusData(17)} />
          <SeasonCircle term={18} statusData={getStatusData(18)} />
        </S.ContentRow>
        <S.ContentRow>
          <SeasonCircle term={20} statusData={getStatusData(20)} />
          <SeasonCircle term={19} statusData={getStatusData(19)} />
        </S.ContentRow>
        <S.ContentRow>
          <SeasonCircle term={21} statusData={getStatusData(21)} />
          <SeasonCircle term={22} statusData={getStatusData(22)} />
          <SeasonCircle term={23} statusData={getStatusData(23)} />
        </S.ContentRow>
        <S.ContentRow>
          <S.EmptyCircle />
          <SeasonCircle term={24} statusData={getStatusData(24)} />
        </S.ContentRow>
      </S.ContentContainer>

      <S.Background>
        <Image src={yearly_line} style={{ width: '100%', height: '100%' }} />
      </S.Background>
    </S.Layout>
  );
}

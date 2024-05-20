import * as S from './style';

import Text from '@components/atoms/Text';

import { TermsToChinese } from '@utils/seasoning/TermsToChinese';
import { TermsToKorean } from '@utils/seasoning/TermsToKorean';

export default function ArticleHeader({
  year,
  term,
  firstOptionItem,
  firstOptionAction,
  secondOptionItem = null,
  secondOptionAction = () => {},
}) {
  return (
    <S.Layout>
      <Text notoserif size="1.875" weight="600" color="#000">
        {TermsToChinese[term]}
      </Text>
      <Text
        notoserif
        size="0.9375"
        color="#000"
      >{`${year}, ${TermsToKorean[term]}`}</Text>

      <S.MenuContainer>
        <div onClick={firstOptionAction}>{firstOptionItem}</div>

        {secondOptionItem && (
          <div onClick={secondOptionAction}>{secondOptionItem}</div>
        )}
      </S.MenuContainer>
    </S.Layout>
  );
}

import * as S from './style';

import Image from '@components/atoms/Image';
import Text from '@components/atoms/Text';

import { useNavigate } from 'react-router-dom';
import { SeasonBackgrounds } from '@utils/image/SeasonBackgrounds';
import { TermsToKorean } from '@utils/seasoning/TermsToKorean';

export default function SeasonMenuItem({ term, selected }) {
  const navigate = useNavigate();

  const handleClickMenu = () => {
    if (!selected) {
      navigate(`/home?category=term&term=${term}`, { replace: true });
    } else {
      navigate(`/home?category=term`, { replace: true });
    }
  };

  return (
    <S.Layout onClick={handleClickMenu}>
      <Text
        notoserif
        size="0.9375"
        weight="500"
        color="#fff"
        style={{ textShadow: '0px 0px 4px rgba(0, 0, 0, 0.5)', zIndex: '12' }}
      >
        {TermsToKorean[term]}
      </Text>
      <Image
        src={SeasonBackgrounds[term]}
        width="4.25"
        height="2.25"
        style={{ position: 'absolute', top: '0', left: '0', zIndex: '10' }}
      />
      <S.BackgroundColor active={selected} />
    </S.Layout>
  );
}

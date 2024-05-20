import * as S from './style';

import Divider from '@components/atoms/Divider';
import Icon from '@components/atoms/Icon';
import Text from '@components/atoms/Text';
import withModalBackground from '@components/hoc/withModalBackground';

function FortuneModal({ now, fortuneText, onCloseModal }) {
  return (
    <S.Layout>
      <S.InfoContainer>
        <section className="row">
          <Text color="#8e8c86">{`${
            now.getMonth() + 1
          }월 ${now.getDate()}일`}</Text>

          <Icon width="1.5" height="1.5" type="quit" onClick={onCloseModal} />
        </section>

        <Text size="1.625">오늘의 운세</Text>
      </S.InfoContainer>

      <Divider
        borderWidth="0.03125"
        color="#8e8c86"
        style={{ margin: '0.56rem 0 1.06rem' }}
      />

      <S.ContentContainer>
        <Text size="0.875">{fortuneText}</Text>
      </S.ContentContainer>
    </S.Layout>
  );
}

export default withModalBackground(FortuneModal);

import * as S from './style';

export default function Row({ spacing = 0, children, ...props }) {
  return <S.Layout {...props}>{children}</S.Layout>;
}

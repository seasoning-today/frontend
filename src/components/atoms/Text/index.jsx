import * as S from './style';

export default function Text({ children, ...props }) {
  return <S.Layout {...props}>{children}</S.Layout>;
}

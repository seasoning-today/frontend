import * as S from './style';

export default function Text({
  size = 1,
  weight = 400,
  color = `#400`,
  children,
  ...props
}) {
  return <S.Layout {...props}>{children}</S.Layout>;
}

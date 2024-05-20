import * as S from './style';

export default function Text({
  notoserif,
  size = 1,
  weight = 400,
  color = `#333`,
  children,
  ...props
}) {
  return (
    <S.Layout
      notoserif={notoserif}
      size={size}
      weight={weight}
      color={color}
      {...props}
    >
      {children}
    </S.Layout>
  );
}

import * as S from './style';

export default function Text({
  size = 1,
  weight = 400,
  color = `#333`,
  children,
  ...props
}) {
  return (
    <S.Layout size={size} weight={weight} color={color} {...props}>
      {children}
    </S.Layout>
  );
}

import * as S from './style';

export default function Column({
  spacing = 0,
  padding = 0,
  children,
  ...props
}) {
  return (
    <S.Layout spacing={spacing} padding={padding} {...props}>
      {children}
    </S.Layout>
  );
}

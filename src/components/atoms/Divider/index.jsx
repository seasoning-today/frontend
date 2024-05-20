import * as S from './style';

export default function Divider({
  borderWidth = 1,
  margin = 0,
  color = '#f0f0f0',
  ...props
}) {
  return (
    <S.Layout
      borderWidth={borderWidth}
      margin={margin}
      color={color}
      {...props}
    />
  );
}

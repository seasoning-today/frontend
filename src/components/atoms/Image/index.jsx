import * as S from './style';

export default function Image({
  width = 1,
  height = 1,
  radius = 0,
  src,
  ...props
}) {
  return (
    <S.Layout width={width} height={height} radius={radius} {...props}>
      <S.Image src={src} />
    </S.Layout>
  );
}

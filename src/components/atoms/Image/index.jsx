import * as S from './style';

export default function Image({
  width = 1,
  height = 1,
  radius = 0,
  circle = false,
  src,
  ...props
}) {
  return (
    <S.Layout
      width={width}
      height={height}
      radius={radius}
      circle={circle}
      {...props}
    >
      <S.Image src={src} />
    </S.Layout>
  );
}

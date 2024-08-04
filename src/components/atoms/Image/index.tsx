import * as S from './style';

interface ImageProps {
  width?: number;
  height?: number;
  radius?: number;
  circle?: boolean;
  src: string;
  [key: string]: any;
}

export default function Image({
  width = 1,
  height = 1,
  radius = 0,
  circle = false,
  src,
  ...props
}: ImageProps) {
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

import * as S from './style';

export default function SVGIcon({ width = 1, height = 1, children, ...props }) {
  return (
    <S.Layout width={width} height={height} {...props}>
      {children}
    </S.Layout>
  );
}

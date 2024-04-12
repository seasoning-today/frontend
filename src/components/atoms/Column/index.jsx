import * as S from './style';

export default function Column({ spacing = 0, children, ...props }) {
  return <S.Layout {...props}>{children}</S.Layout>;
}

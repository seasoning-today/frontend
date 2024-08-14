import * as S from './style';

import Text from '@components/atoms/Text';

interface ButtonProps {
  text: string;
  size?: number;
  color?: string;
  backgroundColor?: string;
  onClick?: () => void;
  [key: string]: any;
}

export default function Button({
  text,
  size = 0.875,
  color = `#333`,
  backgroundColor = `#fff`,
  onClick,
  ...props
}: ButtonProps) {
  return (
    <S.Layout backgroundColor={backgroundColor} onClick={onClick} {...props}>
      <Text size={size} color={color}>
        {text}
      </Text>
    </S.Layout>
  );
}

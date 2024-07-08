import * as S from './style';
import React from 'react';

interface TextProps {
  notoserif?: boolean;
  size?: number;
  weight?: number;
  color?: string;
  children: React.ReactNode;
  [key: string]: any;
}

export default function Text({
  notoserif,
  size = 1,
  weight = 400,
  color = `#333`,
  children,
  ...props
}: TextProps) {
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

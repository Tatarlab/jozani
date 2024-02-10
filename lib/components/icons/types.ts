import { CSSProperties } from 'react';

export interface IIconProps {
  isDisabled?: boolean;
  className?: string;
  title?: string;
  fill?: string;
  style?: CSSProperties;
  stroke?: string;
  width?: string | number;
  height?: string | number;
}

import { CSSProperties, ReactNode } from 'react';

export interface IGridProps {
  isAdaptive?: boolean;
  children: ReactNode;
  outgap?: number | number[];
  style?: CSSProperties;
  backgroundStyle?: string;
}

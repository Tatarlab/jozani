import { CSSProperties, ReactNode } from 'react';

export interface IGridProps {
  children: ReactNode;
  outgap?: number | string;
  style?: CSSProperties;
}

import { CSSProperties, ReactNode } from 'react';

export interface IGridProps {
  children: ReactNode;
  outgap?: number | string | [number, number];
  style?: CSSProperties;
}

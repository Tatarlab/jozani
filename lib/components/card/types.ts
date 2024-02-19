import { CardProps } from '@mui/material';
import {
  CSSProperties, ReactNode 
} from 'react';

export interface ICardProps extends Omit<CardProps,
  'title'
> {
  isFullWidth?: boolean;
  isFullHeight?: boolean;
  isBranding?: boolean;
  contentRef?: React.Ref<HTMLDivElement>;
  title?: ReactNode;
  footer?: ReactNode;
  titleStyle?: CSSProperties;
  footerStyle?: CSSProperties;
};

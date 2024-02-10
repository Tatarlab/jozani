import { ListProps } from '@mui/material';
import {
  CSSProperties, ReactNode
} from 'react';

export interface IListProps extends ListProps {
  data: unknown[];
  isReady?: boolean;
  isError?: boolean;
  className?: string;
  listClassName?: string;
  itemClassName?: string;
  listComponent?: React.FC;
  itemComponent?: React.FC;
  emptyContent?: ReactNode;
  errorContent?: ReactNode;
  loader?: React.FC;
  style?: CSSProperties;
  itemStyle?: CSSProperties;
  children?: ReactNode;
  renderItem(item: unknown, index: number, data: unknown[]): ReactNode;
}

export interface IListItemProps {
  isActive?: boolean;
}

export interface IBaseListProps extends Pick<IListProps,
  'isReady' |
  'isError' |
  'data' |
  'emptyContent' |
  'errorContent' |
  'itemClassName' |
  'listClassName' |
  'itemStyle'|
  'id'
> {
  title?: ReactNode;
  onRefresh?(): void;
}


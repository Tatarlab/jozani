import { GridProps } from '@mui/material';

type Breakpoint = boolean | number | string;

export interface IColProps extends Omit<GridProps, 'container'> {
  xxs?: Breakpoint;
  desktop?: Breakpoint;
  tablet?: Breakpoint;
  mobile?: Breakpoint;
};

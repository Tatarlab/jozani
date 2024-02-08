import { ThemeOptions } from '@mui/material';

export enum Unit {
  Pixel = 'px',
  RootElement = 'rem',
  Emphasized = 'em',
  Percent = '%',
}

export enum Colors {
  Blue = 'blue',
  Green = 'green',
  Red = 'red',
  Yellow = 'yellow',
  Grey = 'grey',
  White = 'white',
  Black = 'black',
}

export enum Fonts {
  Common = 'common',
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
  LineHeight = 'lineHeight',
  Regular = 'regular',
  SemiBold = 'semiBold',
  Bold = 'bold',
}

export enum Breakpoints {
  XXS = 'xxs',
  Mobile = 'mobile',
  XS = 'xs',
  SM = 'sm',
  MD = 'md',
  Tablet = 'tablet',
  Desktop = 'desktop',
  LG = 'lg',
  XL = 'xl',
  XXL = 'xxl',
}

export type ITheme = Pick<ThemeOptions, 'typography'>;

export type ColorVariants = 'primary' | 'secondary' | 'terciary' | 'error' | string;

export interface IColorPalette {
  main: string;
  25: string;
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  600: string;
  700: string;
  800: string;
  900: string;
  950: string;
  975: string;
}
export interface IColorPaletteOpacity {
  main: string;
  20: string;
  40: string;
  60: string;
  80: string;
}


import {
  LIGHT_THEME, DARK_THEME 
} from './shared';
import { ITheme } from './types';

export const getTheme = (
  // eslint-disable-next-line @typescript-eslint/default-param-last
  mode: 'dark' | 'light' = 'dark',
  theme: ITheme,
) => mode === 'light'
  ? LIGHT_THEME(theme)
  : DARK_THEME(theme)

export * from './shared';
export { ThemeProvider } from './shared/provider';

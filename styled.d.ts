import 'styled-components';
import { theme } from '../shared/ui/theme';

type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
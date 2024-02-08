import { createGlobalStyle } from 'styled-components';
import {
  FONTS,
  FONT_FAMILY,
  blue,
  red,
  green,
  grey,
  yellow,
  black,
  white,
  BREAKPOINTS,
} from '../theme';
import {
  getCssVar, map2CssVars 
} from './helpers';

const GlobalStyle = createGlobalStyle`
  :root {
    ${map2CssVars(FONTS, 'font')}
    ${map2CssVars(BREAKPOINTS, 'bp')}
    --font-family: ${FONT_FAMILY};
    --smooth-transition: .27s;
    --color-light-transparent: rgba(255, 255, 255, 0.2);

    ${map2CssVars(red, 'red')}
    ${map2CssVars(green, 'green')}
    ${map2CssVars(blue, 'blue')}
    ${map2CssVars(grey, 'grey')}
    ${map2CssVars(yellow, 'yellow')}
    ${map2CssVars(black, 'black')}
    ${map2CssVars(white, 'white')}
  }

  html {
    font-family: var(--font-family);
    font-weight: ${getCssVar('font', 'semi-bold')};
    color: ${getCssVar('grey', 100)};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-smooth: auto;
  }
`;

export default GlobalStyle;

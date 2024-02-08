/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/naming-convention */
import {
  BreakpointOverrides, createTheme 
} from '@mui/material/styles';
import { get } from 'lodash';
import { getCssVar } from '../../../styles/helpers';
import { getSizeUnit } from '../..';
import {
  Breakpoints, ITheme 
} from '../../types';
import {
  black,
  blue,
  BREAKPOINTS,
  FONT_FAMILY,
  green,
  grey,
  red,
} from '../constants';

const PALETTE = {
  primary: blue[500],
  secondary: grey[100],
  info: grey[900],
  success: green[500],
  error: red[300],
  text: {
    primary: grey[100],
    secondary: grey[500],
  },
};

const DARK_THEME = (theme: ITheme) => {
  const { fontFamily = FONT_FAMILY } = theme.typography || ({} as any);

  return createTheme({
    breakpoints: {
      step: 4,
      keys: Object.values(Breakpoints),
      values: BREAKPOINTS,
    } as BreakpointOverrides,
    palette: {
      mode: 'dark',
      primary: { main: PALETTE.primary, },
      secondary: {
        // Buttons
        main: PALETTE.secondary,
      },
      info: {
        // Buttons
        main: PALETTE.info,
      },
      success: { main: PALETTE.success, },
      error: {
        // Buttons
        main: PALETTE.error,
      },
      text: PALETTE.text,
      background: { default: black[100], },
      tonalOffset: 0.115,
    },
    typography: {
      button: {
        fontFamily,
        fontSize: getCssVar('font', 'common'),
        fontWeight: getCssVar('font', 'semi-bold'),
        lineHeight: getSizeUnit(18),
        textAlign: 'center',
        textTransform: 'none',
      },
      h1: {
        fontFamily,
        fontSize: getCssVar('font', 'h1'),
        fontWeight: getCssVar('font', 'semi-bold'),
        lineHeight: getSizeUnit(70),
      },
      h2: {
        fontFamily,
        fontSize: getCssVar('font', 'h2'),
        fontWeight: getCssVar('font', 'semi-bold'),
        lineHeight: getSizeUnit(36),
      },
      h3: {
        fontFamily,
        fontSize: getCssVar('font', 'h3'),
        fontWeight: getCssVar('font', 'semi-bold'),
        lineHeight: getSizeUnit(38),
      },
      h4: {
        fontFamily,
        fontSize: getCssVar('font', 'h4'),
        fontWeight: getCssVar('font', 'semi-bold'),
        lineHeight: getSizeUnit(30),
      },
      h5: {
        fontFamily,
        fontSize: getCssVar('font', 'h5'),
        fontWeight: getCssVar('font', 'semi-bold'),
        lineHeight: getSizeUnit(24),
      },
      h6: {
        fontFamily,
        fontSize: getCssVar('font', 'h6'),
        fontWeight: getCssVar('font', 'semi-bold'),
        lineHeight: getSizeUnit(22),
      },
      body1: {
        fontFamily,
        color: grey[100],
        fontSize: getCssVar('font', 'common'),
        lineHeight: getSizeUnit(18),
      },
      body2: {
        fontFamily,
        color: grey[100],
        fontSize: getCssVar('font', 'large'),
        fontWeight: getCssVar('font', 'semi-bold'),
        lineHeight: getSizeUnit(22),
      },
      caption: {
        fontFamily,
        fontSize: getCssVar('font', 'small'),
        lineHeight: getSizeUnit(14),
        color: grey[500],
        letterSpacing: '0.2px',
      },
    },
    components: {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      MuiListItem: { styleOverrides: { root: { width: 'auto', }, }, },
      MuiButton: {
        styleOverrides: {
          sizeLarge: {
            height: getSizeUnit(48),
            padding: '0 1.6rem',
            borderRadius: '.6rem',
            fontSize: getCssVar('font', 'large'),
            fontWeight: getCssVar('font', 'semi-bold'),
            lineHeight: getSizeUnit(20),
            letterSpacing: '0.1px',
          },
          sizeMedium: {
            height: getSizeUnit(38),
            padding: '0 1.6rem',
            fontSize: getCssVar('font', 'common'),
            fontWeight: getCssVar('font', 'semi-bold'),
          },
          sizeSmall: {
            height: getSizeUnit(32),
            padding: '0 1.2rem',
            fontSize: getCssVar('font', 'common'),
            fontWeight: getCssVar('font', 'semi-bold'),
            lineHeight: getSizeUnit(18),
          },
          containedPrimary: {
            background: getCssVar('yellow', 600),
            color: getCssVar('grey', 100),
            '&:hover': { background: getCssVar('yellow', 700), },
            '&:active': { background: getCssVar('yellow', 900), },
          },
          containedSecondary: {
            background: getCssVar('grey', 900),
            color: getCssVar('grey', 100),
            '&:hover': { background: getCssVar('grey', 950), },
            '&:active': { background: getCssVar('grey', 975), },
          },
          textPrimary: {
            color: getCssVar('blue', 300),
            '&:hover': {
              background: 'transparent',
              color: getCssVar('blue', 400),
            },
            '&:active': {
              background: 'transparent',
              color: getCssVar('blue', 500),
            },
          },
          textSecondary: {
            color: getCssVar('grey', 100),
            '&:hover': { background: getCssVar('grey', 950), },
            '&:active': { background: getCssVar('grey', 975), },
          },
          textError: {
            background: getCssVar('grey', 900),
            color: getCssVar('red', 300),
            '&:hover': {
              background: getCssVar('grey', 900),
              color: getCssVar('red', 400),
            },
            '&:active': {
              background: getCssVar('grey', 975),
              color: getCssVar('red', 400),
            },
          },
        },
      },
      MuiLink: {
        styleOverrides: {
          root: ({ color = 'primary' }) => {
            // Control hover state
            const linkState = color === 'primary' && ({
              color: getCssVar('blue', 300),
              '&:hover': { color: getCssVar('blue', 500), },
              '&:active': { color: getCssVar('blue', 700), },
            }) || {};

            return {
              fontSize: getCssVar('font', 'common'),
              fontWeight: getCssVar('font', 'semi-bold'),
              textDecoration: 'none',
              transition: 'all .27s',
              cursor: 'pointer',
              ...linkState
            };
          },
        },
      },
      MuiSlider: {
        styleOverrides: {
          thumbSizeSmall: {
            width: 'auto',
            height: 'inherit',
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: () => ({
            fontFamily,
            fontWeight: getCssVar('font', 'semi-bold'),
          }),
        },
      },
      MuiTooltip: { styleOverrides: { tooltip: { fontSize: getCssVar('font', 'common'), }, }, },
    },
  });
};

export default DARK_THEME;

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/naming-convention */
import {
  BreakpointOverrides, createTheme 
} from '@mui/material/styles';
import { getCssVar } from '../../../styles/helpers';
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
import { getSizeUnit } from '../helpers';

const PALETTE = {
  primary: blue[500],
  secondary: grey[500],
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
      mode: 'light',
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
        color: black[100],
        fontSize: getCssVar('font', 'common'),
        lineHeight: getSizeUnit(18),
      },
      body2: {
        fontFamily,
        color: black[100],
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
          root: {
            borderRadius: 16,
            boxShadow: '0 0 0 0 transparent',
          },
          sizeLarge: {
            height: getSizeUnit(48),
            padding: '0 1.6rem',
            borderRadius: 24,
            fontSize: getCssVar('font', 'large'),
            fontWeight: getCssVar('font', 'semi-bold'),
            lineHeight: getSizeUnit(20),
            letterSpacing: '0.1px',
          },
          sizeMedium: {
            height: getSizeUnit(38),
            padding: '0 1.6rem',
            borderRadius: 16,
            fontSize: getCssVar('font', 'common'),
            fontWeight: getCssVar('font', 'semi-bold'),
          },
          sizeSmall: {
            height: getSizeUnit(32),
            padding: '0 1.2rem',
            borderRadius: 12,
            fontSize: getCssVar('font', 'common'),
            fontWeight: getCssVar('font', 'semi-bold'),
            lineHeight: getSizeUnit(18),
          },
          containedPrimary: {
            background: getCssVar('yellow', 600),
            color: getCssVar('white', 100),
            '&:hover': { background: getCssVar('yellow', 700), },
            '&:active': { background: getCssVar('yellow', 900), },
          },
          containedSecondary: {
            background: getCssVar('grey', 200),
            color: getCssVar('grey', 900),
            '&:hover': { background: getCssVar('grey', 300), },
            '&:active': { background: getCssVar('grey', 400), },
          },
          textPrimary: {
            color: getCssVar('blue', 500),
            '&:hover': {
              background: 'transparent',
              color: getCssVar('blue', 600),
            },
            '&:active': {
              background: 'transparent',
              color: getCssVar('blue', 700),
            },
          },
          textSecondary: {
            color: getCssVar('grey', 500),
            '&:hover': { color: getCssVar('grey', 600), },
            '&:active': { color: getCssVar('grey', 700), },
          },
          textError: {
            background: getCssVar('grey', 300),
            color: getCssVar('red', 500),
            '&:hover': {
              background: getCssVar('grey', 300),
              color: getCssVar('red', 600),
            },
            '&:active': {
              background: getCssVar('grey', 400),
              color: getCssVar('red', 700),
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
            borderRadius: 4,
            outline: 0,

            '&::placeholder': {
              color: `${getCssVar('black', 100)} !important`,
            }
          }),
        },
      },
      MuiTooltip: { styleOverrides: { tooltip: { fontSize: getCssVar('font', 'common'), }, }, },
      MuiCard: {
        styleOverrides: {
          root: () => ({
            margin: 0,
            padding: getSizeUnit(16),
            background: getCssVar('grey', 50),
            border: `1px solid ${getCssVar('grey', 100)}`,
            borderRadius: 24,
            boxShadow: `3px 2px 9px 1px ${getCssVar('grey', 100)}`,
            overflow: 'visible',
          }),
        },
      },
    },
  });
};

export default DARK_THEME;

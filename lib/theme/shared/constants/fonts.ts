import { Fonts } from '../../types';
import { getSizeUnit } from '../helpers';

export const FONT_FAMILY = 'Montserrat, sans-serif';

const FONTS: Record<Fonts, number | string> = {
  common: getSizeUnit(14),
  small: getSizeUnit(12),
  medium: getSizeUnit(14),
  large: getSizeUnit(16),
  h1: getSizeUnit(60),
  h2: getSizeUnit(32),
  h3: getSizeUnit(28),
  h4: getSizeUnit(24),
  h5: getSizeUnit(20),
  h6: getSizeUnit(18),
  lineHeight: 1.215,
  regular: 400,
  semiBold: 600,
  bold: 900,
};

export default FONTS;

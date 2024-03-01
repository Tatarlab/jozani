import { Unit } from '../types';

export const getSizeUnit = (
  size: number | string, unit: typeof Unit[keyof typeof Unit] = Unit.RootElement,
) => {
  if (typeof size === 'string') {
    return size;
  }

  switch (unit) {
  case 'px':
    return `${size}px`;
  case '%':
    return `${size}%`;
  case 'em':
    return `${+size / 10}em`;
  case 'rem':
  default:
    return `${+size / 10}rem`;
  }
};

export const getBrandingGradient = (stage: boolean | number = 0) => {
  if (!stage) {
    return 'none';
  }

  switch (stage) {
    case 2:
      return 'linear-gradient(333deg, #ffc107, #ff2222) !important';
    case 2:
      return 'linear-gradient(333deg, #ff2222, #8c18a0) !important';
    case 4:
      return 'linear-gradient(333deg, #8c18a0, #03a9f4) !important';
    case 1:
    default:
      return 'linear-gradient(333deg, #ffc107, #ff2222, #8c18a0, #03a9f4) !important';
  }
};

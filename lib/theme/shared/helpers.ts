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

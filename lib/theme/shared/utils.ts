/* eslint-disable no-bitwise */
export const hexToRgb = (
  hex: string,
  alpha = 1,
  isRgbOnly = false,
) => {
  const channels = parseInt(hex.slice(1, 7), 16);
  // tslint:disable: no-bitwise
  const r = (channels >> 16) & 255;
  const g = (channels >> 8) & 255;
  const b = channels & 255;

  const type = isRgbOnly
    ? 'rgb'
    : 'rgba';
  const rgb = [
    r,
    g,
    b,
  ];

  if (!isRgbOnly) {
    rgb.push(alpha);
  }

  return `${type}(${rgb.join(',')})`;
};

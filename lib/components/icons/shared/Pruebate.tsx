import React from 'react';
import { IIconProps } from '../types';

const Pruebate: React.FC<IIconProps> = ({
  width = 32,
  height = 32,
  fill = "currentColor",
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M439.905,419.953 C435.52,421.203 434.717,424.748 435,427 C431.872,423.322 432,419.093 432,413 C421.968,416.783 424.301,427.688 424,431 C421.477,428.935 421,424 421,424 C418.336,425.371 417,429.031 417,432 C417,439.18 422.82,445 430,445 C437.18,445 443,439.18 443,432 C443,427.733 439.867,425.765 439.905,419.953"
      fillRule="evenodd"
      fill={fill}
    />
  </svg>
);

export default React.memo(Pruebate);

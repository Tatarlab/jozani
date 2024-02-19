import React from 'react';
import { IIconProps } from '../types';
import { getCssVar } from '../../../styles';

const Plus: React.FC<IIconProps> = ({
  width = 14,
  height = 14,
  fill = "currentColor",
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.999965 5.99994C0.44768 5.99994 -3.54904e-05 6.44766 -3.54535e-05 6.99994C-3.54798e-05 7.55223 0.44768 7.99994 0.999965 7.99994L5.99991 7.99994L5.99991 13C5.99991 13.5523 6.44762 14 6.99991 14C7.55219 14 7.99991 13.5523 7.99991 13L7.99991 7.99994H13C13.5522 7.99994 14 7.55223 14 6.99994C14 6.44766 13.5522 5.99994 13 5.99994H7.99991L7.99991 1C7.99991 0.447717 7.55219 1.16683e-06 6.99991 8.92876e-07C6.44762 6.13653e-07 5.99991 0.447716 5.99991 1L5.99991 5.99994L0.999965 5.99994Z"
      fill={fill}
    />
  </svg>
);

export default React.memo(Plus);

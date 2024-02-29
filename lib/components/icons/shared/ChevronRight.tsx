import React from 'react';
import { IIconProps } from '../types';

const ChevronRight: React.FC<IIconProps> = ({
  width = 8,
  height = 14,
  fill = "currentColor",
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 8 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M6.22358 7.0001L0.817824 12.4059C0.573746 12.6499 0.573746 13.0457 0.817824 13.2897V13.2897C1.0619 13.5338 1.45763 13.5338 1.70171 13.2897L7.49638 7.49508C7.76974 7.22171 7.76974 6.7785 7.49638 6.50513L1.70171 0.710459C1.45763 0.466382 1.0619 0.466382 0.817823 0.710459V0.710459C0.573745 0.954537 0.573745 1.35027 0.817823 1.59434L6.22358 7.0001Z"
      fill={fill} />
  </svg>
);

export default React.memo(ChevronRight);

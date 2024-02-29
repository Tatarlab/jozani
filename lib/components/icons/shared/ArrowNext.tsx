import React from 'react';
import { IIconProps } from '../types';

const ArrowNext: React.FC<IIconProps> = ({
  width = 15,
  height = 13,
  fill = "currentColor",
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 15 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g transform="matrix(1,0,0,1,0,0)">
      <path
        d="M7.5426 12.1482C7.4126 12.2882 7.2426 12.3582 7.0626 12.3582C6.9026 12.3582 6.7526 12.3082 6.6226 12.1882L0.582597 6.69817C0.272598 6.41817 0.272598 5.93817 0.582597 5.65817L6.6226 0.168174C6.8926 -0.0718255 7.3026 -0.0518256 7.5426 0.208174C7.7826 0.478174 7.7726 0.888175 7.5026 1.12817L2.66695 5.52817H13.5626C13.9216 5.52817 14.2126 5.81919 14.2126 6.17817C14.2126 6.53716 13.9216 6.82817 13.5626 6.82817H2.66695L7.5026 11.2282C7.7626 11.4682 7.7826 11.8782 7.5426 12.1482Z"
        transform="matrix(-1 1.22465e-16 -1.22465e-16 -1 14.5627 12.3582)"
        fill={fill}
      />
    </g>
  </svg>
);

export default React.memo(ArrowNext);

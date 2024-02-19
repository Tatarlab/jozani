import React from 'react';
import { IIconProps } from '../types';

const Cross: React.FC<IIconProps> = ({
  width = 24,
  height = 24,
  fill = "currentColor",
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.39903 20.2651C3.12566 19.9918 3.12566 19.5485 3.39903 19.2752L19.2751 3.39915C19.5485 3.12578 19.9917 3.12578 20.265 3.39915L20.6009 3.73503C20.8743 4.00839 20.8743 4.45161 20.6009 4.72498L4.72485 20.601C4.45148 20.8744 4.00827 20.8744 3.7349 20.601L3.39903 20.2651Z"
      fill={fill}
    />

    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.73494 3.39912C4.00831 3.12575 4.45152 3.12575 4.72489 3.39912L20.6009 19.2752C20.8743 19.5485 20.8743 19.9918 20.6009 20.2651L20.265 20.601C19.9917 20.8744 19.5485 20.8744 19.2751 20.601L3.39906 4.72494C3.1257 4.45158 3.1257 4.00836 3.39906 3.73499L3.73494 3.39912Z"
      fill={fill}
    />
  </svg>
);

export default React.memo(Cross);

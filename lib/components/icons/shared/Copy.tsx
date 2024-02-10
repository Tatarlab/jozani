import React from 'react';
import { IIconProps } from '../types';
import { getCssVar } from '../../../styles';

const Copy: React.FC<IIconProps> = ({
  width = 16,
  height = 18,
  fill = "currentColor",
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M13.925 0.75C14.7534 0.75 15.425 1.42157 15.425 2.25L15.425 10.8C15.425 11.6284 14.7534 12.3 13.925 12.3H12.125V7.35C12.125 5.52746 10.6475 4.05 8.82501 4.05H5.52501V2.25C5.52501 1.42157 6.19658 0.75 7.02501 0.75H13.925Z" fill={fill} />

    <path d="M2.22501 5.7C1.31374 5.7 0.575012 6.43873 0.575012 7.35V15.6C0.575012 16.5113 1.31374 17.25 2.22501 17.25H8.82501C9.73628 17.25 10.475 16.5113 10.475 15.6L10.475 7.35C10.475 6.49568 9.82574 5.79302 8.99371 5.70852C8.93824 5.70289 8.88196 5.7 8.82501 5.7L2.22501 5.7Z" fill={fill} />
  </svg>
);

export default Copy;

import React from 'react';
import { ISkeletonProps } from './types';
import { StyledSkeleton } from './shared';

const Skeleton: React.FC<ISkeletonProps> = (props) => (
  <StyledSkeleton {...props} />
);

export default Skeleton;

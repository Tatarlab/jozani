import React from 'react';
import { StyledTypography } from './shared';
import { ITypographyProps } from './types';
import Skeleton from '../skeleton';

const Typography: React.FC<ITypographyProps> = ({
  isLoading = false,
  ...props
}) => isLoading
  ? (
    <Skeleton
      width={240}
      variant="text"
    />
  )
  : (
    <StyledTypography
      {...props}
    />
  );

export default Typography;

export * from './types';

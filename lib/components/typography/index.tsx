import React from 'react';
import { StyledTypography } from './shared';
import { ITypographyProps } from './types';

const Typography: React.FC<ITypographyProps> = (props) => (
  <StyledTypography
    {...props}
  />
);

export default Typography;

export * from './types';

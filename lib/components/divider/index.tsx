import React from 'react';
import { StyledDivider } from './shared';
import { IDividerProps } from './types';

const Divider: React.FC<IDividerProps> = (props) => (
  <StyledDivider {...props} />
);

export default Divider;

import React from 'react';
import { StyledButton } from './shared';
import { IButtonProps } from './types';

export const Button: React.FC<IButtonProps> = (props) => (
  <StyledButton disableRipple {...props} />
)
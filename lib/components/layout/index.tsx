import React from 'react';
import { ILayoutProps } from './types';
import { StyledLayout } from './shared';

export const Layout: React.FC<ILayoutProps> = ({ children }) => (
  <StyledLayout>
    {children}
  </StyledLayout>
);
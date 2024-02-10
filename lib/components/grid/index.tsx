import React from 'react';
import { StyledGrid } from './shared';
import { IGridProps } from './types';

const Grid: React.FC<IGridProps> = ({ children, style }) => (
  <StyledGrid style={style}>
    {children}
  </StyledGrid>
);

export default Grid;

export * from './shared';
export * from './types';

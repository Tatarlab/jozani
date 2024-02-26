import React from 'react';
import { StyledGrid } from './shared';
import { IGridProps } from './types';

const Grid: React.FC<IGridProps> = ({
  outgap = 16, children, style,
}) => (
  <div style={{
    padding: outgap,
  }}>
    <StyledGrid style={style}>
      {children}
    </StyledGrid>
  </div>
);

export default Grid;

export * from './shared';
export * from './types';

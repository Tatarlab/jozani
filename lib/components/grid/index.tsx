import React from 'react';
import { StyledGrid } from './shared';
import { IGridProps } from './types';

const Grid: React.FC<IGridProps> = ({
  outgap = 16, children, style,
}) => (
  <div style={{
    padding: Array.isArray(outgap)
      ? `${outgap[0]}px ${outgap[1]}px`
      : outgap,
    ...style,
  }}>
    <StyledGrid>
      {children}
    </StyledGrid>
  </div>
);

export default Grid;

export * from './shared';
export * from './types';

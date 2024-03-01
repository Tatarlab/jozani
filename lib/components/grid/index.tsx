import React from 'react';
import { GridContainer, GridWrapper, StyledGrid } from './shared';
import { IGridProps } from './types';

const Grid: React.FC<IGridProps> = ({
  isAdaptive = false,
  outgap = 16,
  children,
  style,
  backgroundStyle = 'transparent',
}) => (
  <GridWrapper
    isAdaptive={isAdaptive}
    outgap={outgap}
    style={style}
    backgroundStyle={backgroundStyle}
  >
    <StyledGrid>
      <GridContainer
        isAdaptive={isAdaptive}
        outgap={outgap}
      >
        {children}
      </GridContainer>
    </StyledGrid>
  </GridWrapper>
);

export default Grid;

export * from './shared';
export * from './types';

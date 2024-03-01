import styled from 'styled-components';
import { BREAKPOINTS } from '../../../theme';
import { IGridProps } from '../types';

export const helperGridOutgap = (outgap: number | number[]) => (Array.isArray(outgap)
  ? outgap.map(o => `${o}px`).join(' ')
  : `${outgap}px`);

export const GridWrapper: React.FC<IGridProps> = styled.section`
  padding: ${({ isAdaptive = false, outgap = 16 }) => (isAdaptive
    ? 0
    : helperGridOutgap(outgap))};
  background: ${({ backgroundStyle = '' }) => backgroundStyle || 'c'};
`;

export const StyledGrid = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
`;

export const GridContainer: React.FC<IGridProps> = styled.div`
  margin: 0;
  padding: ${({ isAdaptive = false, outgap = 16 }) => (isAdaptive
    ? helperGridOutgap(outgap)
    : 0)};

  @media (min-width: ${BREAKPOINTS.tablet}px) {
    margin: ${({ isAdaptive = false }) => (isAdaptive
      ? '0 auto'
      : 0)};
    min-width: ${({ isAdaptive = false }) => (isAdaptive
      ? `${BREAKPOINTS.tablet}px`
      : 'auto')};
    max-width: ${({ isAdaptive = false }) => (isAdaptive
      ? '1000px'
      : 'auto')};
    width: ${({ isAdaptive = false }) => (isAdaptive
      ? '80%'
      : 'auto')};
  }
`;

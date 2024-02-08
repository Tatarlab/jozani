import { Card as MuiCard } from '@mui/material';
import styled from 'styled-components';
import { getCssVar } from '../../../styles';
import { BREAKPOINTS } from '../../../theme';
import { ICardProps } from '../types';

export const StyledCard = styled(MuiCard)`
  display: flex;
  flex: ${({ isFullHeight = false }: ICardProps) => (isFullHeight ? '1 0 100%' : 1)};
  flex-direction: column;
  padding: 1.6rem;
  margin: 1.6rem 0;
  width: ${({ isFullWidth = false }: ICardProps) => (isFullWidth ? '100%' : 'auto')};
  height: ${({ isFullHeight = false }: ICardProps) => (isFullHeight ? '100%' : 'auto')};
  background: ${getCssVar('white', 90)};
  border: 0 solid ${getCssVar('grey', 900)};
  border-radius: 2.4rem;
  color: ${getCssVar('black', 100)};
  box-shadow: 3px 2px 9px 1px ${getCssVar('grey', 50)};
  overflow: visible;
`;

export const CardTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2.4rem;
  font-size: ${getCssVar('font', 'h5')};
  font-weight: ${getCssVar('font', 'bold')};

  @media screen and (max-width: ${BREAKPOINTS.mobile}px) {
    padding: 1.6rem 1.6rem;

    .ml-auto > button {
      padding: 0 0.5rem;
      width: 120px;
    }
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex: 1;
  padding: 3.2rem 4rem;
  justify-content: inherit;

  @media screen and (max-width: ${BREAKPOINTS.xs}px) {
    padding: 1.6rem;
    max-width: 100%;
  }

  @media screen and (max-width: ${BREAKPOINTS.mobile - 40}px) {
    flex-direction: column;
  }
`;
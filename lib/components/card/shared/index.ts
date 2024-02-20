import { Card as MuiCard } from '@mui/material';
import styled from 'styled-components';
import { getCssVar } from '../../../styles';
import { BREAKPOINTS } from '../../../theme';
import { ICardProps } from '../types';

export const StyledCard: React.FC<ICardProps> = styled(MuiCard)`
  position: relative;
  display: flex;
  flex: ${({ isFullHeight = false }: ICardProps) => (isFullHeight ? '1 0 100%' : 1)};
  flex-direction: column;
  padding: 1.6rem;
  margin: 1.6rem 0;
  width: ${({ isFullWidth = false }: ICardProps) => (isFullWidth ? '100%' : 'auto')};
  height: ${({ isFullHeight = false }: ICardProps) => (isFullHeight ? '100%' : 'auto')};

  &:before {
    content: '';
    display: ${({ isBranding = false }: ICardProps) => (isBranding
      ? 'block'
      : 'none')};
    position: absolute;
    pointer-events: none;
    background-image: linear-gradient(333deg, #ffc107, #ff2222, #8c18a0, #03a9f4);
    mask-image: linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px), linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px);
    -webkit-mask-position-x: 0%, 0%;
    -webkit-mask-position-y: 0%, 0%;
    mask-size: auto, auto;
    mask-repeat: repeat, repeat;
    mask-origin: content-box, border-box;
    mask-clip: content-box, border-box;
    mask-mode: match-source, match-source;
    mask-composite: exclude;
    animation-timeline: auto;
    animation-range-start: normal;
    animation-range-end: normal;
    inset: 0px;
    border-radius: 20px;
    padding: 2px;
    animation: 3s linear 0s infinite normal none running rotate;
  }

  @keyframes rotate {
    100% {
      filter: hue-rotate(-360deg);
    }
  }
`;

export const CardTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: ${getCssVar('font', 'h5')};
  font-weight: ${getCssVar('font', 'semi-bold')};

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
  padding: 1.6rem 0;
  justify-content: inherit;

  @media screen and (max-width: ${BREAKPOINTS.xs}px) {
    max-width: 100%;
  }

  @media screen and (max-width: ${BREAKPOINTS.mobile - 40}px) {
    flex-direction: column;
  }
`;
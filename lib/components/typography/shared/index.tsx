import { Typography as MuiTypography } from '@mui/material';
import styled from 'styled-components';
import { ITypographyProps } from '../types';
import { BREAKPOINTS } from '../../../theme';

export const StyledTypography = styled(MuiTypography)`
  line-height: .95;

  ${({ isBranding = false }: ITypographyProps) => (isBranding && `
    background-image: linear-gradient(333deg, #ffc107, #ff2222, #8c18a0, #03a9f4);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: 'text';
    overflow: 'visible';
  `)}

  @media (min-width: ${BREAKPOINTS.tablet}px) {
    line-height: 1.1;
  }
`;

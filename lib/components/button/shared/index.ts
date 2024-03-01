import styled from 'styled-components';
import { Button as MuiButton } from '@mui/material';
import { IButtonProps } from '../types';
import { getBrandingGradient } from '../../../theme';

export const StyledButton = styled(MuiButton)`
  min-width: auto;
  max-width: none;
  background-image: ${({ isBranding = false }: IButtonProps) => getBrandingGradient(isBranding)};
`;

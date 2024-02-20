import styled from 'styled-components';
import { Button as MuiButton } from '@mui/material';
import { IButtonProps } from '../types';

export const StyledButton = styled(MuiButton)`
  min-width: auto;
  max-width: none;
  background-image: ${({ isBranding = false }: IButtonProps) => (isBranding
    ? 'linear-gradient(333deg, #ffc107, #ff2222, #8c18a0, #03a9f4) !important'
    : 'none')};
`;

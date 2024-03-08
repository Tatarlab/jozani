import {
  ButtonProps
} from '@mui/material';

export interface IButtonProps extends ButtonProps {
  isBranding?: boolean | number;
  target?: '_blank';
};
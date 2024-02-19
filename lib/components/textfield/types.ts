import { StandardTextFieldProps } from '@mui/material';

export interface ITextFieldProps
  extends Omit<
    StandardTextFieldProps,
    'value' | 'size'
  > {
  isError?: boolean;
  isContrast?: boolean;
  isDisabled?: boolean;
  isFullWidth?: boolean;
  isMultiline?: boolean;
  isDynamicMultiline?: boolean;
  readOnly?: boolean;
  value: string;
  errorText?: string;
  size?: 'small' | 'medium' | 'large';
}

export enum KeyboardCodes {
  Enter = 'Enter',
  Space = 'Space',
}

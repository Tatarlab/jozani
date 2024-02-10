import { StandardTextFieldProps } from '@mui/material';

export interface ITextFieldProps
  extends Omit<
    StandardTextFieldProps,
    'disabled' | 'multiline' | 'value' | 'error'
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
}

export enum KeyboardCodes {
  Enter = 'Enter',
  Space = 'Space',
}

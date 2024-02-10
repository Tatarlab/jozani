import { TextField as MuiTextField, TextFieldProps } from '@mui/material';
import styled from 'styled-components';
import { ITextFieldProps } from '../types';
import { getCssVar } from '../../../styles';

export const StyledTextField = styled(MuiTextField)`
  width: ${({ isFullWidth = false }: ITextFieldProps) => (isFullWidth
    ? '100%'
    : 'auto')};
  border: 0 solid transparent;
  border-radius: .4rem;
  outline: 0;

  & > div {
    padding: .8rem 1.2rem;
    background: ${getCssVar('white', 80)};
    border: 1px solid ${({ error }: TextFieldProps) => (error
      ? getCssVar('red', 500)
      : getCssVar('grey', 200))};
    border-radius: .8rem;
    font-size: ${getCssVar('font', 'large')};
  }

  &.contrast > div, & > div[class*=focused] {
    background: ${getCssVar('white', 100)};
    border: 1px solid ${({ error }: TextFieldProps) => (error
      ? getCssVar('red', 500)
      : getCssVar('grey', 200))};
  }

  input {
    padding: 0;
    height: 3.4rem;
    font-weight: ${getCssVar('font', 'semi-bold')};
    color: ${getCssVar('grey', 900)};

    &::placeholder {
      opacity: 1;
    }
  }

  fieldset {
    border: 0 solid transparent !important;
  }

  label {
    position: relative;
    margin-bottom: .8rem;
    font-size: ${getCssVar('font', 'small')};
    font-weight: ${getCssVar('font', 'regular')};
    color: ${getCssVar('grey', 500)};
    line-height: 1;
    overflow: initial;
    transform: scale(1);
    transition: none;

    &[class*=focused] {
      color: ${getCssVar('grey', 500)};
    }

    &[class*=error] {
      color: ${getCssVar('red', 500)};
    }

    & > span {
      display: none;
    }
  }

  & > p {
    margin: 4px 0 0;

    &[class*=error] {
      font-weight: 600;
      color: ${getCssVar('red', 500)};
    }
  }
`;

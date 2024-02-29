import { TextField as MuiTextField } from '@mui/material';
import styled from 'styled-components';
import { ITextFieldProps } from '../types';
import { getCssVar } from '../../../styles';

export const StyledTextField: React.FC<ITextFieldProps> = styled(MuiTextField)`
  width: ${({ isFullWidth = false }: ITextFieldProps) => (isFullWidth
    ? '100%'
    : 'auto')};
  border: 0 solid transparent;

  & > div {
    padding: .8rem 1.2rem;
    background: ${getCssVar('white', 80)};
    border: 1px solid ${({ error }) => (error
      ? getCssVar('red', 500)
      : getCssVar('grey', 200))};
    border-width: ${({ isBranding = false }) => (isBranding
      ? 0
      : 1)};
    border-radius: .8rem;
    font-size: ${getCssVar('font', 'large')};

    &:before {
      content: '';
      display: ${({ isBranding = false }: ITextFieldProps) => (isBranding
        ? 'block'
        : 'none')};
      position: absolute;
      pointer-events: none;
      background-image: ${({ error = false }) => (error
        ? 'linear-gradient(0deg, #ff2222, #ff2222)'
        : 'linear-gradient(333deg, #ffc107, #ff2222, #8c18a0, #03a9f4)')};
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
      animation: ${({ error = false }) => (error
        ? 'none'
        : '3s linear 0s infinite normal none running hue-rotate')};
    }
  }

  &.contrast > div, & > div[class*=focused] {
    background: ${getCssVar('white', 100)};
    /* border: 1px solid ${({ error }) => (error
      ? getCssVar('red', 500)
      : getCssVar('grey', 200))}; */
  }

  input {
    padding: 0;
    height: ${({ size = 'medium' }: ITextFieldProps) => {
      switch (size) {
        case 'small':
          return '1.4rem';
        case 'large':
          return '3rem';
        case 'medium':
        default:
          return '2rem';
      }
    }};
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

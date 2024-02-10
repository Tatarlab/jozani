import styled from 'styled-components';
import { getCssVar } from '../../../styles';

export const StyledHeader = styled.header`
  display: flex;
  position: fixed;
  padding: 0 1.6rem;
  width: 100%;
  height: 70px;
  align-items: center;
  box-sizing: border-box;
`;

export const StyledLogo = styled.a`
  font-family: 'Comfortaa', sans-serif;
  font-size: 3.6rem;
  font-weight: 400;
  letter-spacing: -2.21px;
  color: ${getCssVar('grey', 900)};
  text-decoration: none;
`;
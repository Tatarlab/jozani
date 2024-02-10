import React from 'react';
import { StyledHeader, StyledLogo } from './shared';
import { Button } from '../button';

export const Header: React.FC = () => (
  <StyledHeader>
    <StyledLogo href="/">
      pruebate
    </StyledLogo>

    <Button variant="contained" style={{ marginLeft: 'auto' }}>
      Start Challenge
    </Button>
  </StyledHeader>
);

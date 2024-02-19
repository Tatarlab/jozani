import React from 'react';
import { StyledHeader, StyledLogo } from './shared';
import { Button } from '../button';
import { useRouter } from 'next/router';

export const Header: React.FC = () => {
  const router = useRouter();

  const isStartButtonVisible = !(/challenge/i.test(router.asPath) && router.query?.slug === 'new');

  return (
    <StyledHeader>
      <StyledLogo href="/">
        pruebate
      </StyledLogo>
  
      {isStartButtonVisible && (
        <Button
          href="/challenge/new"
          variant="contained"
          style={{ marginLeft: 'auto' }}
        >
          Start Challenge
        </Button>
      )}
    </StyledHeader>
  );
};

import React from 'react';
import { StyledHeader, StyledLogo } from './shared';
import { Button } from '../button';
import { useRouter } from 'next/router';
import Typography from '../typography';

export const Header: React.FC = () => {
  const router = useRouter();

  const isChallengeRoute = /challenge/i.test(router.asPath);
  const isStartButtonVisible = !(isChallengeRoute && router.query?.slug === 'new');

  return (
    <StyledHeader>
      <StyledLogo href="/">
        pruebate
      </StyledLogo>

      {isChallengeRoute && (
        <Typography
          variant="body2"
          textAlign="center"
          fontWeight={500}
          style={{ marginLeft: 'auto' }}
        >
          Challenge
        </Typography>
      )}
  
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

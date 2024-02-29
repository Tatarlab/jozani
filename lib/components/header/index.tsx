import React from 'react';
import { StyledHeader, StyledLogo } from './shared';
import { Button } from '../button';
import { useRouter } from 'next/router';
import Typography from '../typography';
import { IconArrowNext, IconChevronRight, IconPlus, LogoPruebate } from '../icons';

export const Header: React.FC = () => {
  const router = useRouter();

  const isChallengeRoute = /challenge/i.test(router.asPath);
  const isStartButtonVisible = !(isChallengeRoute && router.query?.slug === 'new');

  return (
    <StyledHeader>
      <StyledLogo href="/">
        <img
          width={36}
          height={36}
          src="assets/pruebate.svg"
        />

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
          isBranding
          href="/challenge?slug=new"
          variant="contained"
          style={{ marginLeft: 'auto', alignItems: 'center' }}
        >
          Start Challenge

          <i style={{ marginLeft: '1rem', lineHeight: 0.8 }}>
            <IconPlus
              // width={12}
              height={18}
            />
          </i>
        </Button>
      )}
    </StyledHeader>
  );
};

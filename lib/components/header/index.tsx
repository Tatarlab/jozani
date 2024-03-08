import React from 'react';
import { StyledHeader, StyledLogo } from './shared';
import { Button } from '../button';
import { useRouter } from 'next/router';
import Typography from '../typography';
import { IconArrowNext, IconChevronRight, IconPlus, LogoPruebate } from '../icons';
import { useBlockchain } from '../../store/blockchain';
import { formatAmountCurrency } from '../../utils';

export const Header: React.FC = () => {
  const router = useRouter();

  const isNew = router.query?.slug === 'new';
  const isChallengeRoute = /challenge/i.test(router.asPath);
  const isStartButtonVisible = !(isChallengeRoute && isNew);

  const {
    currency: walletCurrency,
    walletLastAmount,
  } = useBlockchain();

  return (
    <StyledHeader>
      <StyledLogo href="/">
        <img
          width={36}
          height={36}
          src="assets/pruebate.svg"
        />

        pruebate

        <sub
          style={{
            margin: '2.1rem 0 0 -.7rem',
            padding: '2px 4px',
            background: '#ffc875',
            fontSize: '1.2rem',
            color: 'white',
            letterSpacing: '0px',
            border: '0 transparent solid',
            borderRadius: '50%',
            opacity: .65,
          }}
        >
          &#x3B1;
        </sub>
      </StyledLogo>

      {isChallengeRoute && isNew && (
        <Typography
          variant="body2"
          textAlign="center"
          fontWeight={500}
          style={{ marginLeft: 'auto' }}
        >
          {walletLastAmount
            ? `Reward: ${formatAmountCurrency(walletLastAmount, walletCurrency)}`
            : 'Challenge: Await'
          }
        </Typography>
      )}
  
      {isStartButtonVisible && (
        <Button
          isBranding
          href="/challenge?slug=new"
          variant="contained"
          style={{ marginLeft: 'auto', alignItems: 'center' }}
        >
          Open App

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

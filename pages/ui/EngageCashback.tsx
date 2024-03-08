import React from 'react';
import Typography from '../../lib/components/typography';
import { getCssVar } from '../../lib/styles';

const EngageCashback: React.FC = () => (
  <>
    <Typography
      variant="h2"
      textAlign="center"
      fontWeight="bold"
      style={{
        marginBottom: '3rem',
        color: getCssVar('white', 80),
      }}
    >
      Best way to engage funds
    </Typography>

    <Typography
      variant="h6"
      marginBottom={2}
      textAlign="center"
      style={{ color: getCssVar('white', 80), }}
    >
      Affiliate program
    </Typography>

    <Typography
      variant="h3"
      style={{
        lineHeight: 1.1,
        ['-webkit-text-fill-color' as string]: 'transparent',
        ['-webkit-background-clip' as string]: 'text',
        backgroundClip: 'text',
        backgroundImage: 'linear-gradient(270deg, rgba(255, 221, 221, 0.664) -11%, rgba(119, 175, 125, 0.85) 50%, rgba(89, 194, 99, 0.55) 100%)',
        letterSpacing: '-2px',
        overflow: 'visible'
      }}
    >
      <strong style={{ fontSize: '10rem' }}>3%</strong>

      <div>cashback</div>
    </Typography>

    <Typography marginTop={2} variant="h6" color={getCssVar('yellow', 600)}>
      For each friend’s completed challenge
    </Typography>
  </>
);

export default EngageCashback;

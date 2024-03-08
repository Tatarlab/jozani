import React from 'react';
import Link from 'next/link';
import Typography from '../../lib/components/typography';

const ChallengeWayMoney: React.FC = () => (
  <>
    <Typography
      variant="h1"
      fontWeight="bold"
      lineHeight={0.9}
      letterSpacing={-1.4}
      style={{
        backgroundImage: `linear-gradient(333deg, #ffc107, #ff2222, #8c18a0, #03a9f4)`,
        ['-webkit-text-fill-color' as string]: 'transparent',
        ['-webkit-background-clip' as string]: 'text',
        backgroundClip: 'text',
        textTransform: 'uppercase',
        letterSpacing: -4,
        overflow: 'visible',
      }}
    >
        Challenge the way you money
    </Typography>

    <div style={{ marginTop: '1.6rem' }} />

    <Typography
      variant="h6"
    >
      {`Connect people via `}
        
      <Link href={`/challenge?slug=new`} style={{ textDecoration: 'none' }}>
        challenge
      </Link>
    </Typography>
  </>
);

export default ChallengeWayMoney;

/* eslint-disable @typescript-eslint/naming-convention */
import React, { useState } from 'react';
import { Card } from '../lib/components/card';
import Typography from '../lib/components/typography';
import { getCssVar } from '../lib/styles';
import { Button } from '../lib/components/button';

const IndexPage: React.FC = () => {
  const [asd] = useState();

  return (
    <div>
      <Card
        style={{
          justifyContent: 'center',
          background: 'linear-gradient(106deg, #f09f6c, #ef6400);' 
        }}
      >
        <a
          href="/challenge?slug=new"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        />

        <img
          src="/assets/pay-challenge.png"
          style={{
            marginTop: '-15%',
            maxWidth: '100%',
            width: '80%'
          }}
        />

        <Typography variant="h3" fontWeight="bold" fontStyle="italic"
          color={getCssVar('white', 100)}>
          Challenge friend
        </Typography>
      </Card>

      <Card style={{ background: 'linear-gradient(106deg, #829cf3, #294dda);' }}>
        <a
          href="/find-challenge"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        />

        <img src="/assets/create-challenge.png" style={{
          marginLeft: 'auto',
          maxWidth: '100%',
          width: '80%',
        }} />

        <Typography variant="h3" fontWeight="bold" fontStyle="italic"
          color={getCssVar('white', 100)}>
          Find a challenge
        </Typography>
      </Card>

      <div
        style={{
          margin: '5rem -1.6rem 0',
          padding: '5rem 1.6rem',
          background: getCssVar('black', 100),
        }}
      >
        <Typography
          variant="h2"
          textAlign="center"
          fontWeight="bold"
          style={{
            marginBottom: '3rem',
            color: getCssVar('white', 80),
          }}
        >
          Best way to engage 
          {' '}

          <i>funds</i>
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
          For each friend
          {'\''}
          s completed challenge
        </Typography>
      </div>

      <div
        style={{
          margin: '0 -1.6rem',
          padding: '5rem 1.6rem',
        }}
      >
        <Typography
          variant="h2"
          textAlign="center"
          fontWeight="bold"
          style={{ marginBottom: '2rem', }}
        >
          No more risks
        </Typography>

        <Typography variant="h6" textAlign="center">
          Deposited funds are sent to friends or charities
        </Typography>
      </div>

      <div style={{ padding: '1.6rem 0' }}>
        <Button
          isBranding
          fullWidth
          variant="contained"
          size="large"
        >
          Challenge Friend Now
        </Button>
      </div>
    </div>
  );
};

export default IndexPage;
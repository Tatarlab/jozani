/* eslint-disable @typescript-eslint/naming-convention */
import React, { useState } from 'react';
import { Card } from '../lib/components/card';
import Typography from '../lib/components/typography';
import { getCssVar } from '../lib/styles';
import { Button } from '../lib/components/button';
import Grid from '../lib/components/grid';
import Row from '../lib/components/row';
import Col from '../lib/components/col';
import {
  IconArrowBack, IconArrowNext 
} from '../lib/components/icons';
import { getBrandingGradient } from '../lib/theme';

const IndexPage: React.FC = () => {
  const [asd] = useState();

  return (
    <div>
      <Grid isAdaptive outgap={[16, 0]}>
        <Typography
          variant="h1"
          fontWeight="bold"
          fontStyle="italic"
          lineHeight={0.9}
          letterSpacing={-1.4}
          style={{
            backgroundImage: `linear-gradient(333deg, #ffc107, #ff2222, #8c18a0, #03a9f4)`,
            ['-webkit-text-fill-color' as string]: 'transparent',
            ['-webkit-background-clip' as string]: 'text',
            backgroundClip: 'text',
            overflow: 'visible',
          }}
        >
          Unique challenge experience
        </Typography>

        <div style={{ marginTop: '1.6rem' }} />

        <Typography
          variant="h5"
          // fontWeight={500}
          fontStyle="italic"
        >
          Connect people via challenges
        </Typography>
      </Grid>

      <Grid
        isAdaptive
        outgap={0}
        style={{ margin: '1.6rem 0' }}
      >
        <Row spacing={2}>
          <Col>
            <Card
              sx={{
                padding: 3,
                justifyContent: 'center',
                background: getBrandingGradient(2),
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
                  marginTop: '-12.5%',
                  maxWidth: '100%',
                  width: '80%'
                }}
              />

              <Typography
                variant="h3"
                marginTop="auto"
                fontWeight="bold"
                color={getCssVar('white', 100)}
              >
                Best offer for everybody
              </Typography>

              <Button
                isBranding={4}
                fullWidth
                size="large"
                variant="contained"
                href={`/challenge?slug=new`}
                sx={{
                  marginTop: 2,
                  marginLeft: 'auto',
                }}
              >
                Challenge friend

                <i style={{
                  marginLeft: '1rem',
                  lineHeight: 0.5,
                }}>
                  <IconArrowNext
                    width={16}
                    height={16}
                  />
                </i>
              </Button>
            </Card>
          </Col>

          <Col>
            <Card
              sx={{
                padding: 3,
                background: getBrandingGradient(4), 
              }}
            >
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
                marginTop: '-20%',
                marginLeft: 'auto',
                maxWidth: '100%',
                width: '80%',
              }} />

              <Typography
                variant="h3"
                marginTop="auto"
                fontWeight="bold"
                color={getCssVar('white', 100)}
              >
                {`It's so simple`}
              </Typography>

              <Button
                isBranding={2}
                fullWidth
                variant="contained"
                size="large"
                href="/find-challenge"
                sx={{
                  marginTop: 2,
                  marginLeft: 'auto',
                }}
              >
                Find challenge

                <i style={{
                  marginLeft: '1rem',
                  lineHeight: 0.5,
                }}>
                  <IconArrowNext
                    width={16}
                    height={16}
                  />
                </i>
              </Button>
            </Card>
          </Col>
        </Row>
      </Grid>

      <Grid
        isAdaptive
        outgap={[50, 16]}
        style={{
          position: 'relative',
          margin: '0 -1.6rem',
        }}
        backgroundStyle="#15191d"
      >
        <div style={{
          position: 'absolute',
          background: getCssVar('black', 100),
        }} />

        <Typography
          variant="h2"
          textAlign="center"
          fontWeight="bold"
          style={{
            marginBottom: '3rem',
            color: getCssVar('white', 80),
          }}
        >
          {'Best way to engage  '}

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
      </Grid>

      <Grid
        isAdaptive
        outgap={[50, 16]}
        style={{ margin: '0 -1.6rem', }}
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
      </Grid>

      <Grid
        isAdaptive
        style={{ padding: '1.6rem 0' }}
      >
        <Button
          isBranding
          fullWidth
          variant="contained"
          size="large"
          href="/challenge?slug=new"
        >
          Start Challenge Now
        </Button>
      </Grid>
    </div>
  );
};

export default IndexPage;
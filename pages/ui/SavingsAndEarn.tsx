import React from 'react';
import Typography from '../../lib/components/typography';
import Row from '../../lib/components/row';
import Col from '../../lib/components/col';
import { Card } from '../../lib/components/card';
import { Button } from '../../lib/components/button';
import { IconArrowNext } from '../../lib/components/icons';
import { getCssVar } from '../../lib/styles';
import { getBrandingGradient } from '../../lib/theme';

const SavingsAndEarn: React.FC = () => (
  <>
    <Row spacing={2}>
      <Col mobile={12} tablet>
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
            Charity & Savings
          </Typography>

          <Typography
            variant="h6"
            marginTop={2}
            fontWeight={500}
            color={getCssVar('white', 100)}
          >
            Let your money make profit by friends or charities
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
            Try it out

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

      <Col mobile={12} tablet>
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
            Mine for funds
          </Typography>

          <Typography
            variant="h6"
            marginTop={2}
            fontWeight={500}
            color={getCssVar('white', 100)}
          >
            It is just easy as texting a friend
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
            Try it out

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
  </>
);

export default SavingsAndEarn;

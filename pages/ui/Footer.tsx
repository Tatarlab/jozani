import React from 'react';
import NextLink from 'next/link';
import Link from '../../lib/components/link';
import Typography from '../../lib/components/typography';
import Grid from '../../lib/components/grid';
import Row from '../../lib/components/row';
import Col from '../../lib/components/col';
import Divider from '../../lib/components/divider';
import { StyledLogo } from '../../lib/components/header/shared';
import { getCssVar } from '../../lib/styles';
import { Button } from '../../lib/components/button';
import { IconTelegram } from '../../lib/components/icons';

const Footer: React.FC = () => (
  <>
    <div style={{ display: 'flex' }}>
      <StyledLogo style={{ color: getCssVar('white', 100) }}>
        pruebate
      </StyledLogo>

      <Button
        color="secondary"
        href="https://t.me/jozani_bot"
        target="_blank"
        style={{
          padding: 0,
          marginLeft: 'auto' 
        }}
      >
        <IconTelegram />
      </Button>
    </div>

    <Typography
      variant="body1"
      color={getCssVar('grey', 500)}
    >
      DeFi subscription platform
    </Typography>

    <div style={{ marginTop: '1.6rem' }} />

    <Divider style={{ opacity: 0.15 }} />

    <Grid outgap={[16, 0]}>
      <Row spacing={2}>
        <Col mobile />

        <Col mobile="auto">
          <Link
            href="/faq"
            color="secondary"
            component={NextLink}
          >
            FAQ
          </Link>
        </Col>

        <Col mobile="auto">
          <Link
            href="/legal"
            color="secondary"
            component={NextLink}
          >
            Legal Info
          </Link>
        </Col>
      </Row>
    </Grid>
  </>
);

export default Footer;

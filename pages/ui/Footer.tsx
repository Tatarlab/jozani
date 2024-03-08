import React from 'react';
import { chunk } from 'lodash';
// import Link from 'next/link';
import { Link as MuiLink } from '@mui/material';
import Link from 'next/link';
import Typography from '../../lib/components/typography';
import Grid from '../../lib/components/grid';
import { Category } from '../../lib/components/icons/shared/categories/types';
import Row from '../../lib/components/row';
import Col from '../../lib/components/col';
import { Card } from '../../lib/components/card';
import Divider from '../../lib/components/divider';
import { StyledLogo } from '../../lib/components/header/shared';
import { getCssVar } from '../../lib/styles';
import { Button } from '../../lib/components/button';
import { IconTelegram } from '../../lib/components/icons';

const Footer: React.FC = () => (
  <>
    <StyledLogo style={{ color: getCssVar('white', 100) }}>
      pruebate

      <div style={{ marginLeft: 'auto' }}>
        <Button
          color="secondary"
          href="https://t.me/jozani_bot"
          target="_blank"
          style={{ padding: 0 }}
        >
          <IconTelegram />
        </Button>
      </div>
    </StyledLogo>

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
          <Link href="/faq">
            <MuiLink color="secondary">
              FAQ
            </MuiLink>
          </Link>
        </Col>

        <Col mobile="auto">
          <Link href="/legal">
            <MuiLink color="secondary">
              Legal Info
            </MuiLink>
          </Link>
        </Col>
      </Row>
    </Grid>
  </>
);

export default Footer;

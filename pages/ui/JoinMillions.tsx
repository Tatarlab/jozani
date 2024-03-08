import React from 'react';
import Typography from '../../lib/components/typography';
import Grid from '../../lib/components/grid';
import Row from '../../lib/components/row';
import Col from '../../lib/components/col';
import { Button } from '../../lib/components/button';

const JoinMillions: React.FC = () => (
  <Grid outgap={0}>
    <Row>
      <Col alignItems="center">

        <img
          src="/assets/map.svg"
          width="60%"
          height="auto"
        />

        <Typography
          variant="h2"
          marginTop={4}
          marginBottom={2}
          textAlign="center"
          fontWeight="bold"
          style={{ textTransform: 'uppercase', }}
        >
          Join the millions using pruebate
        </Typography>

        <Button
          fullWidth
          isBranding={4}
          size="large"
          variant="contained"
          href="/challenge?slug=new"
          style={{ maxWidth: 360 }}
        >
          Get Pruebate
        </Button>
      </Col>
    </Row>
  </Grid>
);

export default JoinMillions;

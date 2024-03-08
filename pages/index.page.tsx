/* eslint-disable @typescript-eslint/naming-convention */
import React, { useState } from 'react';
import { Button } from '../lib/components/button';
import Grid from '../lib/components/grid';
import ChallengeWayMoney from './ui/ChallengeWayMoney';
import SavingsAndEarn from './ui/SavingsAndEarn';
import EngageCashback from './ui/EngageCashback';
import NoRisks from './ui/NoRisks';
import JoinMillions from './ui/JoinMillions';
import Footer from './ui/Footer';

const IndexPage: React.FC = () => {
  const [asd] = useState();

  return (
    <div>
      <Grid isAdaptive outgap={[16, 0]}>
        <ChallengeWayMoney />
      </Grid>

      <Grid isAdaptive outgap={[16, 0]}>
        <SavingsAndEarn />
      </Grid>

      <Grid
        isAdaptive
        outgap={[50, 16, 0]}
        style={{ margin: '0 -1.6rem', }}
      >
        <NoRisks />
      </Grid>

      <Grid
        isAdaptive
      >
        <Button
          isBranding
          fullWidth
          variant="contained"
          size="large"
          href="/challenge?slug=new"
          style={{
            display: 'flex',
            margin: '0 auto',
            maxWidth: 360,
          }}
        >
          Open App Now
        </Button>
      </Grid>

      <Grid isAdaptive>
        <JoinMillions />
      </Grid>

      <Grid
        isAdaptive
        outgap={[50, 16]}
        style={{ margin: '0 -1.6rem', }}
        backgroundStyle="#15191d"
      >

        <EngageCashback />
      </Grid>

      <Grid
        isAdaptive
        outgap={[32, 16]}
        backgroundStyle="#15191d"
        style={{ margin: '0 -1.6rem', }}
      >
        <Footer />
      </Grid>
    </div>
  );
};

export default IndexPage;
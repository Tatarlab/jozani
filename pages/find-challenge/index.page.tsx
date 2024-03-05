import React, {
  useEffect, useState 
} from 'react';
import { pick } from 'lodash';
import {
  Skeleton, capitalize 
} from '@mui/material';
import List from '../../lib/components/list';
import { useChallenge } from '../../lib/store/challenge';
import { IChallenge } from '../../lib/store/challenge/types';
import { Card } from '../../lib/components/card';
import Row from '../../lib/components/row';
import Col from '../../lib/components/col';
import Grid from '../../lib/components/grid';
import { helperCategoryMaskProps } from '../challenge/ui/CategoryBox';
import Typography from '../../lib/components/typography';
import { dayjs } from '../../lib/domains';
import { Category } from '../../lib/components/icons/shared/categories/types';
import { Currency } from '../../lib/store/blockchain/types';
import { Button } from '../../lib/components/button';
import { IconArrowNext } from '../../lib/components/icons';
import { useRouter } from '../../lib/models';
import { formatAmountCurrency } from '../../lib/utils';

const EMPTY_CONTENT = Array.from({ length: 5 }, (_, i) => (
  <Card key={i} style={{ marginBottom: '1.6rem' }}>
    <Skeleton width={300} variant="text" />

    <Grid outgap={[16, 0]}>
      <Row spacing={2}>
        <Col mobile="auto">
          <Skeleton
            width={36}
            height={36}
            variant="circular"
          />
        </Col>

        <Col>
          <Skeleton width={200} variant="text" />

          <Skeleton width={320} variant="text" />
        </Col>
      </Row>
    </Grid>
  </Card>
));

const FindChallengePage: React.FC = () => {

  const router = useRouter();

  const [isReady, setIsReady] = useState(false);

  const {
    challengesList,
    getChallengeAll,
  } = useChallenge();
  
  const renderItem = (challenge: IChallenge) => {
    const {
      id, name, reward, charityReward,
      category = Category.Promise,
      currency = Currency.USDT,
      createdAt,
    } = pick(challenge, ['id', 'name', 'reward', 'charityReward', 'category', 'currency', 'createdAt']);
    const maskProps = helperCategoryMaskProps(category);
    console.log('found', challenge)

    return (
      <Card
        style={{ marginBottom: '1.6rem' }}
        onClick={() => router.replace(`/challenge?slug=${id}`)}
      >

        <Grid outgap={0}>
          <Row spacing={1}>
            <Col>
              <Typography
                display="flex"
                variant="body2"
              >
                {name}
              </Typography>
            </Col>
          </Row>

          <div style={{ marginTop: '1.6rem' }} />

          <Row spacing={2}>
            <Col mobile="auto">
              <i
                style={{
                  display: 'flex',
                  width: 36,
                  height: 36,
                  ...maskProps,
                }}
              />
            </Col>

            <Col>
              <Typography
                display="flex"
                variant="body2"
                fontWeight={500}
                style={{ marginTop: '.4rem' }}
              >
                {`${capitalize(category || Category.Promise)} Initiative`}

                <span style={{ marginLeft: 'auto' }}>
                  {`${formatAmountCurrency(charityReward, currency)}`}
                </span>
              </Typography>
            </Col>
          </Row>

          <Row>
            <Col justifyContent="flex-end">
              <Typography variant="caption">
                {`From: ${dayjs(createdAt).format('D MMM YYYY')}`}
              </Typography>
            </Col>

            <Col mobile="auto">
              <Button
                isBranding={2}
                size="small"
                variant="contained"
                href={`/challenge?slug=${id}`}
                style={{ marginLeft: 'auto' }}
              >
                {`Get ${formatAmountCurrency(reward, currency)}`}

                <i style={{
                  marginLeft: '.6rem',
                  lineHeight: 0.8 
                }}>
                  <IconArrowNext />
                </i>
              </Button>
            </Col>
          </Row>
        </Grid>
      </Card>
    );
  };

  useEffect(() => {
    getChallengeAll()
      .finally(() => setIsReady(true));
  }, []);

  return (
    <div>
      <Grid isAdaptive outgap={[16, 0]}>
        <List
          isReady={isReady}
          data={challengesList}
          renderItem={renderItem}
          emptyContent={EMPTY_CONTENT}
        />
      </Grid>
    </div>
  );
};

export default FindChallengePage;
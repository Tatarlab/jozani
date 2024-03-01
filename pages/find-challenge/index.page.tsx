import React, {
  useEffect, useState 
} from 'react';
import { pick } from 'lodash';
import { capitalize } from '@mui/material';
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
import {
  IconArrowNext, IconShare 
} from '../../lib/components/icons';
import { useRouter } from '../../lib/models';

const FindChallengePage: React.FC = () => {

  const router = useRouter();

  const [isReady, setIsReady] = useState(false);

  const {
    challengesList,
    getChallengeAll,
  } = useChallenge();
  
  const renderItem = (challenge: IChallenge) => {
    const {
      id, name, reward,
      category = Category.Promise, currency = Currency.USDT,
      createdAt,
    } = pick(challenge, ['id', 'name', 'reward', 'category', 'currency', 'createdAt']);
    const maskProps = helperCategoryMaskProps(category);

    return (
      <Card onClick={() => router.replace(`/challenge?slug=${id}`)}>

        <Grid outgap={0}>
          <Row spacing={1}>
            <Col>
              <Typography display="flex" variant="body2">
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
                  {`${currency} ${(reward * 0.3).toFixed(2)}`}
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
                {`Get ${currency} ${reward}`}

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
        />
      </Grid>
    </div>
  );
};

export default FindChallengePage;
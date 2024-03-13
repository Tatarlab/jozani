import React, {
  useEffect, useState 
} from 'react';
import {
  get, pick 
} from 'lodash';
import Typography from '../../lib/components/typography';
import Divider from '../../lib/components/divider';
import Grid from '../../lib/components/grid';
import Row from '../../lib/components/row';
import Col from '../../lib/components/col';
import { Button } from '../../lib/components/button';
import {
  IconArrowNext,
  IconShare, IconTelegram 
} from '../../lib/components/icons';
import { useBlockchain } from '../../lib/store/blockchain';
import { createChallenge, } from './helpers';
import { useChallenge } from '../../lib/store/challenge';
import {
  CategoryBox,
  ChallengeField, PaymentCard, CreateButton,
} from './ui';
import { useRouter } from '../../lib/models';
import { Category } from '../../lib/components/icons/shared/categories/types';
import { Currency } from '../../lib/store/blockchain/types';
import { formatAmountCurrency } from '../../lib/utils';
import Skeleton from '../../lib/components/skeleton';

const ChallengePage: React.FC = () => {
  const router = useRouter();
  
  const { slug = 'new' } = router.query;

  const {
    currency: walletCurrency,
    walletLastAmount,
    walletAddress,
    walletLastPaymentId,
  } = useBlockchain();

  const {
    challenges,
    setName,
    setCategory,
    getChallenge,
  } = useChallenge();

  const [isDirty, setIsDirty] = useState(false);
  const [isLastIncomeConfirmed, setIsLastIncomeConfirmed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const isNew = slug === 'new';
  const challenge = get(challenges, slug);
  const {
    id, name, reward, charityReward,
    category = Category.Promise,
    currency = Currency.USDT,
  } = pick(challenge, ['id', 'name', 'reward', 'charityReward', 'category', 'currency']);
  const isChallengeNameValid = challenge?.name && challenge?.name.length >= 10;
  const isEditable = !isLastIncomeConfirmed && isNew;

  const onCreateChallenge = async () => {
    try {
      const { data } = await createChallenge({
        name,
        address: walletAddress,
        currency,
        category,
      });

      if (data === null) {
        throw new Error('Challenge may not be created, make sure your transaction confirmed');
      }

      const id = get(data, 'id', '');

      if (!id) {
        throw new Error('Unknown error');
      }

      router.replace(`/challenge?slug=${id}`);
    } catch (err) {
      console.log('err', err)
    }
  };

  useEffect(() => {
    if (id === slug || isNew) {
      return;
    }

    getChallenge(slug as string);
  }, [isNew, id, slug]);

  return (
    <div
      style={{ margin: '0 -1.6rem', }}
    >
      <Divider />
      
      <Grid isAdaptive>
        <ChallengeField
          isNew={isNew}
          isError={!isChallengeNameValid && (isDirty || isLastIncomeConfirmed)}
          isDisabled={isLoading && isEditable}
          name={name}
          onInput={() => setIsDirty(true)}
          onChange={setName}
        />
      </Grid>

      <Grid isAdaptive outgap={[0, 16]}>
        <CategoryBox
          isNew={isNew}
          reward={reward}
          charityReward={charityReward}
          category={category}
          currency={currency}
          onChange={(newCategory) => setCategory(newCategory)}
        />
      </Grid>

      {isEditable && (
        <Grid isAdaptive>
          <PaymentCard
            isConfirmed={isLastIncomeConfirmed}
            setIsConfirmed={setIsLastIncomeConfirmed}
          />
        </Grid>
      )}

      <Grid isAdaptive>
        <Row spacing={2}>

          <Col mobile />

          {isNew && (
            <Col mobile="auto">
              <Button
                fullWidth
                disabled={!walletAddress}
                target="_blank"
                size="large"
                variant="contained"
                color="secondary"
                href={`https://t.me/jozani_bot?start=${btoa(`address:${walletAddress}`)}`}
                style={{
                  minWidth: 200,
                  maxWidth: 360,
                  backgroundColor: '#efefef',
                }}
              >
                Add Wallet

                <i
                  style={{
                    marginTop: 4,
                    marginLeft: '.5rem' 
                  }}
                >
                  <IconTelegram fill="#26A5E4" />
                </i>
              </Button>
            </Col>
          )}

          <Col mobile="auto">
            <Button
              disabled={isNew}
              size="large"
              variant="contained"
              color="secondary"
              style={{ width: 100 }}
            >
              Share
              
              <i style={{ marginLeft: '.5rem' }}>
                <IconShare fill="currentColor" />
              </i>
            </Button>
          </Col>

          {!isNew && (
            <Col mobile="auto">
              <Button
                fullWidth
                target="_blank"
                size="large"
                variant="contained"
                href={`https://t.me/jozani_bot?start=${btoa(`slug:${slug}`)}`}
              >
                {reward && (
                  <>
                    {`Get ${formatAmountCurrency(reward, currency)}`}
                  </>
                ) || (
                  <Skeleton variant="text" width={100} />
                )}

                <i style={{ marginLeft: '.5rem' }}>
                  <IconArrowNext fill="currentColor" />
                </i>
              </Button>
            </Col>
          )}
        </Row>
      </Grid>

      {isLastIncomeConfirmed && isNew && (
        <Grid>
          <CreateButton
            isDisabled={!isChallengeNameValid}
            reward={walletLastAmount || 0}
            currency={walletCurrency}
            onCreate={onCreateChallenge}
          />
        </Grid>
      )}
    </div>
  );
};

export default ChallengePage;
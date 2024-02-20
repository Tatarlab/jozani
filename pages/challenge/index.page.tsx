import React, {
  useEffect, useState 
} from 'react';
import { get } from 'lodash';
import Typography from '../../lib/components/typography';
import Divider from '../../lib/components/divider';
import Grid from '../../lib/components/grid';
import Row from '../../lib/components/row';
import Col from '../../lib/components/col';
import { Button } from '../../lib/components/button';
import {
  CATEGORIES,
  IconCategory,
  IconShare, IconTelegram 
} from '../../lib/components/icons';
import { useBlockchain } from '../../lib/store/blockchain';
import { createChallenge, } from './helpers';
import { useChallenge } from '../../lib/store/challenge';
import {
  ChallengeField, PaymentCard, TodoListCard 
} from './ui';
import { Card } from '../../lib/components/card';
import { useRouter } from '../../lib/models';

const ChallengePage: React.FC = () => {
  const router = useRouter();
  
  const { slug } = router.query;

  console.log('router', router);

  const {
    currency,
    walletAddress,
    walletLastIncome,
  } = useBlockchain();

  const {
    id, name, todo,
    setId,
    updateTodo,
    deleteTodo,
  } = useChallenge();

  const [isDirty, setIsDirty] = useState(false);
  const [isLastIncomeConfirmed, setIsLastIncomeConfirmed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const isChallengeNameValid = name && name.length >= 10;
  const isNew = slug === 'new';
  const isEditable = !isLastIncomeConfirmed && isNew;

  const onCreateChallenge = async () => {
    try {
      const { data } = await createChallenge({
        name,
        address: walletAddress,
        currency,
      });

      if (data === null) {
        throw new Error('Challenge may not be created, make sure your transaction confirmed');
      }

      const id = get(data, 'id', '');

      if (!id) {
        throw new Error('Unknown error');
      }

      router.replace(`/challenge/${id}`);
    } catch (err) {
      console.log('err', err)
    }
  };

  const onTodoUpdate = (todoName: string) => {
    updateTodo(todoName);
  };
  const onTodoonDelete = (i: number) => {
    deleteTodo(i);
  };

  useEffect(() => {
    if (id === slug) {
      return;
    }

    setId(slug as string);
  }, [id, slug]);

  return (
    <div>
      <Grid>
        <Typography
          variant="body1"
          textAlign="center"
          fontWeight={500}
          style={{ margin: '1rem 0' }}
        >
          Challenge
        </Typography>

        <Divider />

        {!isNew && (
          <Grid style={{ marginTop: '2rem' }}>
            <div>
              <Typography variant="caption">
                Challenge name
              </Typography>

              <Typography variant="body1" fontWeight={500}>
                {name}
              </Typography>
            </div>
          </Grid>
        )}
        
        {isNew && (
          <Grid style={{ marginTop: '2rem' }}>
            <ChallengeField
              isError={!isChallengeNameValid && (isDirty || isLastIncomeConfirmed)}
              isDisabled={isLoading && isEditable}
              onInput={() => setIsDirty(true)}
            />

            {isLastIncomeConfirmed && !isEditable && (
              <TodoListCard
                isDisabled={!isChallengeNameValid}
                reward={walletLastIncome?.amount || 0}
                todo={todo}
                onCreate={onCreateChallenge}
                onUpdate={onTodoUpdate}
                onDelete={onTodoonDelete}
              />
            )}
          </Grid>
        )}

        {(
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              overflow: 'auto',
            }}
          >
            {CATEGORIES.map((Category, i) => {
              const Icon = IconCategory[Category];

              return (
                <Card
                  key={i}
                  style={{ marginRight: '2rem', }}
                >
                  <i
                    style={{
                      display: 'flex',
                      width: 36,
                      height: 36,
                      color: 'red',
                    }}
                  >
                    {/* {Icon} */}

                    {Icon && (<Icon height="inherit" />)}
                  </i>
                </Card>
              );
            })}
          </div>
        )}

        {isEditable && (
          <PaymentCard
            isConfirmed={isLastIncomeConfirmed}
            setIsConfirmed={setIsLastIncomeConfirmed}
          />
        )}

        {isNew && (
          <Grid style={{ marginTop: '2rem' }}>
            <Typography variant="body1" fontWeight={500}>
              Checking transaction:
            </Typography>

            <Typography variant="body1">
              {isLastIncomeConfirmed
                ? 'Transfer received'
                : 'Awaiting for transfer'}
            </Typography>
          </Grid>
        )}

        <Grid style={{ marginTop: '2rem' }}>
          <Row spacing={2}>
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

            <Col mobile>
              <Button
                fullWidth
                size="large"
                variant="contained"
                color="secondary"
                style={{ backgroundColor: '#efefef' }}
              >
                Subscribe with

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
          </Row>
        </Grid>
      </Grid>
    </div>
  );
};

export default ChallengePage;
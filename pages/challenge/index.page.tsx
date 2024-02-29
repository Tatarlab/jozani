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
  CategoryBox,
  ChallengeField, PaymentCard, TodoListCard 
} from './ui';
import { Card } from '../../lib/components/card';
import { useRouter } from '../../lib/models';

const ChallengePage: React.FC = () => {
  const router = useRouter();
  
  const { slug } = router.query;

  const {
    currency,
    walletAddress,
    walletLastIncome,
  } = useBlockchain();

  const {
    id, name, todo,
    category,
    setId,
    setName,
    updateTodo,
    deleteTodo,
    setCategory,
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
    <div
      style={{ margin: '0 -1.6rem', }}
    >
      <Divider />

      {!isNew && (
        <Grid>
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
        <>
          <Grid>
            <ChallengeField
              isError={!isChallengeNameValid && (isDirty || isLastIncomeConfirmed)}
              isDisabled={isLoading && isEditable}
              onInput={() => setIsDirty(true)}
              onChange={setName}
            />
          </Grid>

          <Grid>
            <CategoryBox
              category={category}
              onChange={setCategory}
            />
          </Grid>

          {isLastIncomeConfirmed && !isEditable && (
            <Grid>
              <TodoListCard
                isDisabled={!isChallengeNameValid}
                reward={walletLastIncome?.amount || 0}
                todo={todo}
                onCreate={onCreateChallenge}
                onUpdate={onTodoUpdate}
                onDelete={onTodoonDelete}
              />
            </Grid>
          )}
          
        </>
      )}

      {isEditable && (
        <PaymentCard
          isConfirmed={isLastIncomeConfirmed}
          setIsConfirmed={setIsLastIncomeConfirmed}
        />
      )}

      {isNew && (
        <Grid>
          <Typography variant="body2">
            {`Transaction status: `}

            <span style={{ fontWeight: 500 }}>
              {isLastIncomeConfirmed
                ? 'Received'
                : 'Awaiting for transfer'}
            </span>
          </Typography>
        </Grid>
      )}

      <Grid>
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
    </div>
  );
};

export default ChallengePage;
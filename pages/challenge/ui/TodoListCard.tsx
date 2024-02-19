import React, {
  ReactNode, useState 
} from 'react';
import TextField from '../../../lib/components/textfield';
import {
  IconCross, IconPlus, 
} from '../../../lib/components/icons';
import { Card } from '../../../lib/components/card';
import List from '../../../lib/components/list';
import Typography from '../../../lib/components/typography';
import Grid from '../../../lib/components/grid';
import Row from '../../../lib/components/row';
import Col from '../../../lib/components/col';
import { Button } from '../../../lib/components/button';

interface ITodoListCardProps {
  isDisabled?: boolean;
  todo: string[];
  reward: number;
  onUpdate(name: string): void;
  onDelete(i: number): void;
  onCreate(): void;
};

const TodoListCard: React.FC<ITodoListCardProps> = ({
  isDisabled = false,
  todo,
  reward,
  onUpdate: _onUpdate,
  onDelete,
  onCreate,
}) => {
  const [todoName, setTodoName] = useState('');

  const onUpdate = (todoName: string) => {
    setTodoName('');

    _onUpdate(todoName);
  };

  const renderTodoItem = (item: ReactNode, i: number) => (
    <Typography
      variant="body1"
      style={{ fontWeight: 500 }}
    >
      {`${i + 1}. ${item}`}

      <Button
        style={{
          padding: '1rem',
          width: 40,
        }}
        onClick={() => onDelete(i)}
        // onClick={() => deleteTodo(i)}
      >
        <IconCross height={36} width={36} />
      </Button>
    </Typography>
  );

  return (
    <>
      <Card
        isBranding
        title="To-Do"
      >
        <List
          isReady
          data={todo}
          renderItem={renderTodoItem}
          emptyContent={(
            <Typography
              variant="body1"
              textAlign="center"
              align="center"
              style={{ fontWeight: 500 }}
            >
              Add challenging task description
            </Typography>
          )}
        />
      </Card>

      <div
        style={{
          position: 'fixed',
          left: 0,
          right: 0,
          bottom: 0,
          padding: '0 1.6rem 1.6rem',
        }}
      >
        <Grid>
          <Row spacing={2}>
            <Col mobile justifyContent="flex-end">
              <TextField
                size="small"
                label="To-Do item"
                value={todoName}
                onChange={(e) => setTodoName(e?.target?.value)}
              />
            </Col>

            <Col mobile="auto" justifyContent="flex-end">
              <Button
                isBranding
                size="small"
                variant="contained"
                style={{ width: 40 }}
                onClick={() => onUpdate(todoName)}
                // onClick={onAddTodo}
              >
                <IconPlus />
              </Button>
            </Col>
          </Row>
        </Grid>

        <Grid style={{ marginTop: '2rem' }}>
          <Row spacing={2}>
            <Col mobile="auto">
              <Typography variant="body1" fontWeight={500}>
                Reward:
              </Typography>
            </Col>

            <Col mobile="auto">
              <Typography variant="body1">
                {/* {`$${walletLastIncome?.amount || 0}`} */}
                {reward}
              </Typography>
            </Col>
          </Row>
        </Grid>

        <Button
          fullWidth
          disabled={isDisabled}
          // disabled={!isChallengeNameValid}
          variant="contained"
          size="large"
          style={{ marginTop: '2rem' }}
          onClick={onCreate}
          // onClick={onCreateChallenge}
        >
          Create
        </Button>
      </div>
    </>
  );
};

export default TodoListCard;

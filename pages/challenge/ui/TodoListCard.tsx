import React, {
  ReactNode, useState 
} from 'react';
import { Dinero } from '../../../lib/domains';
import TextField from '../../../lib/components/textfield';
import {
  IconPlus, IconStar, IconTrash, 
} from '../../../lib/components/icons';
import { Card } from '../../../lib/components/card';
import List from '../../../lib/components/list';
import Typography from '../../../lib/components/typography';
import Grid from '../../../lib/components/grid';
import Row from '../../../lib/components/row';
import Col from '../../../lib/components/col';
import { Button } from '../../../lib/components/button';
import Divider from '../../../lib/components/divider';
import { getCssVar } from '../../../lib/styles';

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
      variant="body2"
      style={{ fontWeight: 500 }}
    >
      {`${i + 1}. ${item}`}

      <Button
        style={{
          padding: '0 1rem .6rem',
          width: 40,
        }}
        onClick={() => onDelete(i)}
        // onClick={() => deleteTodo(i)}
      >
        <IconTrash />
      </Button>
    </Typography>
  );

  return (
    <>
      {/* <Card
        isBranding
        title="To-Do List"
      >

        <List
          isReady
          data={todo}
          renderItem={renderTodoItem}
          emptyContent={(
            <Typography
              variant="body2"
              textAlign="center"
              align="center"
              style={{ fontWeight: 500 }}
            >
              Add challenging task description
            </Typography>
          )}
        />
      </Card> */}

      <div
        style={{
          position: 'fixed',
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(255, 255, 255, .35)',
          backdropFilter: 'blur(2px)',
          // @ts-ignore
          // eslint-disable-next-line @typescript-eslint/naming-convention
          'webkit-backdrop-filter': 'blur(2px)',
          boxShadow: `3px 2px 9px 1px ${getCssVar('grey', 100)}`,
          zIndex: 9,
        }}
      >
        {/* <Grid>
          <Row spacing={2}>
            <Col mobile justifyContent="flex-end">
              <TextField
                label="To-Do item"
                value={todoName}
                onChange={(e) => setTodoName(e?.target?.value)}
                InputProps={{
                  endAdornment: (<i onClick={() => onUpdate(todoName)}>
                    <IconPlus />
                  </i>),
                }}
              />
            </Col>
          </Row>
        </Grid>

        <Divider /> */}

        <Grid>
          <Row spacing={2}>
            <Col mobile>
              <Button
                fullWidth
                disabled={isDisabled}
                // disabled={!isChallengeNameValid}
                variant="contained"
                size="large"
                onClick={onCreate}
                // onClick={onCreateChallenge}
              >
                Create

                <span
                  style={{
                    position: 'absolute',
                    right: '1.6rem',
                    fontWeight: 500,
                  }}
                >
                  {/* {`$${walletLastIncome?.amount || 0}`} */}
                  {`~${new Dinero({ amount: reward })}`}
                </span>
              </Button>
            </Col>
          </Row>
        </Grid>
      </div>
    </>
  );
};

export default TodoListCard;

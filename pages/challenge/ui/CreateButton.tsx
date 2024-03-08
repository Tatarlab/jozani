import React from 'react';
import Grid from '../../../lib/components/grid';
import Row from '../../../lib/components/row';
import Col from '../../../lib/components/col';
import { Button } from '../../../lib/components/button';
import { getCssVar } from '../../../lib/styles';
import { IChallenge } from '../../../lib/store/challenge/types';
import { Currency } from '../../../lib/store/blockchain/types';
import { formatAmountCurrency } from '../../../lib/utils';

interface ICreateButtonProps extends Pick<IChallenge,
  'reward' |
  'currency'
> {
  isDisabled?: boolean;
  onCreate(): void;
};

const CreateButton: React.FC<ICreateButtonProps> = ({
  isDisabled = false,
  currency = Currency.USDT,
  reward,
  onCreate,
}) => {
  const isReady = reward || !Number.isNaN(reward);

  return (
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
  
      <Grid>
        <Row spacing={2}>
          <Col mobile>
            <Button
              fullWidth
              disabled={isDisabled || !isReady}
              variant="contained"
              size="large"
              onClick={onCreate}
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
                {formatAmountCurrency(reward, currency)}
              </span>
            </Button>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default CreateButton;

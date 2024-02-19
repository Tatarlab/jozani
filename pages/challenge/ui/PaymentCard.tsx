import React, {
  useEffect, useState 
} from 'react';
import Grid from '../../../lib/components/grid';
import Typography from '../../../lib/components/typography';
import { Card } from '../../../lib/components/card';
import Row from '../../../lib/components/row';
import Col from '../../../lib/components/col';
import { IconCopy } from '../../../lib/components/icons';
import { copy2Clipboard } from '../../../lib/utils';
import { getCssVar } from '../../../lib/styles';
import { useBlockchain } from '../../../lib/store/blockchain';

interface IPaymentCardProps {
  isConfirmed: boolean;
  setIsConfirmed(isConfirmed: boolean): void;
}

const PaymentCard: React.FC<IPaymentCardProps> = ({
  isConfirmed,
  setIsConfirmed,
}) => {
  const {
    currency, network,
    walletAddress, walletAddressDataURL,
    getWalletAddress, getWalletBalance,
  } = useBlockchain();

  useEffect(() => {
    getWalletAddress();
  }, []);

  useEffect(() => {
    if (!walletAddress) {
      return;
    }

    const updateWalletBalance = () => {
      getWalletBalance()
        .then(({ isLastIncomeConfirmed }) => isLastIncomeConfirmed && setIsConfirmed(isLastIncomeConfirmed));

      if (isConfirmed) {
        return;
      }
      
      setTimeout(updateWalletBalance, 10000);
    };

    updateWalletBalance();

    // MOCK: dont forget to remove
    setTimeout(() => {
      console.log('CHANGED!');
      setIsConfirmed(true);
    }, 30000);
  }, [isConfirmed, walletAddress]);

  return (
    <>
      <Grid style={{ marginTop: '2rem' }}>
        <Typography variant="h6">
          Top-up
          {' '}

          {currency}

          <div>
            <Typography variant="body1">
            You are willing to send any amount more than $10
            </Typography>
          </div>
        </Typography>

        <Card style={{ borderRadius: 6 }}>

          <Grid>
            <Row spacing={2}>
              <Col mobile="auto">
                <img
                  src={walletAddressDataURL}
                  style={{
                    width: 64,
                    height: 64,
                    background: '#ccc' 
                  }}
                />
              </Col>

              <Col mobile={9}>
                <div>
                  <Typography variant="caption">
                    Network
                  </Typography>

                  <Typography variant="body1">
                    {network}
                  </Typography>
                </div>

                <div style={{ marginTop: 'auto' }} />

                <div>
                  <Typography variant="caption">
                    Wallet address
                  </Typography>

                  <div style={{ display: 'flex' }}>
                    <Typography
                      noWrap
                      variant="body1"
                      style={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis' 
                      }}
                    >
                      {walletAddress}
                    </Typography>

                    <i
                      style={{ marginLeft: 2 }}
                      onClick={() => copy2Clipboard(walletAddress)}
                    >
                      <IconCopy fill={getCssVar('grey', 400)} />
                    </i>
                  </div>
                </div>
              </Col>
            </Row>
          </Grid>
        </Card>
      </Grid>

      <Grid>
        <Card
          style={{
            background: getCssVar('yellow', 100),
            borderRadius: 6 
          }}
        >
          <Typography variant="caption" color={getCssVar('grey', 900)}>
            <ul>
              <li>
                Make sure that the network matches recepient
                {'\''}
                s network to avoid money lost.
              </li>

              <li>Deposits of less then $10 are subject to a $5 fee.</li>
            </ul>
          </Typography>
        </Card>
      </Grid>
    </>
  );
};

export default PaymentCard;
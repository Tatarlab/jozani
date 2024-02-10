import { useRouter } from 'next/router';
import React, {
  useEffect, useState 
} from 'react';
import { Card } from '../../lib/components/card';
import { getChallengeTitle } from './shared/helpers';
import TextField from '../../lib/components/textfield';
import Typography from '../../lib/components/typography';
import Divider from '../../lib/components/divider';
import Grid from '../../lib/components/grid';
import Row from '../../lib/components/row';
import Col from '../../lib/components/col';
import { getCssVar } from '../../lib/styles';
import List from '../../lib/components/list';
import { Button } from '../../lib/components/button';
import {
  IconCopy, IconShare, IconStar, IconUpdate,
} from '../../lib/components/icons';
import { useBlockchain } from '../../lib/store/blockchain';
import { getFirebaseCallable } from '../../entities/firebase';
import { copy2Clipboard } from '../../lib/utils';

const ChallengePage: React.FC = () => {
  const router = useRouter();
  
  const { slug } = router.query;

  const isEditable = slug === 'new';

  const {
    currency, network, walletAddress, walletAddressDataURL,
    getWalletAddress,
  } = useBlockchain();

  const [isShareAvailable, setIsShareAvailble] = useState(false);
  const [value, setValue] = useState('');

  const isChallengeNameValid = value && value.length >= 10;

  useEffect(() => {
    getWalletAddress();
  }, []);

  useEffect(() => {
    if (!walletAddress) {
      return;
    }

    const getBalance = getFirebaseCallable('getBalanceWallet');
    getBalance({ address: walletAddress })
      .then((data) => console.log('DDD', data))
      .catch((err) => console.log('eee', err));
  }, [walletAddress]);

  return (
    <div>
      <Grid>
        <Typography
          variant="h5"
          textAlign="center"
          style={{ margin: '2rem 0' }}
        >
          Challenge
        </Typography>

        <Divider />
        
        <Grid style={{ margin: '2rem 0' }}>
          <TextField
            isFullWidth
            hiddenLabel
            isError={!isChallengeNameValid}
            helperText="Just a few words describing the challenge"
            errorText="Required Minimum 10 symbols"
            label="Challenge name"
            value={value}
            InputProps={{ endAdornment: <IconUpdate fill="currentColor" />, }}
            onChange={(e) => setValue(e.target.value)}
          />
        </Grid>

        <Grid>
          <Typography variant="h6">
            Top-up
            {' '}

            {currency}

            <div>
              <Typography variant="body1">
                You are willing to send any amount you wish more than $10
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

        <Grid style={{ margin: '2rem 0' }}>
          <Typography variant="body1" fontWeight={500}>
            Checking transaction:
          </Typography>

          <div style={{ marginTop: '1rem' }} />

          <Typography variant="body1">
            Awaiting for transfer
          </Typography>
        </Grid>

        <Grid>
          <Row spacing={2}>
            <Col mobile={6}>
              <Button
                disabled={!isShareAvailable}
                size="large"
                variant="contained"
                color="secondary"
              >
                Share
                
                <i style={{ marginLeft: '.5rem' }}>
                  <IconShare fill="currentColor" />
                </i>
              </Button>
            </Col>

            <Col mobile={6}>
              <Button
                size="large"
                variant="contained"
                color="secondary"
              >
                Subscribe

                <i
                  style={{
                    marginTop: 4,
                    marginLeft: '.5rem' 
                  }}
                >
                  <IconStar fill="currentColor" />
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
import React, { useState } from 'react';
import { Card } from '../lib/components/card';
import Typography from '../lib/components/typography';
import { getCssVar } from '../lib/styles';

const IndexPage: React.FC = () => {
  const [asd] = useState();

  return (
    <div>
      <Card style={{
        justifyContent: 'center',
        background: 'linear-gradient(106deg, #f09f6c, #ef6400);' 
      }}>
        <img src="/assets/pay-challenge.png" style={{
          marginTop: '-15%',
          maxWidth: '100%',
          width: '80%'
        }} />

        <Typography variant="h3" fontWeight="bold" fontStyle="italic"
          color={getCssVar('white', 100)}>
          Challenge friend
        </Typography>
      </Card>

      <Card style={{ background: 'linear-gradient(106deg, #829cf3, #294dda);' }}>
        <img src="/assets/create-challenge.png" style={{
          marginLeft: 'auto',
          maxWidth: '100%',
          width: '80%',
        }} />

        <Typography variant="h3" fontWeight="bold" fontStyle="italic"
          color={getCssVar('white', 100)}>
          Find a challenge
        </Typography>
      </Card>

      <Typography variant="h2">
        Why we are?
      </Typography>

      <Typography variant="body1">
        Once you deposit funds either your friend or charity will receive them
      </Typography>
    </div>
  );
};

export default IndexPage;
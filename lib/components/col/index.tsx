import React from 'react';
import { Grid } from '@mui/material';
import { IColProps } from './types';

const Col: React.FC<IColProps> = ({
  sx, ...props 
}) => (
  <Grid
    item
    display="flex"
    sx={{
      flex: 1,
      flexFlow: 'column',
      ...sx
    }}
    {...props}
  />
);

export default Col;

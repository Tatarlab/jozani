import React from 'react';
import { Grid } from '@mui/material';
import { IRowProps } from './types';

const Row: React.FC<IRowProps> = (props) => (
  <Grid
    container
    display="flex"
    {...props}
  />
);

export default Row;

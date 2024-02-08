import React from 'react';
import { INextAppProps } from './types';

const NextApp: React.FC<INextAppProps> = ({ children }) => (
  <>
    {children}
  </>
);

export default NextApp;

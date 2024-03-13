import { ReactNode } from 'react';
import { LinkProps } from '@mui/material';

export interface ILinkProps extends Omit<LinkProps, 'href'> {
  href?: string;
  to?: string;
  component?: React.FC;
}

export interface ILinkWrapperProps {
  children: ReactNode;
}

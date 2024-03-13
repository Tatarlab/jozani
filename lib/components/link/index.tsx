/* eslint-disable react/display-name */
/* eslint-disable react/jsx-no-useless-fragment */
import React, { useMemo } from 'react';
import {
  LinkComponent, StyledLink 
} from './shared';
import {
  ILinkProps, ILinkWrapperProps 
} from './types';

const Link: React.FC<ILinkProps> = ({
  component: Component = LinkComponent,
  to,
  children,
  ...props
}) => {
  const Wrapper: React.FC<ILinkWrapperProps> = useMemo(() => (props) => {
    if (to) {
      return (<Component href={to} {...props} />);
    }

    return (
      <React.Fragment {...props} />
    );
  }, [to]);

  return (
    <Wrapper>
      <StyledLink {...props}>
        {children}
      </StyledLink>
    </Wrapper>
  );
};

export default Link;

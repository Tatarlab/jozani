import React, { useMemo } from 'react';
import {
  CardContainer, CardTitleWrapper, StyledCard 
} from './shared';
import { ICardProps } from './types';

export const Card: React.FC<ICardProps> = ({
  isFullWidth = false,
  isFullHeight = false,
  isBranding = false,
  title,
  children,
  footer,
  titleStyle,
  footerStyle,
  contentRef,
  ...props
}) => {
  const titleComponent = useMemo(() => {
    if (title) {
      return (
        <>
          <CardTitleWrapper style={titleStyle}>
            {title}
          </CardTitleWrapper>
        </>
      );
    }

    return null;
  }, [title, titleStyle]);

  // Content depends on 'title' prop
  const content = useMemo(() => {
    if (title) {
      return (
        <CardContainer
          ref={contentRef}
          style={{
            flexDirection: footer
              ? 'column'
              : 'row',
          }}
        >
          {children}
        </CardContainer>
      );
    }

    return children;
  }, [contentRef, children, title, footer]);

  console.log('isBranding', isBranding)

  return (
    <StyledCard
      isBranding={isBranding}
      {...props}>
      {titleComponent}

      {content}
    </StyledCard>
  );
};

export * from './types';

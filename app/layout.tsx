'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */
import { ThemeProvider } from 'styled-components';
import StyledComponentsRegistry from '../lib/registry';
import GlobalStyles from '../shared/ui/styles-global';
import theme from '../shared/ui/theme';

export default function RootLayout(props: React.PropsWithChildren<any>) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />

          <ThemeProvider theme={theme}>
            {props.children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
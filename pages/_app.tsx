/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import cn from 'classnames';
import App from '../app';
import {
  ThemeProvider, getTheme 
} from '../lib/theme';
import { GlobalStyle } from '../lib/styles';
import '../lib/styles/index.scss';
import { Header } from '../lib/components/header';
import { StyledLayout } from '../lib/components/layout/shared';

const BaseApp: React.FC<AppProps> = (props) => {
  const {
    Component, pageProps 
  } = props;

  return (
    <ThemeProvider theme={getTheme('dark', {})}>
      <GlobalStyle />
 
      <App {...props}>
        <Head>
          <title>Pruebat</title>

          <meta property="og:title" content="Pruebat" />

          <meta property="og:site_name" content="Pruebat" />

          <meta property="og:description" content="Pruebat" />

          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />

          <meta name="theme-color" content="#141618" />

          <meta name="robots" content="noindex, nofollow, notranslate" />

          <link rel="icon" href="/event/images/favicon_64x64.png" />

          <link rel="apple-touch-icon" href="/event/images/logo192.png" />
        </Head>

        <main className={cn('app')}>
          <Header />

          <StyledLayout>
            <Component {...pageProps} />
          </StyledLayout>
        </main>
      </App>
    </ThemeProvider>
  );
};

export default BaseApp;

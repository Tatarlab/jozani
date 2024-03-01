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
    <ThemeProvider theme={getTheme('light', {})}>
      <GlobalStyle />
 
      <App {...props}>
        <Head>
          <title>Pruebate | Unique challenge experience</title>

          <meta property="og:type" content="website" />

          <meta property="og:image" content="https://pruebate.us/assets/pruebate.jpg" />

          <meta property="og:image:width" content="1200" />

          <meta property="og:image:height" content="630" />

          <meta property="og:site_name" content="Pruebate" />

          <meta property="og:title" content="Pruebate" />

          <meta property="og:description" content="Pruebate | Unique challenge experience. Connect people via challenges" />

          <meta property="og:url" content="https://pruebate.us" />

          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />

          <meta name="theme-color" content="#03a9f4" />

          <meta name="robots" content="noindex, nofollow, notranslate" />

          <link rel="icon" href="/assets/favicon_64x64.png" />

          <link rel="apple-touch-icon" href="/assets/logo192.png" />
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

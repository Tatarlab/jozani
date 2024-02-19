/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/display-name */
import React from 'react';
import Document, {
  Html, Head, Main, NextScript
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class SimpleDocument extends Document {
  static async getInitialProps(ctx: any) {
    const stylesheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({ enhanceApp: (App: any) => (props: any) => stylesheet.collectStyles(<App {...props} />) });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: [
          <React.Fragment key="1">
            {initialProps.styles}

            {stylesheet.getStyleElement()}
          </React.Fragment>
        ]
      };
    } finally {
      stylesheet.seal();
    }
  }

  render() {
    return (
      <Html lang="ru" prefix="og: http://ogp.me/ns#" translate="no">
        <Head />

        <body>
          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }
}

export default SimpleDocument;

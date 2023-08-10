import Document, { Html, Head, Main, NextScript } from 'next/document';
// import Script from 'next/script';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* CDN FONT */}
          {/* <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          /> */}

          {/* THEME COLOR */}
          <meta name="theme-color" content="#ED1C24" />

          {/* FAVICON */}
          <link rel="icon" href="/favicon.svg" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

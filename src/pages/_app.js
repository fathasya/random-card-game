import NextNProgress from 'nextjs-progressbar';

if (process.env.NODE_ENV !== 'production') {
  require('../assets/styles/globals.css');
} else {
  require('../assets/styles/build.css');
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress
        color="#ED1C24"
        startPosition={0.3}
        stopDelayMs={200}
        height={2}
        showOnShallow={true}
        options={{ showSpinner: false }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

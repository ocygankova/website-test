import 'styles/globals.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Layout } from 'components';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Website</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default App;
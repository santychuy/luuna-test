import 'normalize.css';
import '../styles/global.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import Head from 'next/head';
import { NextSeo } from 'next-seo';

const queryClient = new QueryClient();

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono"
          rel="stylesheet"
        />
      </Head>
      <QueryClientProvider client={queryClient}>
        <NextSeo
          title="Zebrands Technical Interview"
          description="Technical interview for Zebrands that the main goal is to search usernames or repositories from Github and retrieve a data"
        />
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
};

export default App;

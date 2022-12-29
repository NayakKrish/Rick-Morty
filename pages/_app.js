import Head from 'next/head';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
        <title>Rick&Morty</title>
        <meta
          name="description"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
  <Component {...pageProps}/>
  </>
   );
}

export default MyApp

import "../styles/globals.css";
import Script from "next/script";
import Head from "next/head";
import UserProvider from "../context/user";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Head>
        <link rel="icon" type="image/svg+xml" href="/images/icon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
      <Script src="/global.js" />
    </UserProvider>
  );
}

export default MyApp;

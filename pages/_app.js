import "../styles/globals.css";
import Layout from "../components/Layout/Layout";
import { ThemeProvider } from "next-themes";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <main>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </main>
      
  );
}

export default MyApp;

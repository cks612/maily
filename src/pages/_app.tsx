import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Common/Layout";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { SWRConfig } from "swr";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

import "../styles/globals.css";
import { tlds } from "https://github.com/miguelgargallo/tlds-leveling/blob/main/tlds.css";

// include styles from the ui package
import "ui/styles.css";

import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

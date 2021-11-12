import type { AppProps } from "next/app";
import NFTProvider from "../context/NFTProvider";
import "../style.css";
import "tailwindcss/tailwind.css";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NFTProvider>
      <Component {...pageProps} />
    </NFTProvider>
  );
}

export default MyApp;

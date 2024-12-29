import "@/styles/globals.css";
import "@/components/nav-element/NavElement.scss";
import "@/components/nav-bar/NavBar.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

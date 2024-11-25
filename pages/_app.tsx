import Header from "@/src/layouts/Header";
import Footer from "@/src/layouts/Footer";
import "@/styles/Home.css";
import "@/styles/Footer.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

import Header from "@/src/layouts/Header";
import Footer from "@/src/layouts/Footer";
import "@/styles/Home.css";
import "@/styles/Footer.css";
import "@/styles/globals.css";
import "@/styles/Login.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  const login = pathname !== "/login";
  const signup = pathname !== "/signup";

  return (
    <>
      {login && signup && <Header />}
      <Component {...pageProps} />
      {login && signup && <Footer />}
    </>
  );
}

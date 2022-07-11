import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Header } from "../components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="w-full min-h-screen mx-auto">
      <Header />
      <main className="mt-8">
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;

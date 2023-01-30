import "@/styles/globals.css";
import type { AppProps } from "next/app";
import AppProvider from "@/context/context";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={false} attribute={"class"}>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </ThemeProvider>
  );
}

// pages/_app.js
import { ClerkProvider } from "@clerk/nextjs";
import "../app/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ClerkProvider {...pageProps}>
      <Component {...pageProps} />
    </ClerkProvider>
  );
}

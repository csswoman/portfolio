import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import SEO from "@/lib/seo.config";
import { NextIntlClientProvider } from 'next-intl';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextIntlClientProvider 
      messages={pageProps.messages}
      locale={pageProps.locale}
    >
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </NextIntlClientProvider>
  );
}


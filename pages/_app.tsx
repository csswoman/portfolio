import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { generateDefaultSeo } from "next-seo/pages";
import SEO from "@/lib/seo.config";
import { NextIntlClientProvider } from 'next-intl';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextIntlClientProvider
      messages={pageProps.messages}
      locale={pageProps.locale || 'es'}
    >
      <Head>{generateDefaultSeo(SEO)}</Head>
      <Component {...pageProps} />
    </NextIntlClientProvider>
  );
}


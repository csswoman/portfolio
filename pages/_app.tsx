import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { generateDefaultSeo } from "next-seo/pages";
import SEO from "@/lib/seo.config";
import { NextIntlClientProvider } from 'next-intl';
import { MotionController } from '@/components/MotionController';
import { SkipLink } from '@/components/layout';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <NextIntlClientProvider
      locale={router.locale}
      timeZone="America/Mexico_City"
      messages={pageProps.messages}
    >
      <Head>{generateDefaultSeo(SEO)}</Head>
      <SkipLink />
      <MotionController />
      <Component {...pageProps} />
    </NextIntlClientProvider>
  );
}


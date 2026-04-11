import Head from "next/head";
import { generateNextSeo } from "next-seo/pages";
import { Header, Footer } from "@/components/layout";
import {
  HeroSection,
  WorkSection,
  ContactSection,
  GitHubSection,
} from "@/components/sections";
import { GetStaticPropsContext } from 'next';

export default function Home() {
  return (
    <>
      <Head>
        {generateNextSeo({
          title: "Karla Agraz — UI Engineer",
          description: "Building interfaces that feel natural and work seamlessly.",
        })}
      </Head>
      <Header />
      <main>
        <HeroSection />
        <GitHubSection />
        <ContactSection />
        <WorkSection />
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const resolvedLocale = locale || 'es';
  return {
    props: {
      messages: (await import(`../messages/${resolvedLocale}.json`)).default,
      locale: resolvedLocale,
    },
  };
}

import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import { generateNextSeo } from 'next-seo/pages';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Header, Footer } from '@/components/layout';

export default function Custom404() {
  const t = useTranslations('Error');

  return (
    <>
      <Head>
        {generateNextSeo({
          title: t('seo404Title'),
          description: t('seo404Description'),
        })}
      </Head>
      <Header />
      <main id="main-content" className="min-h-[70vh] flex items-center justify-center px-4">
        <div className="text-center max-w-xl mx-auto">
          <h1 className="text-6xl font-bold mb-4 text-[var(--text-primary)]">404</h1>
          <p className="text-xl mb-8 text-[var(--text-secondary)]">{t('notFound')}</p>
          <Link 
            href="/" 
            className="btn-primary min-h-11 px-6 py-3 inline-flex items-center justify-center"
          >
            {t('goHome')}
          </Link>
        </div>
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


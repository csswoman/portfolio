import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import { generateNextSeo } from 'next-seo/pages';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import type { NextPageContext } from 'next';
import { Header, Footer } from '@/components/layout';

type ErrorPageProps = {
  statusCode: number;
};

function Error({ statusCode }: ErrorPageProps) {
  const t = useTranslations('Error');

  return (
    <>
      <Head>
        {generateNextSeo({
          title: t('seoErrorTitle', { statusCode: statusCode || 500 }),
          description: t('seoErrorDescription'),
        })}
      </Head>
      <Header />
      <main id="main-content" className="min-h-[70vh] flex items-center justify-center px-4">
        <div className="text-center max-w-xl mx-auto">
          <h1 className="text-6xl font-bold mb-4 text-[var(--text-primary)]">{statusCode || 'Error'}</h1>
          <p className="text-xl mb-8 text-[var(--text-secondary)]">
            {statusCode === 404 ? t('notFound') : t('serverError')}
          </p>
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

Error.getInitialProps = async ({ res, err, locale }: NextPageContext & { locale?: string }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  
  const messages = locale 
    ? (await import(`../messages/${locale}.json`)).default
    : (await import(`../messages/es.json`)).default;

  return { 
    statusCode,
    messages,
    locale: locale || 'es'
  };
};

export default Error;


import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import { generateNextSeo } from 'next-seo/pages';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function Custom404() {
  const t = useTranslations('Error');

  return (
    <>
      <Head>
        {generateNextSeo({
          title: "404 - Página no encontrada",
          description: "La página que buscas no existe",
        })}
      </Head>
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <p className="text-xl mb-8">{t('notFound')}</p>
          <Link 
            href="/" 
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            {t('goHome')}
          </Link>
        </div>
      </div>
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


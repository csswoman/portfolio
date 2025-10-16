import { GetStaticPropsContext } from 'next';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

function Error({ statusCode }: { statusCode: number }) {
  const t = useTranslations('Error');

  return (
    <>
      <NextSeo
        title={`${statusCode} - Error`}
        description="Ha ocurrido un error"
      />
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4">{statusCode || 'Error'}</h1>
          <p className="text-xl mb-8">
            {statusCode === 404 ? t('notFound') : t('serverError')}
          </p>
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

Error.getInitialProps = async ({ res, err, locale }: any) => {
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


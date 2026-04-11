import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import { generateNextSeo } from 'next-seo/pages';
import { Header, Footer } from '@/components/layout';
import { getWorkExperience, cvPaths } from '@/lib/constants';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';


export default function Experience() {
  const t = useTranslations();
  const locale = useLocale();
  const workExperience = getWorkExperience(t);
  const currentLocale = (locale || 'es') as keyof typeof cvPaths;
  const cvPath = cvPaths[currentLocale];

  return (
    <>
      <Head>
        {generateNextSeo({
          title: "Experience — Karla Agraz",
          description: "Professional experience and career journey.",
        })}
      </Head>
      <Header />
      <main className="container">
        <div style={{ paddingTop: '60px', paddingBottom: '40px' }}>
          <Link href="/" className="btn">
            ← {currentLocale === 'es' ? 'VOLVER' : 'BACK'}
          </Link>
        </div>

        <section className="section">
          <h1 className="section-label">EXPERIENCE</h1>

          <div className="exp-timeline">
            <div style={{ marginTop: '40px' }}>
              <h2 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '20px', color: 'var(--text-primary)' }}>
                {t('About.experience')}
              </h2>
              {workExperience.map((exp) => (
                <div key={exp.id} style={{ marginBottom: '32px', paddingBottom: '24px', borderBottom: '1px solid var(--border-light)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-primary)' }}>
                        {exp.title}
                      </div>
                      <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                        {exp.company}
                      </div>
                    </div>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)', whiteSpace: 'nowrap', marginLeft: '16px' }}>
                      {exp.period}
                    </div>
                  </div>
                  <p style={{ fontSize: '13px', lineHeight: '1.8', color: 'var(--text-secondary)', marginTop: '8px', whiteSpace: 'pre-wrap' }}>
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '32px' }}>
              <a
                href={cvPath}
                download
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                {currentLocale === 'es' ? 'DESCARGAR CV' : 'DOWNLOAD CV'}
              </a>
            </div>
          </div>
        </section>
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

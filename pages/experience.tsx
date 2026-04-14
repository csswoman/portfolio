import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import { generateNextSeo } from 'next-seo/pages';
import { Header, Footer } from '@/components/layout';
import { getWorkExperience, cvPaths } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

const COMPANY_LOGOS: Record<number, string> = {
  1: '/images/cultivate_logo.jpg',
  2: '/images/upwork_logo.jpg',
  3: '/images/nomades_logo.jpg',
  4: '/images/upwork_logo.jpg',
  5: '/images/edteamlat_logo.jpg',
};


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

          <div className="exp-list">
            {workExperience.map((exp) => {
              const bullets = exp.description
                .split('\n')
                .map((line: string) => line.replace(/^\d+\.\s*/, '').trim())
                .filter(Boolean);

              return (
                <div key={exp.id} className="exp-item">
                  <div className="exp-header">
                    <div className="exp-role-block">
                      {COMPANY_LOGOS[exp.id] && (
                        <a href={COMPANY_LOGOS[exp.id]} target="_blank" rel="noopener noreferrer">
                          <Image src={COMPANY_LOGOS[exp.id]} alt={exp.company} width={24} height={24} />
                        </a>
                      )}
                      <span className="exp-role">{exp.title}</span>
                      {exp.companyUrl ? (
                        <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="exp-company-link underline">
                          — {exp.company}
                        </a>
                      ) : (
                        <span className="exp-company">— {exp.company}</span>
                      )}
                    </div>
                    <span className="exp-period">{exp.period}</span>
                  </div>
                  <ul className="exp-bullets">
                    {bullets.map((bullet: string, i: number) => (
                      <li key={i} className="exp-bullet">
                        <span className="exp-bullet-arrow">→</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div style={{ marginTop: '48px' }}>
            <a
              href={cvPath}
              download
              target="_blank"
              rel="noreferrer"
              className="btn btn-cta-primary"
            >
              {currentLocale === 'es' ? 'DESCARGAR CV' : 'DOWNLOAD CV'}
            </a>
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

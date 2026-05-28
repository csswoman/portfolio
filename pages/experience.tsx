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
          title: t('ExperiencePage.seoTitle'),
          description: t('ExperiencePage.seoDescription'),
        })}
      </Head>
      <Header />
      <main className="content-shell" id="main-content">
        <div className="py-8">
          <Link href="/" className="inline-flex items-center text-accent hover:text-orange transition-colors" aria-label={t('ExperiencePage.backToHome')}>
            <span aria-hidden="true">←</span> {t('ExperiencePage.back')}
          </Link>
        </div>

        <section className="space-y-8 sm:space-y-12">
          <h1 className="text-xl sm:text-2xl font-bold text-text-primary uppercase tracking-wide">{t('ExperiencePage.title')}</h1>

          <div className="space-y-6 sm:space-y-8">
            {workExperience.map((exp) => {
              const bullets = exp.description
                .split('\n')
                .map((line: string) => line.replace(/^\d+\.\s*/, '').trim())
                .filter(Boolean);

              return (
                <div key={exp.id} className="border border-border-subtle rounded-md p-4 sm:p-6 bg-bg-card hover:border-border-light transition-colors">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex flex-col gap-2 sm:gap-3 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        {COMPANY_LOGOS[exp.id] && (
                          <span className="flex-shrink-0">
                            <Image src={COMPANY_LOGOS[exp.id]} alt={`${exp.company} logo`} width={24} height={24} />
                          </span>
                        )}
                        <span className="font-semibold text-text-primary text-sm sm:text-base">{exp.title}</span>
                        {exp.companyUrl ? (
                          <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors underline text-sm sm:text-base">
                            — {exp.company}
                          </a>
                        ) : (
                          <span className="text-text-secondary text-sm sm:text-base">— {exp.company}</span>
                        )}
                      </div>
                    </div>
                    <span className="text-text-muted text-xs sm:text-sm whitespace-nowrap flex-shrink-0">{exp.period}</span>
                  </div>
                  <ul className="mt-4 sm:mt-5 space-y-2 sm:space-y-3">
                    {bullets.map((bullet: string, i: number) => (
                      <li key={i} className="flex items-start gap-2 text-text-secondary text-sm sm:text-base">
                        <span className="text-accent flex-shrink-0 mt-0.5">→</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div>
            <a
              href={cvPath}
              download
              target="_blank"
              rel="noreferrer"
              className="btn-secondary min-h-11 inline-flex items-center"
            >
              {t('ExperiencePage.downloadCV')}
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
